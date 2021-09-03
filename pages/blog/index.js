import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import ReactHtmlParser from "react-html-parser";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cardHeaderBg from "../../images/Others/Group 157.svg";
import cardHeaderImg from "../../images/v-logo.svg";
import { blogData } from "../../src/components/fakeData/blogData";
import SideLink from "../../src/components/sideLink/sideLink";

const Blog = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    data.subject = `You got a new mail from ${data.name}`;
    const msgTemplate = {
      service_id: "service_bnwytsn",
      template_id: "template_9rugjbz",
      user_id: "user_SWFeTeBulzLsvOS4miuh4",
      template_params: data,
    };

    const sendMessage = async () => {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(msgTemplate),
      });
      if (res.status === 200) {
        toast.success("Message Sent Successfully");
      }
    };

    sendMessage();
    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Virtual Experts | Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h6 className="fs-30 roboto-font-family fw-400">Blog</h6>
          <p className="fs-14">
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              Home
            </span>{" "}
            <span className="text-warning mx-2">{`>`}</span>{" "}
            <span
              className="cursor-pointer"
              onClick={() => router.push("/blog")}
            >
              Blog
            </span>
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ">
          {/* divide two main columns */}
          <div className="col-md-8 mb-md-5">
            <div className="row">
              {blogData.map((blog) => (
                <div
                  className="col-12 col-md-6 my-2 cursor-pointer"
                  key={blog.id}
                  onClick={() => router.push(`/blog/${blog.id}`)}
                >
                  <div className="mx-1 boxShadow borderRadius h-100">
                    <Image
                      src={blog.img}
                      title={blog.imgAlt}
                      alt={blog.imgAlt}
                      width="200"
                      height="150"
                      layout="responsive"
                      className="rounded-3"
                    />
                    <div className="d-flex align-items-center justify-content-evenly mt-2 ">
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        <FaUser className="me-1" /> {blog.writerName}
                      </p>
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        <AiOutlineClockCircle className="me-1" />{" "}
                        {blog.publishedDate}
                      </p>
                      {/* <p style={{ fontSize: "14px" }}>
                        {" "}
                        <BiMessageRounded className="me-1" /> {blog.view}
                      </p> */}
                    </div>
                    <div className="px-3 mb-3">
                      <h3 className="fs-18 lh-36 m-0">{blog.title}</h3>
                      <p className="fs-14 lh-36 m-0">
                        {ReactHtmlParser(blog.cardDescription)}
                      </p>
                      <button
                        className="fs-14 my-2 px-3 py-2 d-inline-block mb-3 btn btn-orange btn-outline-warning"
                        onClick={() => router.push(`/blog/${blog.id}`)}
                      >
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================================== */}
          {/* main 2nd col */}
          <div className="col-md-4 mt-2">
            <div className="boxShadow">
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
              </div>

              <div className="card-body mx-auto bg-white borderRadius">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mx-md-2 mx-0"
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
      <SideLink />
    </>
  );
};

export default Blog;
