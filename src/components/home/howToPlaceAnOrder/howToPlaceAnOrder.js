import Image from "next/image";
import questionImage from "../../../../images/Img.svg";

const HowToPlaceAnOrder = () => {
  return (
    <section className="py-5 background-color-skyblue ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5">
            <Image
              src={questionImage}
              alt="questionImg"
              height="411"
              width="574"
            />
          </div>
          <div className="col-12 col-md-7">
            <h6 className="fs-28 textLeftAfterEffect">
              How to Place an Order?
            </h6>
            <div className="d-flex fs-14 mt-4">
              <span className="me-2 numberBefore">01</span>
              <p>
                You must select a service & fill the order form as per
                instruction.
              </p>
            </div>
            <div className="d-flex fs-14">
              <span className="me-2 numberBefore">02</span>
              <p>
                Once we receive your request, we will contact you & let you know
                the total service fee and other details.{" "}
              </p>
            </div>
            <div className="d-flex fs-14">
              <span className="me-2 numberBefore">03</span>
              <p>
                Or you can contact us via WhatsApp/Skype for the quickest
                response.{" "}
              </p>
            </div>
            <div className="d-flex fs-14">
              <span className="me-2 numberBefore">04</span>
              <p>
                Once we receive your payment and all details related to the
                project, we will start your project. {" "}
              </p>
            </div>
            <div className="d-flex fs-14">
              <span className="me-2 numberBefore">05</span>
              <p>
                project.  We will submit our working report once it is complete.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaceAnOrder;
