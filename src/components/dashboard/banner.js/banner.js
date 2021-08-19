import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";

const AdminBanner = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {}, [number]);

  return (
    <div className="p-3 boxShadow me-3 mb-3">
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">Banner</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <h6 className="mt-3 fs-18">Title</h6>
      <p classNames="fs-14">Text goes here</p>
      <h6 className="fs-18 mt-3">Subtitle</h6>
      <p className="fs-14">Subtitle goes here</p>
    </div>
  );
};

export default AdminBanner;
