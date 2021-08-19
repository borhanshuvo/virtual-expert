import { AiFillEdit } from "react-icons/ai";

const AdminTopThreeService = () => {
  return (
    <div className="p-3 boxShadow me-3 my-2">
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">Top 3 Services</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <h6 className="mt-3 fs-18">Title</h6>
      <p classNames="fs-14">Text goes here</p>
      <div className="row">
        <div className="col-6">
          <div className="boxShadow p-3">
            <AiFillEdit size={24} className="text-warning d-block ms-auto" />
            <div className="d-flex justify-content-between my-2">
              <div>Image goes here</div>
              <AiFillEdit size={24} className="text-warning" />
            </div>
            <h6 className="fs-18">Title</h6>
            <p>Title goes here</p>
            <h6 className="fs-18">Subtitle</h6>
            <p>Subtitle goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopThreeService;
