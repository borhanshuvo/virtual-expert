import React from "react";
import Image from "next/image";

const ServicesCard = ({ servicesCardData }) => {
  return (
    <>
      <div className="background-color-skyblue py-5">
        <h6 className="text-center my-5">
          Our Amazon FBA/Kindle & Digital Marketing Services
        </h6>
        <div className="container">
          <div className="row">
            {servicesCardData.map((servicesCard) => (
              <div className="col-md-4 pb-3" key={servicesCard._id}>
                <Image
                  src={servicesCard.img}
                  alt={servicesCard.img}
                  width={200}
                  height={200}
                />
                <div className="bg-white p-3 rounded-3" style={{height: '300px'}}>
                  <h6 className="fs-18">{servicesCard.title}</h6>
                  <h6 className="fs-14">{servicesCard.subTitle}</h6>
                  {servicesCard.regularReview && (
                    <p className="fs-14">Regular Review : ${servicesCard.regularReview} each</p>
                  )}
                  {servicesCard.videoReview && (
                    <p className="fs-14">Video Review : ${servicesCard.videoReview} each</p>
                  )}
                  {servicesCard.top50Reviewers && (
                    <p className="fs-14">
                      Top 50 Reviewers : ${servicesCard.top50Reviewers} each
                    </p>
                  )}
                  {servicesCard.price && (
                    <p className="fs-14">Price : {servicesCard.price}</p>
                  )}
                  {servicesCard.delivery && (
                    <p className="fs-14">Delivery : {servicesCard.delivery} days</p>
                  )}
                  {servicesCard.warranty && (
                    <p className="fs-14">Warranty : {servicesCard.warranty} days free maintenence</p>
                  )}
                  {servicesCard.maintenence && (
                    <p className="fs-14">Maintenence : ${servicesCard.maintenence} per month</p>
                  )}
                  <button className="button" style={{padding: '5px 20px', backgroundColor: 'white'}}><h6 className="fs-14 d-inline">Order Now</h6></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
