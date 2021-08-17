import Image from "next/image";
import img1 from "../../../../images/Img-1.svg";
import img2 from "../../../../images/Img-2.svg";
import img3 from "../../../../images/Img-3.svg";
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
    <div>
      <div className="container">
        {services.map((service, index) => (
          <div key={index}>
            <Image
              className={`${styles.bannerContainer} img-fluid service-img`}
              src={service.img}
              alt=""
            />
            <h6>{service.title}</h6>
            <p>{service.description}</p>
            <p>Order</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
