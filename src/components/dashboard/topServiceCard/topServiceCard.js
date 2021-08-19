import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const AdminTopServiceCard = ({ serviceCard, setNumber, index }) => {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  //   console.log(serviceCard.img);

  const handleUpdateInfo = (data) => {
    const newTitle = data.title || serviceCard.title;
    const _id = serviceCard._id;
    const description = data.description || serviceCard.description;

    const newData = {
      title: newTitle,
      _id: serviceCard._id,
      description: serviceCard.description,
      img: serviceCard.img,
      uploadImage: false,
    };

    console.log(newData);

    // const existingFile = file || serviceCard.img;
    // let existingFile;
    // if (file !== null) {
    //   existingFile = file;
    // } else {
    //   existingFile = serviceCard.img;
    // }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", newTitle);
    formData.append("_id", _id);
    formData.append("description", description);

    if (file === null) {
      fetch("http://localhost:8000/topServices/update", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          setNumber((prvState) => prvState + 1);
        });
    } else {
      fetch("http://localhost:8000/topServices/update", {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setNumber((prvState) => prvState + 1);
        });
    }
  };
  let imgType;
  if (serviceCard.img.contentType === "image/svg+xml") {
    imgType = "data:image/svg+xml";
  } else if (serviceCard.img.contentType === "image/png") {
    imgType = "data:image/png";
  } else {
    imgType = "data:image/jpg";
  }

  return (
    <>
      <div className="col-12 col-md-6 my-2" key={serviceCard._id}>
        <div className="boxShadow p-3 h-100">
          <AiFillEdit
            size={24}
            className="text-warning d-block ms-auto"
            data-bs-toggle="modal"
            data-bs-target={`#topService${index + 1}`}
          />
          <Image
            src={`${imgType} ; base64, ${serviceCard.img.img}`}
            alt="Loading..."
            height="150"
            width="150"
          />
          <h6 className="fs-18">Title</h6>
          <p>{serviceCard.title}</p>
          <h6 className="fs-18">Subtitle</h6>
          <p>{serviceCard.description}</p>
        </div>
      </div>

      <div
        className="modal fade"
        id={`topService${index + 1}`}
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
                  defaultValue={serviceCard.title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={serviceCard.description}
                  {...register("description")}
                  name="description"
                  id="description"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="file"
                  className="form-control mb-2"
                  name="file"
                  onChange={handleFileChange}
                  id="img"
                />
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

export default AdminTopServiceCard;
