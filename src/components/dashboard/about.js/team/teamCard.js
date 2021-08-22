import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const TeamCard = ({ team, index, setNumber }) => {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChanges = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleUpdateInfos = (data) => {
    const name = data.name || team.name;
    const _id = team._id;
    const jobTitle = data.jobTitle || team.jobTitle;

    const newData = {
      name,
      _id,
      jobTitle,
      img: team.img,
      uploadImage: false,
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("jobTitle", jobTitle);
    formData.append("_id", _id);

    if (file === null) {
      fetch("http://localhost:8000/teams/update", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setNumber((prvState) => prvState + 1);
        });
    } else {
      fetch("http://localhost:8000/teams/update", {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setNumber((prvState) => prvState + 1);
        });
    }
  };

  let imgType;
  if (team.img.contentType === "image/svg+xml") {
    imgType = "data:image/svg+xml";
  } else if (team.img.contentType === "image/png") {
    imgType = "data:image/png";
  } else {
    imgType = "data:image/jpg";
  }

  return (
    <>
      <div className="col-12 col-md-4  mx-auto my-3">
        <div className="p-3 text-center mx-2 boxShadow cursor-pointer h-100">
          <AiFillEdit
            size={24}
            className="text-warning d-block ms-auto mb-2"
            data-bs-toggle="modal"
            data-bs-target={`#testimonial${index + 1}`}
          />
          <Image
            src={`${imgType} ; base64, ${team.img.img}`}
            alt="Loading..."
            height="350"
            width="300"
            layout="responsive"
          />
          <h6 className="fw-bold fs-18 mt-2">{team.name}</h6>
          <p className="fs-14">{team.jobTitle}</p>
        </div>
      </div>

      {/* Modal start here */}
      <div
        className="modal fade"
        id={`testimonial${index + 1}`}
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
              <form onSubmit={handleSubmit(handleUpdateInfos)}>
                <label htmlFor="name">Name</label>
                <textarea
                  rows="1"
                  cols="1"
                  defaultValue={team.name}
                  {...register("name")}
                  name="name"
                  id="name"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="jobTitle">Job Title</label>
                <textarea
                  rows="1"
                  cols="1"
                  defaultValue={team.jobTitle}
                  {...register("jobTitle")}
                  name="jobTitle"
                  id="jobTitle"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="file"
                  className="form-control mb-2"
                  name="file"
                  onChange={handleFileChanges}
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

export default TeamCard;
