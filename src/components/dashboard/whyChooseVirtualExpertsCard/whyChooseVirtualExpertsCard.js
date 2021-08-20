import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const AdminWhyChooseVirtualExpertsCard = ({
  cardData,
  setNumber,
  number,
  index,
}) => {
  const { register, handleSubmit } = useForm();

  const handleUpdateInfo = (data) => {
    const title = data.title || cardData.title;
    const description = data.description || cardData.description;
    fetch("http://localhost:8000/virtualService/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, _id: cardData._id, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNumber((prevNumber) => prevNumber + 10);
      });
  };

  return (
    <>
      <div className="col-12 col-md-6 my-2">
        <div className="m-2 boxShadow p-3 h-100">
          <div className="d-flex justify-content-between">
            <h6>{cardData.title}</h6>
            <AiFillEdit
              size={24}
              className="text-warning cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target={`#aboutVirtualCard${index + 1}`}
            />
          </div>
          <h6 className="fs-18">Title</h6>
          <p className="fs-14">{cardData.title}</p>
          <h6 className="fs-18">Subtitle</h6>
          <p className="fs-14">{cardData.description}</p>
        </div>
      </div>
      <div
        className="modal fade"
        id={`aboutVirtualCard${index + 1}`}
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
                  defaultValue={cardData.title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={cardData.description}
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

export default AdminWhyChooseVirtualExpertsCard;
