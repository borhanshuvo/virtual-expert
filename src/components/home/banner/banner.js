import React from "react";
import Image from "next/image";

import styles from "./banner.module.css";
import bannerImg from "../../../../images/Img-5.svg";

const Banner = ({bannerData}) => {
  return (
    <>
      <div className={`${styles.bannerContainer}`}>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <h6 className="fs-36">{bannerData[0].title}</h6>
              <p className="fs-15">{bannerData[0].description}</p>
              <button className="button px-4 py-1">
                <h6 className="d-inline fs-14">Get Free Quote!</h6>
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
