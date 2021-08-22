import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactHtmlParser from "react-html-parser";
import { AiFillEdit } from "react-icons/ai";

const ScheduleMeeting = () => {
  const [number, setNumber] = useState(0);
  const [scheduleTitle, setScheduleTitle] = useState({});
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("https://virtual-expert.herokuapp.com/scheduleMeeting")
      .then((res) => res.json())
      .then((data) => setScheduleTitle(data));
  }, [number]);

  const handleUpdateScheduleMeeting = (data) => {
    const title = data.title || scheduleTitle.title;
    const _id = scheduleTitle._id;

    fetch("https://virtual-expert.herokuapp.com/scheduleMeeting/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNumber(number + 1);
      });
  };

  return (
    <>
      <section className="my-3 boxShadow p-3">
        <div className="d-flex justify-content-between">
          <h6 className="fs-24">Edit Footer Here</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#scheduleMeeting"
          />
        </div>
        <h6 className="fs-8 my-2">Title: </h6>
        <p className="fs-14">{ReactHtmlParser(scheduleTitle.title)}</p>
      </section>

      <div
        className="modal fade"
        id="scheduleMeeting"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit ScheduleMeeting Title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdateScheduleMeeting)}>
                <label htmlFor="description">Title</label>
                <p className="text-danger fs-14">
                  Note: You must have to add span tag for coloring the number.
                  If you want to change the text color you can change the color
                  code of the span tag
                </p>
                <textarea
                  rows="5"
                  cols="2"
                  defaultValue={scheduleTitle.title}
                  {...register("title")}
                  name="title"
                  id="title"
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

export default ScheduleMeeting;
