import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import SectionTitle from "../src/components/sectionTitle/sectionTitle";

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

    fetch("https://sleepy-mesa-08037.herokuapp.com/order/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          const subject = "You got a new order";
          const id = data._id;
          const msgTemplate = {
            service_id: "service_jpr5wh2",
            template_id: "template_445qkqh",
            user_id: "user_Gj21qvrXg9jH4lGJolreq",
            template_params: {
              id,
              subject,
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
                      id="Amazon Verified Reviewers"
                    />{" "}
                    <label
                      htmlFor="Amazon Verified Reviewers"
                      className="fs-15 cursor-pointer"
                    >
                      Amazon Verified Reviewers
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("amazonKindleVerifiedReviews")}
                      value="Amazon Kindle Verified Reviews"
                      className="me-2 my-3"
                      id="Amazon Kindle Verified Reviews"
                    />{" "}
                    <label
                      htmlFor="Amazon Kindle Verified Reviews"
                      className="fs-15 cursor-pointer"
                    >
                      Amazon Kindle Verified Reviews
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("removeNegativeAmazonReviewsFrom1stPage")}
                      value="Remove Negative Amazon Reviews from 1st Page"
                      className="me-2 my-3"
                      id="Remove Negative Amazon Reviews from 1st Page"
                    />{" "}
                    <label
                      htmlFor="Remove Negative Amazon Reviews from 1st Page"
                      className="fs-15 cursor-pointer"
                    >
                      Remove Negative Amazon Reviews from 1st Page
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("amazonSEORank1stPageInAmazonSearchEngine")}
                      value="Amazon SEO - Rank 1st Page in Amazon Search Engine"
                      className="me-2 my-3"
                      id="Amazon SEO - Rank 1st Page in Amazon Search Engine"
                    />{" "}
                    <label
                      htmlFor="Amazon SEO - Rank 1st Page in Amazon Search Engine"
                      className="fs-15 cursor-pointer"
                    >
                      Amazon SEO - Rank 1st Page in Amazon Search Engine
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("amazonHelpfulVotes")}
                      value="Amazon Helpful Votes"
                      className="me-2 my-3"
                      id="Amazon Helpful Votes"
                    />{" "}
                    <label
                      htmlFor="Amazon Helpful Votes"
                      className="fs-15 cursor-pointer"
                    >
                      Amazon Helpful Votes
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("reportAbuse")}
                      value="Report Abuse"
                      className="me-2 my-3"
                      id="Report Abuse"
                    />{" "}
                    <label
                      htmlFor="Report Abuse"
                      className="fs-15 cursor-pointer"
                    >
                      Report Abuse
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("questionAndAnswer")}
                      value="Question & Answer"
                      className="me-2 my-3"
                      id="Question & Answer"
                    />{" "}
                    <label htmlFor="Question & Answer" className="fs-15">
                      Question & Answer
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("fbmHijackerRemoval")}
                      value="FBM Hijacker Removal"
                      className="me-2 my-3"
                      id="FBM Hijacker Removal"
                    />{" "}
                    <label
                      htmlFor="FBM Hijacker Removal"
                      className="fs-15 cursor-pointer"
                    >
                      FBM Hijacker Removal
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("amazonVideoUploader")}
                      value="Amazon Video Uploader"
                      className="me-2 my-3"
                      id="Amazon Video Uploader"
                    />{" "}
                    <label
                      htmlFor="Amazon Video Uploader"
                      className="fs-15 cursor-pointer"
                    >
                      Amazon Video Uploader
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("keywordBooster")}
                      value="Keyword Booster"
                      className="me-2 my-3"
                      id="Keyword Booster"
                    />{" "}
                    <label
                      htmlFor="Keyword Booster"
                      className="fs-15 cursor-pointer"
                    >
                      Keyword Booster
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("competitorProtectionAttack")}
                      value="Competitor Protection/Attack"
                      className="me-2 my-3"
                      id="Competitor Protection/Attack"
                    />{" "}
                    <label
                      htmlFor="Competitor Protection/Attack"
                      className="fs-15 cursor-pointer"
                    >
                      Competitor Protection/Attack
                    </label>
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
                      id="PPC Keyword Research"
                    />{" "}
                    <span
                      htmlFor="PPC Keyword Research"
                      className="fs-15 cursor-pointer"
                    >
                      PPC Keyword Research
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("designAmazonListingImages")}
                      value="Design Amazon Listing Images"
                      className="me-2 my-3"
                      id="Design Amazon Listing Images"
                    />{" "}
                    <label
                      htmlFor="Design Amazon Listing Images"
                      className="fs-15 cursor-pointer"
                    >
                      Design Amazon Listing Images
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("enhanceBrandContentA+EBCDesignCopywriting")}
                      value=" Enhance Brand Content – A+ / EBC Design/Copywriting!"
                      className="me-2 my-3"
                      id="Enhance Brand Content – A+ / EBC Design/Copywriting!"
                    />{" "}
                    <label
                      htmlFor="Enhance Brand Content – A+ / EBC Design/Copywriting!"
                      className="fs-15 cursor-pointer"
                    >
                      Enhance Brand Content – A+ / EBC Design/Copywriting!
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("kindleBookCoverDesign")}
                      value="Kindle Book Cover Design"
                      className="me-2 my-3"
                      id="Kindle Book Cover Design"
                    />{" "}
                    <label
                      htmlFor="Kindle Book Cover Design"
                      className="fs-15 cursor-pointer"
                    >
                      Kindle Book Cover Design
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("bulletPointsForAmazonListing")}
                      value="Bullet Points for Amazon Listing"
                      className="me-2 my-3"
                      id="Bullet Points for Amazon Listing"
                    />{" "}
                    <label
                      htmlFor="Bullet Points for Amazon Listing"
                      className="fs-15 cursor-pointer"
                    >
                      Bullet Points for Amazon Listing
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("amazonProductDescription")}
                      value="Amazon Product Description"
                      className="me-2 my-3"
                      id="Amazon Product Description"
                    />{" "}
                    <label
                      htmlFor="Amazon Product Description"
                      className="fs-15 cursor-pointer"
                    >
                      Amazon Product Description
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("findASupplier")}
                      value="Find a Supplier"
                      className="me-2 my-3"
                      id="Find a Supplier"
                    />{" "}
                    <label
                      htmlFor="Find a Supplier"
                      className="fs-15 cursor-pointer"
                    >
                      Find a Supplier
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("competitorAnalysis")}
                      value="Competitor Analysis"
                      className="me-2 my-3"
                      id="Competitor Analysis"
                    />{" "}
                    <label
                      htmlFor="Competitor Analysis"
                      className="fs-15 cursor-pointer"
                    >
                      Competitor Analysis
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("amazonFBAAtoZConsultancy")}
                      value="Amazon FBA A-Z Consultancy!"
                      className="me-2 my-3"
                      id="Amazon FBA A-Z Consultancy!"
                    />{" "}
                    <label
                      htmlFor="Amazon FBA A-Z Consultancy!"
                      className="fs-15 cursor-pointer"
                    >
                      Amazon FBA A-Z Consultancy!
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("amazonKindleBookAtoZConsultancy")}
                      value="Amazon Kindle Book A-Z Consultancy!"
                      className="me-2 my-3"
                      id="Amazon Kindle Book A-Z Consultancy!"
                    />{" "}
                    <label
                      htmlFor="Amazon Kindle Book A-Z Consultancy!"
                      className="fs-15 cursor-pointer"
                    >
                      Amazon Kindle Book A-Z Consultancy!
                    </label>
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
