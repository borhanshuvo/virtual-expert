import { yupResolver } from "@hookform/resolvers/yup";
import jwt_encode from "jwt-encode";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import cardHeaderBg from "../images/Others/Group 157.svg";
import cardHeaderImg from "../images/v-logo.svg";
import Spinner from "../src/components/spinner";
import { UserContext } from "./_app";

const Signin = () => {
  const [showSpinner, setShowSpinner] = useState(false);
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

    fetch("https://sleepy-mesa-08037.herokuapp.com/adminLogin/login", {
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

  const handleResetPassword = async () => {
    setShowSpinner(true);
    const randomNumber = Math.ceil(Math.random() * 1000000);

    const emailInfo = {
      verificationCode: randomNumber,
      link: "http://localhost:3000/reset-password",
    };
    const msgTemplate = {
      service_id: "service_esd6cuw",
      template_id: "template_lug6z1e",
      user_id: "user_IPQt7Bei466UeZ7tBO084",
      template_params: {
        ...emailInfo,
      },
    };

    fetch("http://localhost:8000/adminLogin/update/verificationCode", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ verificationCode: randomNumber }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === "Verification Code Added") {
          const sendEmail = async () => {
            const res = await fetch(
              "https://api.emailjs.com/api/v1.0/email/send",
              {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(msgTemplate),
              }
            );
            if (res.status === 200) {
              setShowSpinner(false);
              toast.success("Verification Code Sent Successfully");
            }
          };
          setShowSpinner(false);
          sendEmail();
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
          <div className="my-4">{showSpinner ? <Spinner /> : ""}</div>
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

                <p
                  className="text-end cursor-pointer fs-14 text-dark"
                  onClick={handleResetPassword}
                >
                  Change Password?
                </p>

                <button className="card-button mt-2 d-block" type="submit">
                  Sign In
                </button>
              </form>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Signin;

Signin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
