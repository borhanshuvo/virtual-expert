import Image from "next/image";
import roundIcon from "../images/service/Ellipse 261.svg";

const Order = () => {
  return (
    <section>
      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h6 className="fs-30">Order Now</h6>
          <p className="fs-14">Home {`>`} Order Now</p>
        </div>
      </div>
      <div className="py-5 container">
        <div className="col-12 col-md-5 mx-auto border border-1 border-warning order-section-card position-relative">
          <div className="position-absolute end-0">
            <Image src={roundIcon} alt="round-Icon" width="65" height="65" />
          </div>
          <div>
            <h6 className="fs-28 px-5 py-3 text-center textCenterAfterEffect">
              Place an Order to Start
            </h6>
          </div>
        </div>
        <div className="col-12 col-md-6 mx-auto">
          <div className="row my-4">
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name/Brand Name"
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
          </div>
          <h6>Select Your item</h6>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2 my-2" />{" "}
                <span className="fs-14">Amazon Verified Reviewers</span>
              </div>
            </div>
            <input
              type="text"
              placeholder="Product Link/ASIN"
              className="form-control mt-3"
            />
            <textarea rows="5" col="3" className="form-control my-4" />
            <div>
              <button className="bg-warning px-3 fs-14 py-2 text-white border-0 btn">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
