import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import SectionTitle from "../src/components/sectionTitle/sectionTitle";
import swal from "sweetalert";

const Order = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
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

    fetch("http://localhost:8000/order/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          const id = data._id;
          const msgTemplate = {
            service_id: "service_esd6cuw",
            template_id: "template_peizayb",
            user_id: "user_IPQt7Bei466UeZ7tBO084",
            template_params: {
              id,
            },
          };

          fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(msgTemplate),
          })
            .then((res) => res.json())
            .then((data) => {});
          e.target.reset();
          return swal("Thank You", "Order Successfully Done.", "success");
        }
      });
  };

  return (
    <>
      <Head>
        <title>Virtual Experts | Order</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="order-bg position-relative">
        <div className="background-color-skyblue">
          <div className="container d-md-flex justify-content-between align-items-center py-5">
            <h6 className="fs-30 roboto-font-family fw-400">Order Now</h6>
            <p className="fs-14">
              <span className="cursor-pointer" onClick={() => router.push("/")}>
                Home
              </span>{" "}
              <span className="text-warning mx-2">{`>`}</span>{" "}
              <span
                className="cursor-pointer"
                onClick={() => router.push("/order")}
              >
                Order Now
              </span>
            </p>
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
                    name="name"
                    placeholder="Your Name/Brand Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="fs-14 text-danger">Name Required</p>
                  )}
                </div>
                <div className="col-12 col-md-6 mt-3 mt-md-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="fs-14 text-danger">Email Required</p>
                  )}
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
                    <span className="fs-15">
                      Amazon Kindle Verified Reviews
                    </span>
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
                    name="productLink/ASIN"
                    placeholder="Product Link/ASIN"
                    {...register("productLinkOrASIN", { required: true })}
                    className="form-control mt-3"
                  />
                  {errors.productLinkOrASIN && (
                    <p className="fs-14 text-danger">
                      Product Link/ASIN Required
                    </p>
                  )}
                  <textarea
                    rows="5"
                    col="3"
                    placeholder="Description"
                    name="description"
                    {...register("description", { required: true })}
                    className="form-control my-4"
                  />
                  {errors.description && (
                    <p className="fs-14 text-danger">Description Required</p>
                  )}
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
    </>
  );
};

export default Order;
