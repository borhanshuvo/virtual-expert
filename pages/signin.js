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
import { UserContext } from "./_app";

const Signin = () => {
  //   const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
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

  const [signedUser, setSignedUser] = useContext(UserContext);

  const onSubmit = (data) => {
    // setShowSpinner(true);
    const username = data.username;
    const password = data.password;

    fetch("https://virtual-expert.herokuapp.com/adminLogin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error);
        } else {
          const user = result;
          setSignedUser(user);
          const token = jwt_encode(user, "secret");
          localStorage.removeItem("info");
          localStorage.setItem("info", JSON.stringify(token));
          router.push("/dashboard");
        }
      });
  };

  return (
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
              <Image src={cardHeaderBg} />
            </div>
            <div className="cardHeaderImg">
              <Image src={cardHeaderImg} />
            </div>
          </div>

          <div className="card-body mx-auto bg-white borderRadius">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-md-4 mx-0 my-5"
            >
              <div className="my-3">
                <input
                  autoComplete="off"
                  className="card-input input-background py-2 px-2 w-100"
                  type="text"
                  placeholder="Username"
                  defaultValue=""
                  {...register("username")}
                />
              </div>
              <span role="alert" className="text-danger">
                {errors.username?.message}
              </span>

              <div className="my-3">
                <input
                  autoComplete="off"
                  className="card-input input-background py-2 px-2 w-100"
                  type="password"
                  defaultValue=""
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
              <span role="alert" className="text-danger">
                {errors.password?.message}
              </span>

              <button className="card-button mt-2 d-block" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default Signin;

Signin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};