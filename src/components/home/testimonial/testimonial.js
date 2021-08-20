import Image from "next/image";
import { useState } from "react";
import quoteIcon from "../../../../images/icon.svg";

const Testimonial = ({ testimonials }) => {
  const [currentTestimonials, setCurrentTestimonial] = useState(
    testimonials[0]
  );

  const handleChange = (id) => {
    setCurrentTestimonial(testimonials[id]);
  };

  let imgType;
  if (currentTestimonials.img.contentType === "image/svg+xml") {
    imgType = "data:image/svg+xml";
  } else if (currentTestimonials.img.contentType === "image/png") {
    imgType = "data:image/png";
  } else {
    imgType = "data:image/jpg";
  }

  return (
    <section>
      <div className="container py-5">
        <h6 className="text-center py-3 rounded-3 fs-32 textCenterAfterEffect">
          Our TOP Amazon Clients
        </h6>
        <div className="col-12 col-md-6 boxShadow mx-auto my-3 position-relative">
          <div className="position-absolute left-38">
            <Image src={quoteIcon} alt="quoteIcon" height="80" width="80" />
          </div>
          <div className="p-5 text-center">
            <Image
              src={`${imgType} ; base64, ${currentTestimonials.img.img}`}
              alt="Loading..."
              width="70"
              height="70"
              className="rounded-circle borderColor "
            />
            <p className="fst-italic my-3 fs-14 lh-lg">
              “{currentTestimonials.review}”
            </p>
            <h6 className="fw-bold fs-18">{currentTestimonials.name}</h6>
            <p className="fs-14">{currentTestimonials.jobTitle}</p>
          </div>
          <div className="position-absolute right-38 d-flex flex-md-column">
            {testimonials.map((data, index) => {
              let imgType;
              if (data.img.contentType === "image/svg+xml") {
                imgType = "data:image/svg+xml";
              } else if (data.img.contentType === "image/png") {
                imgType = "data:image/png";
              } else {
                imgType = "data:image/jpg";
              }
              return (
                <div
                  key={data._id}
                  className="cursor-pointer mx-1"
                  onClick={() => handleChange(index)}
                >
                  {currentTestimonials._id === data._id ? (
                    <Image
                      src={`${imgType} ; base64, ${data.img.img}`}
                      alt="Loading..."
                      height="30"
                      width="30"
                      className="rounded-circle border border-warning"
                    />
                  ) : (
                    <Image
                      src={`${imgType} ; base64, ${data.img.img}`}
                      alt="Loading..."
                      height="24"
                      width="24"
                      className="rounded-circle border border-warning"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
