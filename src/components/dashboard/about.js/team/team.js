import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";
import Spinner from "../../../spinner";
import TeamCard from "./teamCard";

const AdminTeam = () => {
  const [teams, setTeams] = useState([]);
  const [number, setNumber] = useState(0);
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    fetch("https://sleepy-mesa-08037.herokuapp.com/teams")
      .then((res) => res.json())
      .then((data) => {
        setShowSpinner(false);
        setTeams(data);
      });
  }, [number]);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleUpdateInfo = (data) => {
    const name = data.name;
    const jobTitle = data.jobTitle;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("jobTitle", jobTitle);

    fetch("https://sleepy-mesa-08037.herokuapp.com/teams/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Team Member added Successful");
        setNumber((prvState) => prvState + 1);
      });
  };

  return (
    <>
      <div className="p-3 boxShadow me-3 my-2">
        <div className="d-flex justify-content-between">
          <h6 className="fs-24">Edit/Add Team</h6>
          <AiOutlinePlus
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#addTestimonial"
          />
        </div>
        {showSpinner ? (
          <Spinner />
        ) : (
          <div className="row">
            {teams.map((team, index) => (
              <TeamCard
                team={team}
                key={team._id}
                index={index}
                setNumber={setNumber}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal part start here */}
      <div
        className="modal fade"
        id="addTestimonial"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Team Members
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
                <label htmlFor="name">Name</label>
                <textarea
                  rows="2"
                  cols="2"
                  {...register("name")}
                  name="name"
                  id="name"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="jobTitle">Job Title</label>
                <textarea
                  rows="2"
                  cols="2"
                  {...register("jobTitle")}
                  name="jobTitle"
                  id="jobTitle"
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

export default AdminTeam;
