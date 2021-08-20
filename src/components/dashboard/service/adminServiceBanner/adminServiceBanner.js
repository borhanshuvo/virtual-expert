import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const AdminServiceBanner = ({ serviceBanner, setNumber }) => {
  const { title, description, subDescription } = serviceBanner;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const _id = serviceBanner._id;
    const title = data.title || serviceBanner.title;
    const description = data.description || serviceBanner.description;
    const subDescription = data.subDescription || serviceBanner.subDescription;

    fetch("http://localhost:8000/whatWeDo/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id, title, description, subDescription }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Service Banner Data Edit Successfully");
          setNumber((prvState) => prvState + 1);
        }
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">Service Banner</h6>
        <AiFillEdit
          size={24}
          className="text-primary cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#serviceBanner"
        />
      </div>
      <h6 className="mt-3 fs-18">Title</h6>
      <p classNames="fs-14">{title}</p>
      <h6 className="fs-18 mt-3">Description</h6>
      <p classNames="fs-14">{description}</p>
      <h6 className="fs-18 mt-3">SubDescription</h6>
      <p classNames="fs-14">{subDescription}</p>

      {/* For Edit service banner data Start */}
      <div
        className="modal fade"
        id="serviceBanner"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT - {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="titles">Title</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={title}
                    name="title"
                    id="title"
                    className="form-control"
                    {...register("title")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={description}
                    name="description"
                    id="description"
                    className="form-control"
                    {...register("description")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="subDescription">Sub Description</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={subDescription}
                    name="subDescription"
                    id="subDescription"
                    className="form-control"
                    {...register("subDescription")}
                  ></textarea>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                    value="Save Changes"
                    data-bs-dismiss="modal"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* For Edit service banner data Finish */}
    </>
  );
};

export default AdminServiceBanner;
