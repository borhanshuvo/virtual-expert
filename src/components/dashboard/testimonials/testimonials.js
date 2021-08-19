import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";

const AdminTestimonials = () => {
  return (
    <div className="p-3 boxShadow me-3 my-2">
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">Testimonials</h6>
        <AiOutlinePlus size={24} className="text-warning" />
      </div>
      <div className="d-flex justify-content-between">
        <h6 className="fs-18 mt-3">Title</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <p className="fs-14">Text goes here</p>
    </div>
  );
};

export default AdminTestimonials;
