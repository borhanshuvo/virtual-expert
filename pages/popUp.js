import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import cardHeaderBg from "../images/Others/Group 157.svg";
import cardHeaderImg from "../images/v-logo.svg";

const PopUp = () => {
  const router = useRouter();
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
    <>
      <Head>
        <title>Virtual Experts | Pop Up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="background-color-skyblue d-flex align-items-center justify-content-center vh-100">
        <div className="py-5 mx-auto">
          <div className="position-relative">
            <div className="cardHeaderBg">
              <Image src={cardHeaderBg} alt="header" />
            </div>
            <div className="cardHeaderImg">
              <Image src={cardHeaderImg} className="mt-2 p-2" alt="cardImage" />
            </div>
            <div className="btn-popup cursor-pointer">
              <AiOutlineClose size={24} onClick={() => router.push("/")} />
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
    </>
  );
};

export default PopUp;

PopUp.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
