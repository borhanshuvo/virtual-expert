import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import AdminTopServiceCard from "../topServiceCard/topServiceCard";

const AdminTopThreeService = () => {
  const [title, setTitle] = useState({});
  const [number, setNumber] = useState(0);
  const [serviceCards, setServiceCards] = useState([]);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("http://localhost:8000/headerInfoTopServices")
      .then((res) => res.json())
      .then((result) => setTitle(result[0]));

    fetch("http://localhost:8000/topServices")
      .then((res) => res.json())
      .then((result) => setServiceCards(result));
  }, [number]);

  const handleUpdateInfo = (data) => {
    const newTitle = data.title || title.title;
    fetch("http://localhost:8000/headerInfoTopServices/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: newTitle, _id: title._id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNumber(number + 1);
      });
  };

  return (
    <>
      <div className="p-3 boxShadow me-3 my-2">
        <div className="d-flex justify-content-between">
          <h6 className="fs-24">Edit Top 3 Services</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#topThreeServiceId"
          />
        </div>
        <h6 className="mt-3 fs-18">Title</h6>
        <p className="fs-14">{title.title}</p>

        <div className="row">
          {serviceCards.map((serviceCard, index) => (
            <AdminTopServiceCard
              key={serviceCard._id}
              serviceCard={serviceCard}
              setNumber={setNumber}
              index={index}
            />
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="topThreeServiceId"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Banner
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdateInfo)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={title.title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTopThreeService;
