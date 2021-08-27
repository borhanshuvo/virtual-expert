import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { blogData } from "../../src/components/fakeData/blogData";

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
      </div>
    </>
  );
};

export default BlogDetails;
