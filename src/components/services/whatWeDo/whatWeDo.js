import React from "react";
import ReactHtmlParser from "react-html-parser";

const WhatWeDo = ({ whatWeDo }) => {
  return (
    <>
      <div className="container py-5 my-3">
        <h6
          className={`textLeftAfterEffect fs-28 mb-4 lh-44 font-family-roboto`}
        >
          {ReactHtmlParser(whatWeDo?.title)}
        </h6>
        <p className="fs-15 text-color my-4 lh-lg text-justify">{ReactHtmlParser(whatWeDo?.description)}</p>
        <h6 className="fs-18 lh-30 font-family-roboto text-justify">
          {ReactHtmlParser(whatWeDo?.subDescription)}
        </h6>
      </div>
    </>
  );
};

export default WhatWeDo;
