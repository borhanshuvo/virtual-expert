import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import AdminWhyChooseVirtualExpertsCard from "../whyChooseVirtualExpertsCard/whyChooseVirtualExpertsCard";

const AdminWhyChooseVirtualExperts = () => {
  const [info, setInfo] = useState({});
  const [number, setNumber] = useState(0);
  const [cardsData, setCardsData] = useState([]);

  const titleData = info.title;
  const descriptionData = info.description;

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("http://localhost:8000/headerInfoVirtualExports")
      .then((res) => res.json())
      .then((result) => {
        setInfo(result[0]);
      });

    fetch("http://localhost:8000/virtualService")
      .then((res) => res.json())
      .then((result) => setCardsData(result));
  }, [number]);

  const handleUpdateInfo = (data) => {
    const title = data.title || titleData;
    const description = data.description || descriptionData;
    fetch(
      "http://localhost:8000/headerInfoVirtualExports/update",
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, _id: info._id, description }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated Successful");
        setNumber(number + 1);
      });
  };

  return (
    <>
      <div className="p-3 boxShadow me-3 my-3">
        <div className="d-flex justify-content-between">
          <h6 className="fs-24">Edit Why Choose Virtual Experts</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#whyVirtualId"
          />
        </div>
        <h6 className="mt-3 fs-18">Title</h6>
        <p className="fs-14">{info.title}</p>
        <h6 className="fs-18 mt-3">Subtitle</h6>
        <p className="fs-14">{info.description}</p>
        <div className="my-2 row">
          {cardsData.map((cardData, index) => (
            <AdminWhyChooseVirtualExpertsCard
              key={cardData._id}
              cardData={cardData}
              index={index}
              setNumber={setNumber}
            />
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="whyVirtualId"
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
                  defaultValue={info.title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={info.description}
                  {...register("description")}
                  name="description"
                  id="description"
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

export default AdminWhyChooseVirtualExperts;
