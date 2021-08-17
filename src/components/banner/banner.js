import React from "react";
import Image from "next/image";

import styles from "./banner.module.css";
import bannerImg from "../../../images/Img-5.svg";

const Banner = () => {
  return (
    <>
      <div className={`${styles.bannerContainer}`}>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <h6>Amazon FBA/Kindle & Digital Markketing Consultant.</h6>
              <p>Grow your brands on Amazon!</p>
              <button className="button px-4 py-1">
                <p className="d-inline">Get Free Quote!</p>
              </button>
            </div>
            <div className="col-md-6 order-1 order-md-2 pb-5 pb-md-0">
              <Image src={bannerImg} alt="banner-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
