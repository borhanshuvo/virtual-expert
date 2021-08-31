import Image from "next/image";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { blogData } from "../../src/components/fakeData/blogData";
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
  return (
    <>
      <Head>
        <title>Virtual Experts | Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

      <div className="w-100 container">
        <div className="mt-4 d-none d-md-block">
          {currentBlog && (
            <Image
              src={currentBlog?.img}
              alt={currentBlog?.title}
              layout="responsive"
              height="350"
              width="1000"
              className="borderRadius"
            />
          )}
        </div>
        <div className="mt-4 d-block d-md-none">
          {currentBlog && (
            <Image
              src={currentBlog?.img}
              alt={currentBlog?.title}
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
          <p style={{ fontSize: "14px" }}>
            {" "}
            <BiMessageRounded className="me-1" /> {currentBlog?.view}
          </p>
        </div>
        <h1 className="fs-24 my-4 lh-30">{currentBlog?.title}</h1>
        <p className="fs-14 lh-36">{currentBlog?.description}</p>
        <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_1}</h2>
        <p className="fs-14 lh-36">{ReactHtmlParser(currentBlog?.description_2)}</p>
        <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_2}</h2>
        <p className="fs-14 lh-36">{currentBlog?.description_3}</p>
        <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_3}</h2>
        <p className="fs-14 lh-36">{currentBlog?.description_4}</p>
        <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_4}</h2>
        <p className="fs-14 lh-36">{ReactHtmlParser(currentBlog?.description_5)}</p>
        <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_5}</h2>
        <p className="fs-14 lh-36">{ReactHtmlParser(currentBlog?.description_6)}</p>
        <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_6}</h2>
        <p className="fs-14 lh-36">{currentBlog?.description_7}</p>
        <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_7}</h2>
        <p className="fs-14 lh-36">{currentBlog?.description_8}</p>
        <h2 className="fs-22 my-4 lh-30">{currentBlog?.subTitle_8}</h2>
        <p className="fs-14 lh-36">{ReactHtmlParser(currentBlog?.description_9)}</p>
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
