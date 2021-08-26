import Image from "next/image";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import bannerImg from "../../../../images/Img-5.svg";
import styles from "./banner.module.css";
import { useForm } from "react-hook-form";
import cardHeaderBg from "../../../../images/Others/Group 157.svg";
import cardHeaderImg from "../../../../images/Others/img.svg";

const Banner = ({ bannerData, footerLink }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const title = data.title || titleData;
    const description = data.description || descriptionData;
    fetch("https://sleepy-mesa-08037.herokuapp.com/banner/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, _id: bannerData._id, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated Successful");
        setNumber(number + 1);
      });
  };

  return (
    <>
      <div className={`${styles.bannerContainer}`}>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <h1 className="fs-36 banner-lh-52 font-family-roboto">
                {bannerData[0].title}
              </h1>
              <p className="fs-15 lh-30">{bannerData[0].description}</p>
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
      <div className="position-fixed left-0 top-30 px-2 d-none d-md-block">
        <a
          target="_blank"
          title={footerLink.skype}
          className="position-relative d-flex align-items-center test"
        >
          <FaSkype className="d-block cursor-pointer my-1 order-color bg-white" />
          <span className="social-address fs-12 ms-1 text-secondary">
            Skype: {footerLink[0].skype}
          </span>
        </a>
        <a
          target="_blank"
          title={footerLink.whatsApp}
          className="position-relative d-flex align-items-center test"
        >
          <IoLogoWhatsapp className="d-block cursor-pointer my-2 order-color" />
          <span className="social-address fs-12 ms-1 text-secondary">
            WhatsApp: {footerLink[0].whatsApp}
          </span>
        </a>
        <a
          target="_blank"
          title={footerLink.email}
          className="position-relative d-flex align-items-center test"
        >
          <MdEmail className="d-block my-2 cursor-pointer order-color" />
          <span className="social-address fs-12 ms-1 text-secondary">
            Email: {footerLink[0].email}
          </span>
        </a>
      </div>

      {/* Pop up  */}
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
                  <Image src={cardHeaderBg} />
                </div>
                <div className="cardHeaderImg">
                  <Image src={cardHeaderImg} />
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
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mx-md-4 mx-0"
                >
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
    </>
  );
};

export default Banner;
