import React from "react";

const Header = () => {
  return (
    <>
      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h2 className="fs-30 lh-45 font-family-roboto">Services</h2>
          <p className="fs-15 lh-30">
            Home <span className="text-warning mx-2">{`>`}</span> Services
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
