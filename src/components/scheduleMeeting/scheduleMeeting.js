import React from "react";

import styles from "./scheduleMeeting.module.css";

const ScheduleMeeting = () => {
  return (
    <>
      <div className="container my-5 pb-3 rounded px-5">
        <div className={`${styles.meetingContainer} py-5`}>
          <div className="col-12 col-md-6 mx-auto mb-3 text-center">
            <h6 className="fs-24">
              Our professional team has helped 5,000+ Amazon <br /> sellers to
              gain potential sales
            </h6>
            <button className="button px-4 py-1">
              <p className="d-inline fs-14">Schedule a Meeting</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMeeting;
