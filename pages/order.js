import { useForm } from "react-hook-form";
import SectionTitle from "../src/components/sectionTitle/sectionTitle";

const Order = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    const newArray = Object.keys(data);
    const test = newArray.filter((a, index) => data[newArray[index]] !== false);
    const service = test.filter(
      (a) =>
        a !== "email" &&
        a !== "name" &&
        a !== "productLinkOrASIN" &&
        a !== "description"
    );
    const info = test.filter(
      (a) =>
        a === "email" ||
        a === "name" ||
        a === "productLinkOrASIN" ||
        a === "description"
    );

    const services = service.map((a) => data[a]);

    const otherInfo = info.map((a) => data[a]);
    const orderInfo = {};
    orderInfo.name = otherInfo[0];
    orderInfo.email = otherInfo[1];
    orderInfo.productLinkOrASIN = otherInfo[2];
    orderInfo.description = otherInfo[3];
    orderInfo.selectedServices = [...services];

    console.log(orderInfo);
  };
  return (
    <section>
      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h6 className="fs-30">Order Now</h6>
          <p className="fs-15">Home {`>`} Order Now</p>
        </div>
      </div>

      <div className="py-5 container">
        <SectionTitle title="Place an order to start" isBgWhite={true} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-12 col-md-6 mx-auto">
            <div className="row my-4">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name/Brand Name"
                  {...register("name")}
                />
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  {...register("email")}
                />
              </div>
            </div>
            <h6>Select Your item</h6>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("amazonVerifiedReviews")}
                    className="me-2 my-3"
                    value="Amazon Verified Reviewers"
                  />{" "}
                  <span className="fs-15">Amazon Verified Reviewers</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("amazonKindleVerifiedReviews")}
                    value="Amazon Kindle Verified Reviews"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Amazon Kindle Verified Reviews</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("removeNegativeAmazonReviewsFrom1stPage")}
                    value="Remove Negative Amazon Reviews from 1st Page"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">
                    Remove Negative Amazon Reviews from 1st Page
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("amazonSEORank1stPageInAmazonSearchEngine")}
                    value="Amazon SEO - Rank 1st Page in Amazon Search Engine"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">
                    Amazon SEO - Rank 1st Page in Amazon Search Engine
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("amazonHelpfulVotes")}
                    value="Amazon Helpful Votes"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Amazon Helpful Votes</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("reportAbuse")}
                    value="Report Abuse"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Report Abuse</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("questionAndAnswer")}
                    value="Question & Answer"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Question & Answer</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("fbmHijackerRemoval")}
                    value="FBM Hijacker Removal"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">FBM Hijacker Removal</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("amazonVideoUploader")}
                    value="Amazon Video Uploader"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Amazon Video Uploader</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("keywordBooster")}
                    value="Keyword Booster"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Keyword Booster</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("competitorProtectionAttack")}
                    value="Competitor Protection/Attack"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Competitor Protection/Attack</span>
                </div>
              </div>
              {/*  */}
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("ppcKeywordResearch")}
                    value="PPC Keyword Research"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">PPC Keyword Research</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("designAmazonListingImages")}
                    value="Design Amazon Listing Images"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Design Amazon Listing Images</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("enhanceBrandContentA+EBCDesignCopywriting")}
                    value=" Enhance Brand Content – A+ / EBC Design/Copywriting!"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">
                    Enhance Brand Content – A+ / EBC Design/Copywriting!
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("kindleBookCoverDesign")}
                    value="Kindle Book Cover Design"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Kindle Book Cover Design</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("bulletPointsForAmazonListing")}
                    value="Bullet Points for Amazon Listing"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">
                    Bullet Points for Amazon Listing
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("amazonProductDescription")}
                    value="Amazon Product Description"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Amazon Product Description</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("findASupplier")}
                    value="Find a Supplier"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Find a Supplier</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("competitorAnalysis")}
                    value="Competitor Analysis"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Competitor Analysis</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("amazonFBAAtoZConsultancy")}
                    value="Amazon FBA A-Z Consultancy!"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">Amazon FBA A-Z Consultancy!</span>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    {...register("amazonKindleBookAtoZConsultancy")}
                    value="Amazon Kindle Book A-Z Consultancy!"
                    className="me-2 my-3"
                  />{" "}
                  <span className="fs-15">
                    Amazon Kindle Book A-Z Consultancy!
                  </span>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Product Link/ASIN"
                  {...register("productLinkOrASIN")}
                  className="form-control mt-3"
                />
                <textarea
                  rows="5"
                  col="3"
                  {...register("description")}
                  className="form-control my-4"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-orange px-3 fs-15 py-2 text-white border-0 btn"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Order;
