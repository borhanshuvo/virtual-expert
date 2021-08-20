import { AiFillEdit } from "react-icons/ai";

const AdminHowToPlaceAnOrder = () => {
  return (
    <div className="p-3 boxShadow me-3 my-2">
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">How to place an order</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <p>How to place an order</p>
      <div className="d-flex justify-content-between">
        <h6 className="mt-3 fs-18">Answers</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <p className="fs-14">Text goes here</p>
    </div>
  );
};

export default AdminHowToPlaceAnOrder;
