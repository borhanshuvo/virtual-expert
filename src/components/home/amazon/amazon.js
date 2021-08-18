import Image from "next/image";
import React from "react";
import amazonImg from "../../../../images/Img-4.svg";
import styles from "./amazon.module.css";

const Amazon = () => {
  return (
    <>
      <div className={`${styles.amazonContainer}`}>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 pb-5 pb-md-0 px-5">
              <Image src={amazonImg} alt="banner-image" />
            </div>
            <div className="col-md-6">
              <h6 className="fs-28 textLeftAfterEffect">
                Why Amazon FBA/Kindle & Digital Marketing?
              </h6>
              <p className="fs-14 mt-4 lh-lg">
                Online Shopping US 2015 report reveals that 70% of Americans
                shopping online every week. So maximum Products/Brands are
                already moving to Online Stores. Some of them sell products on
                various E-commerce sites like Amazon.com. Online-based
                businesses are growing day by day, those products/brands are
                requiring Online Marketing specialists to promote their products
                Online.
                <br /> Virtual Experts Ltd. is the well-known USA based Amazon
                FBA/Kindle & Digital Marketing Agency. Who works to promote your
                products & improves your product brand value online. We have
                different types of services for our clients through which they
                can advertise their products online and can boost their sales
                and brand value. We have more than 7 years of experience at
                Amazon FBA/Kindle consultancy & Digital Marketing.
                <br /> We are here to promote your brands professionally.
                Moreover, our numerous Amazon FBA/FBM & Digital Marketing
                services can ensure your potential sales & growth. For more
                details, please check our services section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amazon;
