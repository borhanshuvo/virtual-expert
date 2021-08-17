import Image from "next/image";
import Service1 from "../../../../images/Group 150.svg";

const WhyChooseVirtualExports = () => {
  return (
    <section className="py-5 background-color-skyblue">
      <div className="container">
        <h6 className="fs-32 text-center">Why Choose Virtual Experts?</h6>
        <p className="col-12 col-md-8 mx-auto fs-14 text-center">
          Virtual Experts LTD has around 7 years of experience in Amazon
          FBA/Kindle business model and consultancy. We also sell products on
          Amazon besides being a marketing agency.
        </p>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="m-2 bg-white p-4">
              <Image src={Service1} alt="service" height="60" width="60" />
              <h6 className="fs-16">Experienced</h6>
              <p className="fs-14">
                We have 7 years of experience in Amazon FBA/FBM Business &
                Marketing strategy as well.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="m-2 bg-white p-4">
              <Image src={Service1} alt="service" height="60" width="60" />
              <h6 className="fs-16">Experienced</h6>
              <p className="fs-14">
                We have 7 years of experience in Amazon FBA/FBM Business &
                Marketing strategy as well.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="m-2 bg-white p-4">
              <Image src={Service1} alt="service" height="60" width="60" />
              <h6 className="fs-16">Experienced</h6>
              <p className="fs-14">
                We have 7 years of experience in Amazon FBA/FBM Business &
                Marketing strategy as well.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="mx-2 mt-4 bg-white p-4">
              <Image src={Service1} alt="service" height="60" width="60" />
              <h6 className="fs-16">Experienced</h6>
              <p className="fs-14">
                We have 7 years of experience in Amazon FBA/FBM Business &
                Marketing strategy as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVirtualExports;
