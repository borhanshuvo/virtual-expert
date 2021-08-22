import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import bannerImg from "../../../../images/Img-5.svg";
import styles from "./banner.module.css";

const Banner = ({ bannerData, footerLink }) => {
  console.log(footerLink);
  return (
    <>
      <div className={`${styles.bannerContainer}`}>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <h1 className="fs-36 font-family-roboto">{bannerData[0].title}</h1>
              <p className="fs-15">{bannerData[0].description}</p>
              <button className="button px-4 py-1">
                <h4 className="d-inline fs-14 font-family-roboto">Get Free Quote!</h4>
              </button>
            </div>
            <div className="col-md-6 order-1 order-md-2 pb-5 pb-md-0">
              <Image src={bannerImg} alt="banner-image" />
            </div>
          </div>
        </div>
      </div>
      {/* social link goes here */}
      <div className="position-fixed left-0 top-50 px-2 bg-white d-none d-md-block">
        <Link href={footerLink[0].facebook}>
          <a target="_blank">
            <FaFacebook className="d-block my-2 order-color" />
          </a>
        </Link>
        <Link href={footerLink[0].instagram}>
          <a target="_blank" title="Hello world">
            <FaInstagram className="d-block my-2 order-color" />
          </a>
        </Link>
        <Link href={footerLink[0].telegram}>
          <a target="_blank" title="Hello world">
            <FaTelegram className="d-block my-2 order-color" />
          </a>
        </Link>
        <Link href={footerLink[0].twitter}>
          <a target="_blank" title="Hello world">
            <ImTwitter className="d-block my-2 order-color" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Banner;
