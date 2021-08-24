import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineSkype, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { ImTwitter } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../../../images/Shape.svg";
import styles from "./letsTalk.module.css";

const LetsTalk = () => {
  const [footerLink, setFooterLink] = useState({});

  useEffect(() => {
    fetch("https://virtual-expert.herokuapp.com/footerLink")
      .then((res) => res.json())
      .then((data) => setFooterLink(data[0]));
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esd6cuw",
        "template_peizayb",
        e.target,
        "user_IPQt7Bei466UeZ7tBO084"
      )
      .then(
        (result) => {
          toast.success("Email Send Successfully");
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
  }

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
      <section className="mb-5 pb-5 overflow-hidden">
        <div className="background-color-skyblue">
          <div className="container d-md-flex justify-content-between align-items-center py-5">
            <h2 className="fs-30 roboto-font-family lh-45 fw-400">
              Let&#x27;s Talk
            </h2>
            <p className="fs-14">
              Home <span className="text-warning mx-2">{`>`}</span> Let&#x27;s
              Talk
            </p>
          </div>
        </div>
        {/* //form part */}
        <div className="container pt-5 mt-5">
          <div className="row">
            <div className="col-md-6">
              <div>
                <Image src={Logo} alt="logo" />
              </div>
              <h6
                className={`${styles.title} fs-24 mt-2 roboto-font-family lh-44 fw-400`}
              >
                Amazon Growth & Results.
              </h6>
              <p className="text-muted my-4 fs-15 lh-24">
                Do you have any questions related to Amazon FBA/Kindle & Digital
                Marketing? Feel free to contact us. For better response use
                Skype/WhatsApp.
              </p>
              <div className="text-muted mb-5 ">
                <p className="fs-15 d-flex align-items-center lh-40 m-0">
                  {" "}
                  <GoLocation className={`${styles.logo}`} />
                  <span>
                    <span className="fw-500">Address</span> : 226 West 26th
                    Street, New York, NY 10001, USA
                  </span>
                </p>
                <p className="fs-15 d-flex align-items-center lh-40 m-0">
                  {" "}
                  <HiOutlineMail className={`${styles.logo}`} />
                  <span className="fw-500">Email</span>: help@virtualexperts.net
                </p>
                <p className="fs-15 d-flex align-items-center lh-40 m-0">
                  {" "}
                  <AiOutlineSkype className={`${styles.logo} fs-15`} />
                  <span className="fw-500">Skype</span>: VirtualExpertsLTD
                </p>
                <p className="fs-15 d-flex align-items-center lh-40 m-0">
                  {" "}
                  <AiOutlineWhatsApp className={`${styles.logo} fs-15`} />
                  <span className="fw-500">Whatsapp</span>: +13473528622
                </p>
              </div>
              <div>
                <h6
                  className={`${styles.title} fs-18 roboto-font-family lh-24`}
                >
                  Connect with us
                </h6>
                <div className="d-flex mt-2 mt-2">
                  {footerLink?.facebook && (
                    <Link href={footerLink.facebook}>
                      <a target="_blank">
                        <FaFacebook className={`${styles.logo} me-3`} />
                      </a>
                    </Link>
                  )}
                  {footerLink?.instagram && (
                    <Link href={footerLink.instagram}>
                      <a target="_blank">
                        <FaInstagram className={`${styles.logo} me-3`} />
                      </a>
                    </Link>
                  )}

                  {footerLink?.telegram && (
                    <Link href={footerLink.telegram}>
                      <a target="_blank">
                        <FaTelegram className={`${styles.logo} me-3`} />
                      </a>
                    </Link>
                  )}

                  {footerLink?.twitter && (
                    <Link href={footerLink.twitter}>
                      <a target="_blank">
                        <ImTwitter className={`${styles.logo} me-3`} />
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* form starts here ======================== form starts here */}

            <div className="col-md-6">
              <form onSubmit={sendEmail}>
                <div className="d-md-flex gap-4 mt-5 mb-md-3 mb-sm-2 justify-content-center">
                  <input
                    placeholder="Name"
                    className={`${styles.input} form-control mb-3 mb-md-0 fs-14`}
                  />
                  <input
                    placeholder="Email"
                    className={`${styles.input} form-control fs-14`}
                  />
                </div>
                <div className="d-md-flex gap-4 mt-4 mb-3 justify-content-center fs-14">
                  <input
                    placeholder="Phone"
                    className={`${styles.input} form-control mb-4 mb-md-0 fs-14`}
                  />
                  <input
                    placeholder="Subject"
                    className={`${styles.input} form-control fs-14`}
                  />
                </div>
                <div className="mt-4 mb-4">
                  <textarea
                    className={`${styles.input} form-control w-100 fs-14`}
                    id="w3review"
                    name="w3review"
                    rows="6"
                    cols="50"
                    placeholder="Massage"
                  ></textarea>
                </div>

                <input
                  className={`${styles.button}`}
                  type="submit"
                  value="send"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsTalk;
