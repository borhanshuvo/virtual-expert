import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminServiceCard = ({
  imgType,
  servicesCard,
  index,
  setServicesCardData,
  servicesCardData,
  setNumber,
}) => {
  const {
    title,
    subTitle,
    regularReview,
    videoReview,
    top50Reviewers,
    delivery,
    warranty,
    price,
    maintenance,
  } = servicesCard;
  const [file, setFile] = useState(null);
  const { register, handleSubmit } = useForm();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const deleteService = (id) => {
    fetch(`https://virtual-expert.herokuapp.com/servicesCard/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.error("Service Delete Successfully");
          const newServicesCard = servicesCardData.filter(
            (servicesCard) => servicesCard._id !== id
          );
          setServicesCardData(newServicesCard);
          setNumber((prevState) => prevState + 1);
        }
      });
  };

  const onSubmitEdit = (data) => {
    const newTitle = data.title || servicesCard.title;
    const newSubTitle = data.subTitle || servicesCard.subTitle;
    const newRegularReview = data.regularReview || servicesCard.regularReview;
    const newVideoReview = data.videoReview || servicesCard.videoReview;
    const newTop50Reviewers =
      data.top50Reviewers || servicesCard.top50Reviewers;
    const newDelivery = data.delivery || servicesCard.delivery;
    const newWarranty = data.warranty || servicesCard.warranty;
    const newPrice = data.price || servicesCard.price;
    const newMaintenance = data.maintenance || servicesCard.maintenance;
    const _id = servicesCard._id;

    const newData = {
      _id: _id,
      title: newTitle,
      subTitle: newSubTitle,
      regularReview: newRegularReview,
      videoReview: newVideoReview,
      top50Reviewers: newTop50Reviewers,
      delivery: newDelivery,
      warranty: newWarranty,
      price: newPrice,
      maintenance: newMaintenance,
      img: servicesCard.img,
      uploadImage: false,
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("_id", _id);
    formData.append("title", newTitle);
    formData.append("subTitle", newSubTitle);
    formData.append("regularReview", newRegularReview);
    formData.append("videoReview", newVideoReview);
    formData.append("top50Reviewers", newTop50Reviewers);
    formData.append("delivery", newDelivery);
    formData.append("warranty", newWarranty);
    formData.append("price", newPrice);
    formData.append("maintenance", newMaintenance);

    if (file === null) {
      fetch("https://virtual-expert.herokuapp.com/servicesCard/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Service Edit Successfully");
          setNumber((prvState) => prvState + 1);
        });
    } else {
      fetch("https://virtual-expert.herokuapp.com/servicesCard/update", {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Service Edit Successfully");
          setNumber((prvState) => prvState + 1);
        });
    }
  };

  return (
    <div className="col-md-4" key={servicesCard._id}>
      <div className="my-3 mx-1 p-3 border rounded-3">
        <div className="d-flex justify-content-end">
          <AiFillEdit
            size={24}
            className="text-primary mx-2 cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target={`#card${index + 1}`}
          />
          <AiFillDelete
            size={24}
            className="text-danger mx-2 cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target={`#cardDelete${index + 1}`}
          />
        </div>
        <Image
          src={`${imgType} ; base64, ${servicesCard.img.img}`}
          alt="waiting.."
          width={200}
          height={200}
        />
        <div className="boxShadow p-3 borderRadius" style={{ height: "300px" }}>
          <h6 className="fs-18">{servicesCard.title}</h6>
          <h6 className="fs-14 mt-2">{servicesCard.subTitle}</h6>
          {servicesCard.regularReview && (
            <p className="fs-14">
              Regular Review : ${servicesCard.regularReview} each
            </p>
          )}
          {servicesCard.videoReview && (
            <p className="fs-14">
              Video Review : ${servicesCard.videoReview} each
            </p>
          )}
          {servicesCard.top50Reviewers && (
            <p className="fs-14">
              Top 50 Reviewers : ${servicesCard.top50Reviewers} each
            </p>
          )}
          {servicesCard.price && (
            <p className="fs-14">Price : ${servicesCard.price}</p>
          )}
          {servicesCard.delivery && (
            <p className="fs-14">Delivery : {servicesCard.delivery} days</p>
          )}
          {servicesCard.warranty && (
            <p className="fs-14">Warranty : {servicesCard.warranty}</p>
          )}
          {servicesCard.maintenance && (
            <p className="fs-14">
              Maintenence : ${servicesCard.maintenance} per month
            </p>
          )}
        </div>
        {/* For Edit Card data Start */}
        <div
          className="modal fade"
          id={`card${index + 1}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  EDIT - {servicesCard.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmitEdit)}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
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
                    <label htmlFor="subTitle">Sub Title</label>
                    <textarea
                      rows="5"
                      cols="5"
                      defaultValue={subTitle}
                      name="subTitle"
                      id="subTitle"
                      className="form-control"
                      {...register("subTitle")}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="regularReview">Regular Review</label>
                    <input
                      type="text"
                      defaultValue={regularReview}
                      {...register("regularReview")}
                      name="regularReview"
                      id="regularReview"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="videoReview">Video Review</label>
                    <input
                      type="text"
                      defaultValue={videoReview}
                      {...register("videoReview")}
                      name="videoReview"
                      id="videoReview"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="top50Reviewers">Top 50 Reviewers</label>
                    <input
                      type="text"
                      defaultValue={top50Reviewers}
                      {...register("top50Reviewers")}
                      name="top50Reviewers"
                      id="top50Reviewers"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="delivery">Delivery</label>
                    <input
                      type="text"
                      defaultValue={delivery}
                      {...register("delivery")}
                      name="delivery"
                      id="delivery"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="warranty">Warranty</label>
                    <input
                      type="text"
                      defaultValue={warranty}
                      {...register("warranty")}
                      name="warranty"
                      id="warranty"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      defaultValue={price}
                      {...register("price")}
                      name="price"
                      id="price"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="maintenance">Maintenance</label>
                    <input
                      type="text"
                      defaultValue={maintenance}
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
                      {...register("img")}
                      onChange={handleFileChange}
                    />
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
        {/* For Edit Card data Finish */}

        {/* For Delete Card data Start */}
        <div
          className="modal fade"
          id={`cardDelete${index + 1}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  DELETE - {servicesCard.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you want to delete this?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => deleteService(servicesCard._id)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* For Delete Card data Finish */}
      </div>
    </div>
  );
};

export default AdminServiceCard;
