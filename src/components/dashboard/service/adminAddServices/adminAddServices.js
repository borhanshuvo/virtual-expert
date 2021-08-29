import { useState } from "react";
import { useForm } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import { toast } from "react-toastify";

const AdminAddServices = ({ setNumber }) => {
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = (data, e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("regularReview", data.regularReview);
    formData.append("videoReview", data.videoReview);
    formData.append("top50Reviewers", data.top50Reviewers);
    formData.append("delivery", data.delivery);
    formData.append("warranty", data.warranty);
    formData.append("price", data.price);
    formData.append("maintenance", data.maintenance);
    formData.append("imgTitle", data.imgTitle);
    formData.append("imgAlt", data.imgAlt);

    fetch(`https://sleepy-mesa-08037.herokuapp.com/servicesCard/post`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Service Add Successfully");
          e.target.reset();
          setNumber((prvState) => prvState + 1);
        }
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h6 className="fs-24">Service Card</h6>
        <GoPlus
          size={24}
          className="text-dark cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#addServiceModal"
        />
      </div>
      {/* For Add Card data Start */}
      <div
        className="modal fade"
        id="addServiceModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Service Card
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
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    defaultValue=""
                    name="title"
                    id="title"
                    autoComplete="off"
                    className="form-control"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="title">Sub Title</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("subTitle", { required: true })}
                    name="subTitle"
                    id="subTitle"
                    autoComplete="off"
                    className="form-control"
                  />
                  {errors.subTitle && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="title">Regular Review</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("regularReview")}
                    name="regularReview"
                    id="regularReview"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Video Review</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("videoReview")}
                    name="videoReview"
                    id="videoReview"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Top 50 Reviewers</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("top50Reviewers")}
                    name="top50Reviewers"
                    id="top50Reviewers"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Delivery</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("delivery")}
                    name="delivery"
                    id="delivery"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Warranty</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("warranty")}
                    name="warranty"
                    id="warranty"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Price</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("price")}
                    name="price"
                    id="price"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Maintenance</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("maintenance")}
                    name="maintenance"
                    id="maintenance"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="img">Image</label>
                  <input
                    type="file"
                    name="img"
                    id="img"
                    className="form-control"
                    {...register("img", { required: true })}
                    onChange={handleFileChange}
                  />
                  {errors.img && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="imgTitle">Image Title</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("imgTitle", { required: true })}
                    name="imgTitle"
                    id="imgTitle"
                    autoComplete="off"
                    className="form-control"
                  />
                  {errors.imgTitle && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="imgAlt">Image Alt</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("imgAlt", { required: true })}
                    name="imgAlt"
                    id="imgAlt"
                    autoComplete="off"
                    className="form-control"
                  />
                  {errors.imgAlt && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* For Add Card data Finish */}
    </>
  );
};

export default AdminAddServices;
