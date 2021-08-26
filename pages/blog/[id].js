import Image from "next/image";
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
    <section className="w-100 container">
      <div className="mt-4 d-none d-md-block">
        {currentBlog && (
          <Image
            src={currentBlog.img}
            alt={currentBlog.title}
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
            src={currentBlog.img}
            alt={currentBlog.title}
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
          <AiOutlineClockCircle className="me-1" /> {currentBlog?.publishedDate}
        </p>
        <p style={{ fontSize: "14px" }}>
          {" "}
          <BiMessageRounded className="me-1" /> {currentBlog?.view}
        </p>
      </div>
      <h1 className="fs-24 my-4 lh-30">{currentBlog?.title}</h1>
      <p className="fs-14 lh-36">{currentBlog?.description}</p>
    </section>
  );
};

export default BlogDetails;
