import Image from "next/image";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import cover from "../images/PewDiePie-Facebook.png";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const array = [1, 2, 3];

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
              {array.map((num) => (
                <div className="col-12 col-md-6 my-2 cursor-pointer" key={num}>
                  <div className="mx-1 boxShadow borderRadius">
                    <Image src={cover} alt="blog" className="img-fluid" />
                    <div className="d-flex align-items-center justify-content-evenly mt-2 ">
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        <FaUser className="me-1" /> Kamon Ahmed
                      </p>
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        <AiOutlineClockCircle className="me-1" /> August 17 2021
                      </p>
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        <BiMessageRounded className="me-1" /> 0
                      </p>
                    </div>
                    <div
                      className="p-3 mb-3 scrollBlog"
                      style={{ height: "170px", overflow: "scroll" }}
                    >
                      <p className="fs-14">
                        n publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available n publishing
                        and graphic design, Lorem ipsum is a placeholder text
                        commonly used to demonstrate the visual form of a
                        document or a typeface without relying on meaningful
                        content. Lorem ipsum may be used as a placeholder before
                        final copy is available{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================================== */}
          {/* main 2nd col */}
          <div className="col-md-4 mt-4">
            <p className="text-center"><u>Contact Us</u></p>
            <div className="card-body mx-auto bg-white borderRadius">
              <form onSubmit={handleSubmit(onSubmit)} className="mx-md-4 mx-0">
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
    </>
  );
};

export default Blog;
