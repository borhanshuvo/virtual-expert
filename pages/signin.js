import { yupResolver } from "@hookform/resolvers/yup";
import jwt_encode from "jwt-encode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import cardHeaderBg from "../images/Others/Group 157.svg";
import cardHeaderImg from "../images/Others/img.svg";

const Signin = () => {
  //   const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //   const [signedUser, setSignedUser] = useContext(UserContext);

  const onSubmit = (data) => {
    // setShowSpinner(true);
    const email = data.email;
    const password = data.password;

    fetch("http://localhost:8000/adminLogin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success(result);
          // e.target.reset();
          // setNumber((prvState) => prvState + 1);
        }
      });
  };

  return (
    <>
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
      <div className="d-flex align-items-center justify-content-center background-color-skyblue py-5 vh-100">
        <div className="card py-5 my-5 px-5 borderRadius">
          <div className="position-relative">
            <div className="cardHeaderBg">
              <Image src={cardHeaderBg} />
            </div>
            <div className="cardHeaderImg">
              <Image src={cardHeaderImg} />
            </div>
          </div>

          <div className="card-body mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-3">
                <input
                  autoComplete="off"
                  className="card-input input-background py-2 px-2"
                  type="email"
                  placeholder="Username"
                  defaultValue=""
                  {...register("email")}
                />
                <span role="alert" className="text-danger">
                  {errors.email?.message}
                </span>
              </div>

              <div className="my-3">
                <input
                  autoComplete="off"
                  className="card-input input-background py-2 px-2"
                  type="password"
                  defaultValue=""
                  placeholder="Password"
                  {...register("password")}
                />
                <span role="alert" className="text-danger">
                  {errors.password?.message}
                </span>
              </div>

              <button className="card-button mt-3" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

Signin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
