import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { blogData } from "../../src/components/fakeData/blogData";
import cardHeaderBg from "../../images/Others/Group 157.svg";
import cardHeaderImg from "../../images/v-logo.svg";

const Blog = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <>
      <Head>
        <title>Virtual Experts | Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
          <div className="col-md-8">
            <div className="row">
              {blogData.map((blog) => (
                <div
                  className="col-12 col-md-6 my-2 cursor-pointer"
                  key={blog.id}
                  onClick={() => router.push(`/blog/${blog.id}`)}
                >
                  <div className="mx-1 boxShadow borderRadius">
                    <Image
                      src={blog.img}
                      alt={blog.title}
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
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        <BiMessageRounded className="me-1" /> {blog.view}
                      </p>
                    </div>
                    <div className="px-3 mb-3">
                      <h3 className="fs-18 lh-36 m-0">{blog.title}</h3>
                      <p className="fs-14 lh-36 m-0">
                        {blog.description.slice(0, 49)}
                      </p>
                      <button
                        className="fs-14 px-3 py-2 d-inline-block mb-3 btn btn-orange"
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
    </>
  );
};

export default Blog;
