import React from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const ServiceCardHeader = ({ serviceCardHeader, setNumber }) => {
  const { title } = serviceCardHeader;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const _id = serviceCardHeader._id;
    const title = data.title || serviceBanner.title;

    fetch("http://localhost:8000/serviceCardHeader/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id, title }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Service Card Header Data Edit Successfully");
          setNumber((prvState) => prvState + 1);
        }
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">Service Card Header</h6>
        <AiFillEdit
          size={24}
          className="text-warning cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#serviceCardHeader"
        />
      </div>
      <h6 className="mt-3 fs-18">Title</h6>
      <p className="fs-14">{title}</p>

      {/* For Edit service card header data Start */}
      <div
        className="modal fade"
        id="serviceCardHeader"
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
                  <label htmlFor="title">Card Header Title</label>
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
      {/* For Edit service card header data Finish */}
    </>
  );
};

export default ServiceCardHeader;
