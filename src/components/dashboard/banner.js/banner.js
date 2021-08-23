import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminBanner = () => {
  const [number, setNumber] = useState(0);
  const [bannerData, setBannerData] = useState({});

  const titleData = bannerData.title;
  const descriptionData = bannerData.description;

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const loadData = async () => {
      const resBanner = await fetch(
        "https://virtual-expert.herokuapp.com/banner"
      );
      const bannerData = await resBanner.json();
      setBannerData(bannerData[0]);
    };
    loadData();
  }, [number]);

  const onSubmit = (data) => {
    const title = data.title || titleData;
    const description = data.description || descriptionData;
    fetch("https://virtual-expert.herokuapp.com/banner/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, _id: bannerData._id, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated Successful");
        setNumber(number + 1);
      });
  };

  return (
    <>
      <div className="p-3 boxShadow me-3 mb-3">
        <div className="d-flex justify-content-between">
          <h6 className="fs-24">Banner</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer "
            data-bs-toggle="modal"
            data-bs-target="#bannerId"
          />
        </div>
        <h6 className="mt-3 fs-18">Title</h6>
        <p className="fs-14">{bannerData.title}</p>
        <h6 className="fs-18 mt-3">Subtitle</h6>
        <p className="fs-14">{bannerData.description}</p>
      </div>

      <div
        className="modal fade"
        id="bannerId"
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={bannerData.title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={bannerData.description}
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

export default AdminBanner;
