import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";
import AdminServiceCard from "../../src/components/dashboard/service/adminServiceCard/adminServiceCard";

const Service = () => {
  const [serviceBanner, setServiceBanner] = useState({});
  const [servicesCardData, setServicesCardData] = useState([]);
  const [number, setNumber] = useState(0);
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:8000/whatWeDo")
      .then((res) => res.json())
      .then((data) => setServiceBanner(data));

    fetch("http://localhost:8000/servicesCard")
      .then((res) => res.json())
      .then((data) => setServicesCardData(data));
  }, [number]);

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

    fetch(`http://localhost:8000/servicesCard/post`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Service Add Successfully");
          e.target.reset();
          setNumber(number + 1);
        }
      });
  };

  return (
    <section className="overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 container pt-5 vh-100 scroll">
          <div className="p-3 boxShadow me-4 mb-5">
            <div className="d-flex justify-content-between">
              <h6 className="fs-24">Service Banner</h6>
              <AiFillEdit size={24} className="text-warning cursor-pointer" />
            </div>
            <h6 className="mt-3 fs-18">Title</h6>
            <p classNames="fs-14">{serviceBanner.title}</p>
            <h6 className="fs-18 mt-3">Description</h6>
            <p classNames="fs-14">{serviceBanner.description}</p>
            <h6 className="fs-18 mt-3">SubDescription</h6>
            <p classNames="fs-14">{serviceBanner.subDescription}</p>
          </div>

          <div className="p-3 boxShadow me-4 mb-5">
            <div className="d-flex justify-content-between">
              <h6 className="fs-24">Service Card</h6>
              <GoPlus
                size={24}
                className="text-dark cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#addServiceModal"
              />
            </div>
            <div className="row">
              {servicesCardData.map((servicesCard, index) => {
                let imgType;
                if (servicesCard.img.contentType === "image/svg+xml") {
                  imgType = "data:image/svg+xml";
                } else if (servicesCard.img.contentType === "image/png") {
                  imgType = "data:image/png";
                } else {
                  imgType = "data:image/jpg";
                }
                return (
                  <AdminServiceCard
                    servicesCard={servicesCard}
                    imgType={imgType}
                    index={index}
                    servicesCardData={servicesCardData}
                    setServicesCardData={setServicesCardData}
                    setNumber={setNumber}
                  />
                );
              })}
            </div>
          </div>
        </div>
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
    </section>
  );
};

export default Service;

Service.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
