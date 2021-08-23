import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
