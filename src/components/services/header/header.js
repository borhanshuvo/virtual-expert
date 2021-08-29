import React from "react";
import { useRouter } from "next/router";
import SideLink from "../../sideLink/sideLink";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h2 className="fs-30 lh-45 font-family-roboto">Services</h2>
          <p className="fs-15 lh-30">
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              Home
            </span>{" "}
            <span className="text-warning mx-2">{`>`}</span>{" "}
            <span
              className="cursor-pointer"
              onClick={() => router.push("/services")}
            >
              Services
            </span>
          </p>
        </div>
      </div>
      <SideLink />
    </>
  );
};

export default Header;
