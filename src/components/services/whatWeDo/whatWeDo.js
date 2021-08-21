import React from "react";
import styles from "./whatWeDo.module.css";

const WhatWeDo = ({whatWeDo}) => {
  return (
    <>
      <div className="container py-5 my-3">
        <h6 className={`${styles.title} fs-28 mb-4`}>{whatWeDo?.title}</h6>
        <p className="fs-15 text-color my-4 lh-lg">{whatWeDo?.description}</p>
        <h6 className="fs-18 lh-lg">{whatWeDo?.subDescription}</h6>
      </div>
    </>
  );
};

export default WhatWeDo;
