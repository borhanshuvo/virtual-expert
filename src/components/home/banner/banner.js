import Image from "next/image";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
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
              <h1 className="fs-36 font-family-roboto">
                {bannerData[0].title}
              </h1>
              <p className="fs-15">{bannerData[0].description}</p>
              <button className="button px-4 py-1">
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
        {/* <Link href={footerLink.skype}>
          <a target="_blank" title={footerLink.skype}>
            <FaSkype className="d-block my-2 order-color" />
          </a>
        </Link>
        <Link href={footerLink.whatsApp}>
          <a target="_blank" title={footerLink.whatsApp}>
            <IoLogoWhatsapp className="d-block my-2 order-color" />
          </a>
        </Link>
        <Link href={footerLink.email}>
          <a target="_blank" title={footerLink.email}>
            <MdEmail className="d-block my-2 order-color" />
          </a>
        </Link> */}
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
    </>
  );
};

export default Banner;
