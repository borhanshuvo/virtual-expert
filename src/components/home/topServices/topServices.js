import Image from "next/image";
import img1 from "../../../../public/home_top_service_card_image1.svg";
import img2 from "../../../../public/home_top_service_card_image2.svg";
import img3 from "../../../../public/home_top_service_card_image3.svg";

import { RiArrowRightSLine } from 'react-icons/Ri'
import styles from "./topServices.module.css";

const services = [
  {
    img: img1,
    title: "AMAZON CUSTOMER REVIEW",
    description:
      "Product reviews engage customers, builds customer trust & help with Amazon SEO. Amazon reviews provide helpful data and insights into customer concerns and want. 75% of U.S. consumers said that, when shopping online…",
  },
  {
    img: img2,
    title: "REMOVE NEGATIVE AMAZON REVIEWS FROM 1ST PAGE",
    description:
      "Did you know that a survey we did in 2021 said that 56% of all Amazon Prime Customers read every single review on your listing’s first page? An additional 24% of people only read the top 3 reviews on your listing’s first page…",
  },
  {
    img: img3,
    title: "AMAZON SEO - RANK 1ST PAGE IN AMAZON SEARCH ENGINE",
    description:
      "We have helped rank thousands of products on Amazon. Every single campaign is met with a one on one, hands-on approach, offering professional advice on which keywords, off-page secrets, product pricing and giveaway…",
  },
];

const TopServices = () => {
  return (
    <div className="container py-5">
      <div className="py-5">
      <h6 className="fs-28 text-center textCenterAfterEffect">
        Our TOP 3 Services for Amazon FBA/Kindle Business
      </h6>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} col-4 p-4  mt-md-5`}>
            <div className="d-flex justify-content-center">
              <Image
                className={`${styles.bannerContainer} img-fluid service-img`}
                src={service.img}
                alt=""
              />
            </div>
            <h6 className="text-center mt-5">{service.title}</h6>
            <p className="text-center fs-15 mt-3 text-color ">{service.description}</p>
            <p className="text-center order-color">Order <RiArrowRightSLine /></p>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
      <p className={`${styles.viewButonStyle} borderColor text-center fs-14  py-2 px-3`}>View all Amazon Services</p>
      </div>
      </div>
    </div>
  );
};

export default TopServices;
