import Image from "next/image";
import quoteIcon from "../../../images/icon.svg";
import profileImg from "../../../images/Img.svg";

const Testimonial = () => {
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
              “We have been attacked by our competitor We have ordered for
              Amazon Negative Review Removal service from Virtual Experts they
              help us within 72 hours.”
            </p>
            <h6 className="fw-bold fs-18">Benjamin Arneberg</h6>
            <p className="fs-14">CEO of PetHonesty</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
