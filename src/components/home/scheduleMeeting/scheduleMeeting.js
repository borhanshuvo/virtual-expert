import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const ScheduleMeeting = () => {
  const [scheduleTitle, setScheduleTitle] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/scheduleMeeting")
      .then((res) => res.json())
      .then((data) => setScheduleTitle(data));
  }, []);
  return (
    <>
      <div className="container my-5 pb-3 px-md-5">
        <div className="background-color-skyblue py-5 px-2 borderRadius">
          <div className="col-12 col-md-6 mx-auto mb-3 text-center">
            {scheduleTitle.title && (
              <h6 className="fs-24 lh-base">
                {ReactHtmlParser(scheduleTitle.title)}
              </h6>
            )}
            <button className="button px-4 py-1 mt-4">
              <h6 className="d-inline fs-14">Schedule a Meeting</h6>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMeeting;
