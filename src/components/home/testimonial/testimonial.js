import Image from "next/image";
import { useState } from "react";
import quoteIcon from "../../../../images/icon.svg";
import profileImg from "../../../../images/Img.svg";
import { testimonials } from "../../fakeData/testimonialData";

const Testimonial = () => {
  const [currentTestimonials, setCurrentTestimonial] = useState(
    testimonials[0]
  );

  const handleChange = (id) => {
    setCurrentTestimonial(testimonials[id]);
  };

  return (
    <section>
      <div className="container py-5">
        <h6 className="text-center py-3 rounded-3 fs-32">
          Our TOP Amazon Clients
        </h6>
        <div className="col-12 col-md-6 boxShadow mx-auto mb-3 position-relative">
          <div className="position-absolute left-38">
            <Image src={quoteIcon} alt="quoteIcon" height="80" width="80" />
          </div>
          <div className="p-5 text-center">
            <Image
              src={profileImg}
              alt="profile"
              width="70"
              height="70"
              className="rounded-circle borderColor "
            />
            <p className="fst-italic my-3 fs-14 lh-lg">
              “{currentTestimonials.text}”
            </p>
            <h6 className="fw-bold fs-18">{currentTestimonials.name}</h6>
            <p className="fs-14">{currentTestimonials.jobTitle}</p>
          </div>
          <div className="position-absolute right-38 d-flex flex-md-column">
            {testimonials.map((data, index) => (
              <div
                key={data.id}
                className="cursor-pointer mx-1"
                onClick={() => handleChange(index)}
              >
                {currentTestimonials.id === data.id ? (
                  <Image
                    src={data.image}
                    alt={data.id}
                    height="30"
                    width="30"
                    className="rounded-circle border border-warning"
                  />
                ) : (
                  <Image
                    src={data.image}
                    alt={data.id}
                    height="24"
                    width="24"
                    className="rounded-circle border border-warning"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
