import Image from "next/image";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import cover from "../images/PewDiePie-Facebook.png";
const array = [1, 2, 3];

const Blog = () => {
  return (
    <>
      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h6 className="fs-30">Blog</h6>
          <p className="fs-14">
            Home <span className="text-warning mx-2">{`>`}</span> About
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row ">
          {/* divide two main columns */}
          <div className="col-md-8">
            {/* <p
            className=" fw-bold button text-dark text-center d-flex align-items-center justify-content-center px-3 py-2"
            style={{ width: "100px" }}
          >
            <ImBlog className="me-2" style={{ fontSize: "25px" }} />
            Blogs
          </p> */}
            {/* <p style={{ border: "1px solid whiteSmoke" }}></p> */}
            <hr className="text-dark" />
            {/*  */}
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
            {array.map((num) => (
              <div className=" my-3 row boxShadow cursor-pointer" key={num}>
                <div className="col-md-6 p-1">
                  <Image
                    src={cover}
                    height="100"
                    width="150"
                    alt="blog"
                    layout="responsive"
                    className="rounded-3"
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <p className="fs-14">
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrat...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
