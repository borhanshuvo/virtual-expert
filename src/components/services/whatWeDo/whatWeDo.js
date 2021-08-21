import React from "react";

const WhatWeDo = ({whatWeDo}) => {
  return (
    <>
      <div className="container py-5 my-3">
        <h6 className={`textLeftAfterEffect fs-28 mb-4`}>{whatWeDo?.title}</h6>
        <p className="fs-15 text-color my-4 lh-lg">{whatWeDo?.description}</p>
        <h6 className="fs-18 lh-lg">{whatWeDo?.subDescription}</h6>
      </div>
    </>
  );
};

export default WhatWeDo;
