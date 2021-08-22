import React from "react";

const Header = () => {
  return (
    <>
      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h6 className="fs-30">Services</h6>
          <p className="fs-14">
            Home <span className="text-warning mx-2">{`>`}</span> Services
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
