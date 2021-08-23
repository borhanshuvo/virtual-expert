import React from 'react';
import Image from 'next/image';
import cover from '../images/PewDiePie-Facebook.png';
import { FaUser } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { ImBlog } from 'react-icons/im';

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-8">
          <p
            className=" fw-bold button text-dark text-center d-flex align-items-center justify-content-center px-3 py-2"
            style={{ width: '100px' }}
          >
            <ImBlog className="me-2" style={{ fontSize: '25px' }} />
            Blogs
          </p>
          <p style={{ border: '1px solid whiteSmoke' }}></p>
          <div className="row">
            <div
              className="col-md-5 shadow-sm bg-light my-4 mx-2"
              style={{
                padding: '0',
                margin: '0',
                borderRadius: '0px 0px 20px 20px',
              }}
            >
              <Image src={cover} alt="blog" className="" />
              <div className="d-flex align-items-center justify-content-evenly mt-2 ">
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <FaUser className="me-1" /> Kamon Ahmed
                </p>
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <AiOutlineClockCircle className="me-1" /> August 17 2021
                </p>
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <BiMessageRounded className="me-1" /> 0
                </p>
              </div>
              <div
                className="p-3 mb-3 scrollBlog"
                style={{ height: '170px', overflow: 'scroll' }}
              >
                <p>
                  n publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available n publishing and graphic design, Lorem ipsum is a
                  placeholder text commonly used to demonstrate the visual form
                  of a document or a typeface without relying on meaningful
                  content. Lorem ipsum may be used as a placeholder before final
                  copy is available{' '}
                </p>
              </div>
            </div>
            {/* ================== second col*/}
            <div
              className="col-md-5 shadow-sm bg-light my-4 mx-2"
              style={{
                padding: '0',
                margin: '0',
                borderRadius: '0px 0px 20px 20px',
              }}
            >
              <Image src={cover} alt="blog" className="" />
              <div className="d-flex align-items-center justify-content-evenly mt-2">
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <FaUser className="me-1" /> Kamon Ahmed
                </p>
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <AiOutlineClockCircle className="me-1" /> August 17 2021
                </p>
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <BiMessageRounded className="me-1" /> 0
                </p>
              </div>
              <div
                className="p-3 mb-3 scrollBlog"
                style={{ height: '170px', overflow: 'scroll' }}
              >
                <p>
                  n publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available n publishing and graphic design, Lorem ipsum is a
                  placeholder text commonly used to demonstrate the visual form
                  of a document or a typeface without relying on meaningful
                  content. Lorem ipsum may be used as a placeholder before final
                  copy is available{' '}
                </p>
              </div>
            </div>
            {/* ================== third col*/}
            <div
              className="col-md-5 shadow-sm bg-light my-4 mx-2"
              style={{
                padding: '0',
                margin: '0',
                borderRadius: '0px 0px 20px 20px',
              }}
            >
              <Image src={cover} alt="blog" className="" />
              <div className="d-flex align-items-center justify-content-evenly mt-2">
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <FaUser className="me-1" /> Kamon Ahmed
                </p>
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <AiOutlineClockCircle className="me-1" /> August 17 2021
                </p>
                <p style={{ fontSize: '14px' }}>
                  {' '}
                  <BiMessageRounded className="me-1" /> 0
                </p>
              </div>
              <div
                className={`scrollBlog p-3 mb-3`}
                style={{ height: '170px', overflow: 'scroll' }}
              >
                <p>
                  n publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available n publishing and graphic design, Lorem ipsum is a
                  placeholder text commonly used to demonstrate the visual form
                  of a document or a typeface without relying on meaningful
                  content. Lorem ipsum may be used as a placeholder before final
                  copy is available{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================================== */}

        <div className="col-md-4 mt-3">
          <div
            className=" my-3 row shadow-sm"
            style={{ backgroundColor: 'whitesmoke' }}
          >
            <div className="col-md-6">
              <Image
                src={cover}
                height="100"
                width="150"
                alt="blog"
                className=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <p>cry dart tear maann</p>
            </div>
          </div>
          <div
            className=" my-3 row shadow-sm"
            style={{ backgroundColor: 'whitesmoke' }}
          >
            <div className="col-md-6">
              <Image
                src={cover}
                height="100"
                width="150"
                alt="blog"
                className=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <p>cry dart tear maann</p>
            </div>
          </div>
          <div
            className="my-3 row shadow-sm"
            style={{ backgroundColor: 'whitesmoke' }}
          >
            <div className="col-md-6">
              <Image
                src={cover}
                height="100"
                width="150"
                alt="blog"
                className=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <p>cry dart tear maann</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
