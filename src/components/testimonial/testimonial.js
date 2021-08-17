import Image from "next/image";
import profileImg from "../../../images/Img.svg";

const Testimonial = () => {
  return (
    <section>
      <div className="container py-5">
        <h6 className="text-center py-3 rounded-3">Our TOP Amazon Clients</h6>
        <div className="col-12 col-md-6 boxShadow mx-auto mb-3">
          <div className="p-5">
            <Image src={profileImg} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
