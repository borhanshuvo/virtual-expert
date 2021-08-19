import { AiFillEdit } from "react-icons/ai";

const AdminWhyChooseVirtualExpertsCard = () => {
  return (
    <div className="col-6">
      <div className="m-3 boxShadow p-3">
        <div className="d-flex justify-content-between">
          <h6>Card Name</h6>
          <AiFillEdit size={24} className="text-warning" />
        </div>
        <h6>Title</h6>
        <p>Title goes here</p>
        <h6>Subtitle</h6>
        <p>Subtitle goes here</p>
      </div>
    </div>
  );
};

export default AdminWhyChooseVirtualExpertsCard;
