import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { blogData } from "../../src/components/fakeData/blogData";

const BlogDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const currentBlog = blogData.find((blog) => blog.id === id);

  return (
    <>
      <Head>
        <title>{currentBlog?.metaTitle}</title>
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

      <div className="blog-title-background py-md-5">
        <div className="container py-5">
          <h1 className="text-center text-white">{currentBlog?.metaTitle}</h1>
        </div>
      </div>

      <div className="w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 my-md-5 mt-4">
              <div className="boxShadow border py-3 px-md-5 px-3">
                <div className="d-none d-md-block">
                  {currentBlog && (
                    <Image
                      src={currentBlog?.img}
                      alt={currentBlog?.imgAlt}
                      title={currentBlog?.imgAlt}
                      layout="responsive"
                      height="420"
                      width="1000"
                      className="borderRadius mt-4"
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
                <div className="d-flex align-items-center justify-content-evenly mt-4 ">
                  <p style={{ fontSize: "14px" }}>
                    {" "}
                    <FaUser className="me-1" /> {currentBlog?.writerName}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    {" "}
                    <AiOutlineClockCircle className="me-1" />{" "}
                    {currentBlog?.publishedDate}
                  </p>
                </div>

                <h1 className="fs-32 my-4 lh-30">
                  {ReactHtmlParser(currentBlog?.title)}
                </h1>

                <h6 className="my-3">Table Of Contents</h6>
                <p className="table-of-content cursor-pointer d-inline-block">
                  {ReactHtmlParser(currentBlog?.tableOfContent)}
                </p>

                <div className="fs-28 my-4 lh-30">
                  {ReactHtmlParser(currentBlog?.subTitle)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description)}
                </p>

                <div className="fs-28 my-4 lh-30">
                  {ReactHtmlParser(currentBlog?.subTitle_1)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_2)}
                </p>

                <div className="fs-28 lh-30">
                  {ReactHtmlParser(currentBlog?.subTitle_2)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_3)}
                </p>

                <div className="fs-28 mb-4 lh-30">
                  {ReactHtmlParser(currentBlog?.subTitle_3)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_4)}
                </p>

                <div className="fs-28 my-4 lh-3">
                  {ReactHtmlParser(currentBlog?.subTitle_4)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_5)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_5)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_6)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_6)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_7)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_7)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_8)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_8)}
                </div>
                <p className="fs-14 lh-36 text-justify">
                  {ReactHtmlParser(currentBlog?.description_9)}
                </p>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div className="">
                {blogData.map((blog) => (
                  <div
                    className="col-12 cursor-pointer p-3 mb-4 border boxShadow rounded-1"
                    key={blog.id}
                    onClick={() => router.push(`/blog/${blog.id}`)}
                  >
                    <div className="row">
                      <div className="col-md-4">
                        <Image
                          src={blog.img}
                          title={blog.imgAlt}
                          alt={blog.imgAlt}
                          width="200"
                          height="150"
                          layout="responsive"
                          className="rounded-3 mt-3"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="px-3">
                          <h3 className="fs-18 lh-36 m-0">{blog.title}</h3>
                          <div className="d-flex justify-content-between">
                            <p>{blog.writerName}</p>
                            <p>{blog.publishedDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`position-fixed left-0 top-30`}>
        <FacebookShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>

        <PinterestShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <PinterestIcon size={32} round={true} />
        </PinterestShareButton>

        <RedditShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <RedditIcon size={32} round={true} />
        </RedditShareButton>

        <TwitterShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <TumblrShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <TumblrIcon size={32} round={true} />
        </TumblrShareButton>
      </div>
    </>
  );
};

export default BlogDetails;
