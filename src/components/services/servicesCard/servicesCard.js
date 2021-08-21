import Image from "next/image";
import React from "react";
import ring from "../../../../images/service/Ellipse 261.svg";
import angle from "../../../../images/Rectangle 266.svg";

const ServicesCard = ({ servicesCardData, serviceCardHeader }) => {
  return (
    <>
      <div className="background-color-skyblue py-5">

        <div className="position-relative col-9 col-md-3 mx-auto">
          <div className="border border-warning my-5 ring-title background-color-skyblue">
            <h6 className="text-center fs-28 lh-base p-3 textCenterAfterEffect">
              {serviceCardHeader?.title}
            </h6>
          </div>

          <div className="ring d-none d-md-block">
            <Image src={ring} />
          </div>

          <div className="angle d-none d-md-block">
            <Image src={angle} />
          </div>

          <div className="ring-mobile-size d-md-none d-block">
            <Image src={ring} height={50} width={50} />
          </div>

          <div className="angle-mobile-size d-md-none d-block">
            <Image src={angle} height={40} width={40} />
          </div>
          
        </div>

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
                  <div class="card h-100 border-0 borderRadius">
                    <div className="background-color-skyblue">
                      <Image
                        src={`${imgType} ; base64, ${servicesCard.img.img}`}
                        alt="waiting.."
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <div class="card-body">
                      <h6 className="fs-18 lh-base">{servicesCard.title}</h6>
                      <h6 className="fs-14 lh-lg">
                        {servicesCard.subTitle}
                      </h6>
                      {servicesCard.regularReview && (
                        <p className="fs-14 m-0">
                          Regular Review : ${servicesCard.regularReview} each
                        </p>
                      )}
                      {servicesCard.videoReview && (
                        <p className="fs-14 m-0">
                          Video Review : ${servicesCard.videoReview} each
                        </p>
                      )}
                      {servicesCard.top50Reviewers && (
                        <p className="fs-14 m-0">
                          Top 50 Reviewers : ${servicesCard.top50Reviewers} each
                        </p>
                      )}
                      {servicesCard.price && (
                        <p className="fs-14 m-0">Price : {servicesCard.price}</p>
                      )}
                      {servicesCard.delivery && (
                        <p className="fs-14 m-0">
                          Delivery : {servicesCard.delivery} days
                        </p>
                      )}
                      {servicesCard.warranty && (
                        <p className="fs-14">
                          Warranty : {servicesCard.warranty}
                        </p>
                      )}
                      {servicesCard.maintenance && (
                        <p className="fs-14">
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
