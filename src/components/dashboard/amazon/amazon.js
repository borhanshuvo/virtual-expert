import { AiFillEdit } from "react-icons/ai";

const AdminAmazon = () => {
  return (
    <div className="p-3 boxShadow me-3 my-2">
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">Amazon</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <h6 className="mt-3 fs-18">Title</h6>
      <p classNames="fs-14">Text goes here</p>
      <h6 className="fs-18 mt-3">Subtitle</h6>
      <p className="fs-14">Subtitle goes here</p>
    </div>
  );
};

export default AdminAmazon;
