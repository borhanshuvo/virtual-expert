import Image from "next/image";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { blogData } from "../../src/components/fakeData/blogData";
import cardHeaderBg from "../../images/Others/Group 157.svg";
import cardHeaderImg from "../../images/v-logo.svg";
import { useForm } from "react-hook-form";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  TumblrShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
} from "react-share";

const BlogDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const currentBlog = blogData.find((blog) => blog.id === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <>
      <Head>
        <title>Virtual Experts | {currentBlog?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={currentBlog?.metaDescription} />
        <meta name="keyword" content={currentBlog?.metaKeyword} />
      </Head>

      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h6 className="fs-30 roboto-font-family fw-400">Blog</h6>
          <p className="fs-14">
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              Home
            </span>{" "}
            <span className="text-warning mx-2">{`>`}</span>{" "}
            <span
              className="cursor-pointer"
              onClick={() => router.push("/blog")}
            >
              Blog
            </span>
            <span className="text-warning mx-2">{`>`}</span>{" "}
            <span>{currentBlog?.title}</span>
          </p>
        </div>
      </div>

      <div className="w-100">
        <div className="container mt-5">
          <div className="d-none d-md-block">
            {currentBlog && (
              <Image
                src={currentBlog?.img}
                alt={currentBlog?.imgAlt}
                title={currentBlog?.imgAlt}
                layout="responsive"
                height="350"
                width="1000"
                className="borderRadius"
              />
            )}
          </div>
          <div className="d-block d-md-none">
            {currentBlog && (
              <Image
                src={currentBlog?.img}
                alt={currentBlog?.imgAlt}
                title={currentBlog?.imgAlt}
                layout="responsive"
                height="450"
                width="1000"
                className="borderRadius"
              />
            )}
          </div>
          <div className="row">
            <div className="col-md-8 my-md-5 mt-4">
              <div className="bolg-shadow py-3 px-md-5 px-3 borderRadius text-justify">
                {/* <div className="d-flex align-items-center justify-content-evenly mt-4 ">
                  <p style={{ fontSize: "14px" }}>
                    {" "}
                    <FaUser className="me-1" /> {currentBlog?.writerName}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    {" "}
                    <AiOutlineClockCircle className="me-1" />{" "}
                    {currentBlog?.publishedDate}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    {" "}
                    <BiMessageRounded className="me-1" /> {currentBlog?.view}
                  </p>
                </div> */}
                <h1 className="fs-24 my-4 lh-30">{ReactHtmlParser(currentBlog?.title)}</h1>
                <p className="fs-14 lh-36">{ReactHtmlParser(currentBlog?.description)}</p>
                <h2 className="fs-22 my-4 lh-30">{ReactHtmlParser(currentBlog?.subTitle_1)}</h2>
                <p className="fs-14 lh-36">
                  {ReactHtmlParser(currentBlog?.description_2)}
                </p>
                <div className="py-md-5 px-md-5">
                  <div className="border-start border-warning border-3">
                    <div className="ms-3">
                      <h2 className="fs-22 lh-30">{currentBlog?.subTitle_2}</h2>
                      <p className="fs-14 lh-36 background-color-skyblue py-2 px-3 borderRadius">
                        <i>{ReactHtmlParser(currentBlog?.description_3)}</i>
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="fs-22 mb-4 lh-30">{currentBlog?.subTitle_3}</h2>
                <p className="fs-14 lh-36">{ReactHtmlParser(currentBlog?.description_4)}</p>
                <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_4}</h2>
                <p className="fs-14 lh-36">
                  {ReactHtmlParser(currentBlog?.description_5)}
                </p>
                <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_5}</h2>
                <p className="fs-14 lh-36">
                  {ReactHtmlParser(currentBlog?.description_6)}
                </p>
                <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_6}</h2>
                <p className="fs-14 lh-36">{ReactHtmlParser(currentBlog?.description_7)}</p>
                <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_7}</h2>
                <p className="fs-14 lh-36">{ReactHtmlParser(currentBlog?.description_8)}</p>
                <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_8}</h2>
                <p className="fs-14 lh-36">
                  {ReactHtmlParser(currentBlog?.description_9)}
                </p>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div className="boxShadow">
                <div className="position-relative">
                  <div className="cardHeaderBg">
                    <Image src={cardHeaderBg} alt="header" />
                  </div>
                  <div className="cardHeaderImg">
                    <Image
                      src={cardHeaderImg}
                      className="mt-2 p-2"
                      alt="cardImage"
                    />
                  </div>
                </div>

                <div className="card-body mx-auto bg-white borderRadius">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-md-2 mx-0"
                  >
                    <div className="my-3">
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

                    <div className="my-3">
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

                    <div className="my-3">
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
                    </div>

                    <div className="my-3">
                      <textarea
                        rows="5"
                        col="3"
                        placeholder="Description"
                        name="description"
                        {...register("description", { required: true })}
                        className="form-control my-4"
                      />
                      {errors.description && (
                        <p className="fs-14 text-danger">
                          Description Required
                        </p>
                      )}
                    </div>

                    <button className="card-button mt-2 d-block" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`position-fixed left-0 top-30 bg-light`}>
        <FacebookShareButton
          url="https://virtual-expert.vercel.app/"
          className="d-block p-2"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://virtual-expert.vercel.app/"
          className="d-block p-2"
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>

        <PinterestShareButton
          url="https://virtual-expert.vercel.app/"
          className="d-block p-2"
        >
          <PinterestIcon size={32} round={true} />
        </PinterestShareButton>

        <RedditShareButton
          url="https://virtual-expert.vercel.app/"
          className="d-block p-2"
        >
          <RedditIcon size={32} round={true} />
        </RedditShareButton>

        <TwitterShareButton
          url="https://virtual-expert.vercel.app/"
          className="d-block p-2"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <TumblrShareButton
          url="https://virtual-expert.vercel.app/"
          className="d-block p-2"
        >
          <TumblrIcon size={32} round={true} />
        </TumblrShareButton>
      </div>
    </>
  );
};

export default BlogDetails;
