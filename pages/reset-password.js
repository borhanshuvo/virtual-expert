import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cardHeaderBg from "../images/Others/Group 157.svg";
import cardHeaderImg from "../images/v-logo.svg";

const ResetPassword = () => {
  const router = useRouter();
  const [showResetPassword, setShowResetPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheckVerificationCode = (data, e) => {
    const verificationCode = data.verificationCode;
    fetch(
      "https://sleepy-mesa-08037.herokuapp.com/adminLogin/checkVerificationCode",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ verificationCode }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === "True") {
          e.target.reset();
          setShowResetPassword(true);
        } else {
          setShowResetPassword(false);
        }
      });
  };

  const handleResetPassword = async (data) => {
    const password = data.password;
    fetch(
      "https://sleepy-mesa-08037.herokuapp.com/adminLogin/update/password",
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result === "Password changed") {
          toast.success("Password Changed Successfully");
          router.push("signin");
        } else {
          toast.error("Something Went Wrong. Please try again");
        }
      });
  };

  return (
    <>
      <Head>
        <title>Virtual Experts | SignIn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="background-color-skyblue d-flex align-items-center justify-content-center vh-100">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="py-5 mx-auto">
          <>
            <div className="position-relative">
              <div className="cardHeaderBg">
                <Image src={cardHeaderBg} alt="header" />
              </div>
              <div className="cardHeaderImg">
                <Image
                  src={cardHeaderImg}
                  className="mt-2 p-2"
                  alt="cardImage"
                />
              </div>
            </div>

            <div className="card-body mx-auto bg-white borderRadius">
              {showResetPassword ? (
                <form
                  onSubmit={handleSubmit(handleResetPassword)}
                  className="mx-md-4 mx-0 my-5"
                >
                  <div className="my-3">
                    <label htmlFor="password" className="fs-14">
                      New Password
                    </label>
                    <input
                      autoComplete="off"
                      className="card-input input-background py-2 px-2 w-100"
                      type="text"
                      placeholder="password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-danger fs-14">Password Required</p>
                  )}
                  <button className="card-button mt-2 d-block" type="submit">
                    Submit
                  </button>
                </form>
              ) : (
                <form
                  onSubmit={handleSubmit(handleCheckVerificationCode)}
                  className="mx-md-4 mx-0 my-5"
                >
                  <div className="my-3">
                    <label htmlFor="password" className="fs-14">
                      Verification Code
                    </label>
                    <input
                      autoComplete="off"
                      className="card-input input-background py-2 px-2 w-100"
                      type="text"
                      placeholder="verification code"
                      defaultValue=""
                      {...register("verificationCode", { required: true })}
                    />
                  </div>

                  {errors.verificationCode && (
                    <p className="fs-14 text-danger">
                      Verification Code Required
                    </p>
                  )}

                  <button className="card-button mt-2 d-block" type="submit">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

ResetPassword.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
