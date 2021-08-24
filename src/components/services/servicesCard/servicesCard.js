import Image from "next/image";
import React from "react";
import SectionTitle from "../../sectionTitle/sectionTitle";

const ServicesCard = ({ servicesCardData, serviceCardHeader }) => {
  return (
    <>
      <div className="background-color-skyblue py-5">
        <SectionTitle title={serviceCardHeader?.title} />
        <div className="container">
          <div className="row">
            {servicesCardData.map((servicesCard) => {
              let imgType;
              if (servicesCard.img.contentType === "image/svg+xml") {
                imgType = "data:image/svg+xml";
              } else if (servicesCard.img.contentType === "image/png") {
                imgType = "data:image/png";
              } else {
                imgType = "data:image/jpg";
              }

              return (
                <div className="col-md-4 pb-3" key={servicesCard._id}>
                  <div className="card h-100 border-0 borderRadius">
                    <div className="background-color-skyblue">
                      <Image
                        src={`${imgType} ; base64, ${servicesCard.img.img}`}
                        alt="waiting.."
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="fs-18 lh-28 roboto-font-family fw-normal">
                        {servicesCard.title}
                      </h3>
                      <p className="fs-14 lh-26 font-medium">
                        {servicesCard.subTitle}
                      </p>
                      {servicesCard.regularReview && (
                        <p className="fs-14 m-0 lh-26">
                          Regular Review : ${servicesCard.regularReview} each
                        </p>
                      )}
                      {servicesCard.videoReview && (
                        <p className="fs-14 m-0 lh-26">
                          Video Review : ${servicesCard.videoReview} each
                        </p>
                      )}
                      {servicesCard.top50Reviewers && (
                        <p className="fs-14 m-0 lh-26">
                          Top 50 Reviewers : ${servicesCard.top50Reviewers} each
                        </p>
                      )}
                      {servicesCard.price && (
                        <p className="fs-14 m-0 lh-26">
                          Price : {servicesCard.price}
                        </p>
                      )}
                      {servicesCard.delivery && (
                        <p className="fs-14 m-0 lh-26">
                          Delivery : {servicesCard.delivery} days
                        </p>
                      )}
                      {servicesCard.warranty && (
                        <p className="fs-14 lh-26">
                          Warranty : {servicesCard.warranty}
                        </p>
                      )}
                      {servicesCard.maintenance && (
                        <p className="fs-14 lh-26">
                          Maintenence : ${servicesCard.maintenance} per month
                        </p>
                      )}
                      <button
                        className="button mt-3"
                        style={{
                          padding: "5px 20px",
                          backgroundColor: "white",
                        }}
                      >
                        <h6 className="fs-14 d-inline">Order Now</h6>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
