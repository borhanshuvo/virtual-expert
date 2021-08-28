import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminAmazon = () => {
  const [amazon, setAmazon] = useState({});
  const [number, setNumber] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("http://localhost:8000/amazon")
      .then((res) => res.json())
      .then((data) => setAmazon(data));
  }, [number]);

  const handelFocus = () => {
    setIsFocused(true);
  };

  const onSubmit = (data) => {
    const _id = amazon._id;
    const title = data.title || amazon.title;
    const description_part_1 =
      data.description_part_1 || amazon.description_part_1;

    const description_part_2 =
      data.description_part_2 || amazon.description_part_2;

    let description_part_3;
    if (isFocused) {
      description_part_3 = data.description_part_3;
    } else {
      description_part_3 = amazon.description_part_3;
    }

    fetch("http://localhost:8000/amazon/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id,
        title,
        description_part_1,
        description_part_2,
        description_part_3,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Amazon Data Edit Successfully");
          setNumber(number + 1);
        }
      });
  };

  return (
    <>
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
      <div className="p-3 boxShadow me-3 my-2">
        <div className="d-flex justify-content-between">
          <h6 className="fs-24">Amazon</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#amazon"
          />
        </div>
        <h6 className="mt-3 fs-18">Title</h6>
        <p className="fs-14">{amazon.title}</p>
        <h6 className="fs-18 mt-3">Description Part 1</h6>
        <p className="fs-14">{amazon.description_part_1}</p>
        <h6 className="fs-18 mt-3">Description Part 2</h6>
        <p className="fs-14">{amazon.description_part_2}</p>
        <h6 className="fs-18 mt-3">Description Part 3</h6>
        <p className="fs-14">{amazon.description_part_3}</p>
      </div>
      {/* For Edit service banner data Start */}
      <div
        className="modal fade"
        id="amazon"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT - {amazon.title}
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
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={amazon.title}
                    name="title"
                    id="title"
                    className="form-control"
                    {...register("title")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="description_part_1">Description Part 1</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={amazon.description_part_1}
                    name="description_part_1"
                    id="description_part_1"
                    className="form-control"
                    {...register("description_part_1")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="description_part_2">Description Part 2</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={amazon.description_part_2}
                    name="description_part_2"
                    id="description_part_2"
                    className="form-control"
                    {...register("description_part_2")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="description_part_3">Description Part 3</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={amazon?.description_part_3}
                    name="description_part_3"
                    id="description_part_3"
                    className="form-control"
                    {...register("description_part_3")}
                    onFocus={handelFocus}
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

export default AdminAmazon;
