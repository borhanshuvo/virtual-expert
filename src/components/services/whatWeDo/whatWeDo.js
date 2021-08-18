import React from "react";
import styles from "./whatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <>
      <div className="container py-5 my-3">
        <h6 className={`${styles.title} fs-28 mb-4`}>What We Do</h6>
        <p className="fs-15 text-color my-4">
          Virtual Experts is the well-known USA based Amazon FBA/Kindle
          Consultant & Digital Marketing Agency. Who works to promote your
          products & improves your product brand value Online. We have different
          types of services for our clients through which they can advertise
          their products online and can boost their sales and brand value. We
          have more than 7 years of experience at Amazon FBA/Kindle Book
          consultancy & Digital Marketing.
        </p>
        <h6 className="fs-18">
          You can choose your preferable services from our lists. If you are not
          sure which will be best for your Amazon FBA/Kindle Book or Business,
          then feel free to contact us!
        </h6>
      </div>
    </>
  );
};

export default WhatWeDo;
