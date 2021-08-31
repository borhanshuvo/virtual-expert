import Image from "next/image";
import React from "react";
import bannerImg from "../../../../images/Img-5.svg";
import styles from "./banner.module.css";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import cardHeaderBg from "../../../../images/Others/Group 157.svg";
import cardHeaderImg from "../../../../images/v-logo.svg";
import SideLink from "../../sideLink/sideLink";

const Banner = ({ bannerData, footerLink }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const msgTemplate = {
      service_id: "service_esd6cuw",
      template_id: "template_peizayb",
      user_id: "user_IPQt7Bei466UeZ7tBO084",
      template_params: {
        data,
      },
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(msgTemplate),
    })
      .then((res) => res.json())
      .then((data) => {});
    e.target.reset();
  };
  return (
    <div className="">
      <div className={`${styles.bannerContainer}`}>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <h1 className="fs-36 banner-lh-52 font-family-roboto">
                {bannerData[0].title}
              </h1>
              <p className="fs-15 lh-30 text-justify">{bannerData[0].description}</p>
              <button
                className="button px-4 py-1"
                data-bs-toggle="modal"
                data-bs-target="#popup"
              >
                <h4 className="d-inline fs-14 font-family-roboto">
                  Get Free Quote!
                </h4>
              </button>
            </div>
            <div className="col-md-6 order-1 order-md-2 pb-5 pb-md-0">
              <Image src={bannerImg} alt="banner-image" />
            </div>
          </div>
        </div>
      </div>

      {/* social link goes here */}
      <SideLink />

      {/* PopUp Modal */}
      <div
        className="modal fade"
        id="popup"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="position-relative">
                <div className="cardHeaderBg">
                  <Image src={cardHeaderBg} alt="header" />
                </div>
                <div className="cardHeaderImg">
                  <Image
                    src={cardHeaderImg}
                    className="mt-2 p-2"
                    alt="cardImage"
                  />
                </div>
                <div className="btn-popup cursor-pointer">
                  <AiOutlineClose
                    size={24}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </div>

              <div className="card-body mx-auto bg-white borderRadius">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name/Brand Name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="fs-14 text-danger">Name Required</p>
                    )}
                  </div>

                  <div className="my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="fs-14 text-danger">Email Required</p>
                    )}
                  </div>

                  <div className="my-3">
                    <input
                      type="text"
                      name="productLink/ASIN"
                      placeholder="Product Link/ASIN"
                      {...register("productLinkOrASIN", { required: true })}
                      className="form-control mt-3"
                    />
                    {errors.productLinkOrASIN && (
                      <p className="fs-14 text-danger">
                        Product Link/ASIN Required
                      </p>
                    )}
                  </div>

                  <div className="my-3">
                    <textarea
                      rows="5"
                      col="3"
                      placeholder="Description"
                      name="description"
                      {...register("description", { required: true })}
                      className="form-control my-4"
                    />
                    {errors.description && (
                      <p className="fs-14 text-danger">Description Required</p>
                    )}
                  </div>

                  <button className="card-button mt-2 d-block" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
