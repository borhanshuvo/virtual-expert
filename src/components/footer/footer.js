import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaSkype, FaTelegram, FaYoutube } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Logo from "../../../images/Logo.svg";
import BTC from "../../../images/Others/Bitcoin.svg";
import Payoneer from "../../../images/Others/Payoneer.svg";
import PayPal from "../../../images/Others/PayPal.svg";
import skrill from "../../../images/Others/Skrill.svg";
import styles from "./footer.module.css";

const Footer = () => {
  const router = useRouter();
  const [footer, setFooter] = useState(null);
  const [footerLink, setFooterLink] = useState({});
  useEffect(() => {
    fetch("https://sleepy-mesa-08037.herokuapp.com/footer")
      .then((res) => res.json())
      .then((data) => setFooter(data[0]));

    fetch("https://sleepy-mesa-08037.herokuapp.com/footerLink")
      .then((res) => res.json())
      .then((data) => setFooterLink(data[0]));
  }, []);

  return (
    <footer
      className={
        router.pathname === "/dashboard" ||
        router.pathname === "/dashboard/service" ||
        router.pathname === "/dashboard/about" ||
        router.pathname === "/dashboard/orders" ||
        router.pathname === "/dashboard/invoice" ||
        router.pathname === "/dashboard/meta"
          ? "d-none"
          : ""
      }
    >
      <section className={`${styles.main}`}>
        <div className={`container py-3`}>
          <div className={`${styles.bottom} row p-2 p-md-5`}>
            <div className="col-md-4">
              <Image src={Logo} alt="logo" />
              <p className="fs-14 mt-2 lh-26 text-muted text-center text-md-start">
                {footer?.description}
              </p>
            </div>
            <div className="col-md-4 px-5">
              <div className="text-center text-md-start">
                <h6
                  className={`${styles.title} fs-16 mt-5 mt-md-0 lh-30 fw-500`}
                >
                  Get in Touch
                </h6>
              </div>
              <Link href={`mailto:${footerLink.email}`}>
                <a target="_blank">
                  <p className={`mt-3 text-muted fs-14 lh-30`}>
                    <MdEmail className={`${styles.logo}`} />
                    <span className={`${styles.hilight}`}>
                      <span className="fw-500">Email</span> : {footer?.email}
                    </span>
                  </p>
                </a>
              </Link>
              <Link href={`${footerLink.skype}`}>
                <a target="_blank">
                  <p className=" text-muted fs-14 lh-30">
                    <FaSkype className={`${styles.logo}`} />
                    <span className={`${styles.hilight}`}>
                      <span className="fw-500">Skype</span> : {footer?.skype}
                    </span>
                  </p>
                </a>
              </Link>
              <Link href={`${footerLink.whatsApp}`}>
                <a target="_blank">
                  <p className=" text-muted fs-14 lh-30">
                    <IoLogoWhatsapp className={`${styles.logo}`} />
                    <span className={`${styles.hilight}`}>
                      <span className="fw-500">WhatsApp</span> :{" "}
                      {footer?.whatsApp}
                    </span>
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-md-4 text-center text-md-start mt-4 mt-md-0">
              <h6 className={`${styles.title} fs-16 mt-5 mt-md-0 lh-30 fw-500`}>
                Let’s Get Social
              </h6>
              <div className="d-flex align-items-center my-3 justify-content-center justify-content-md-start">
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
                      <AiFillInstagram className={`${styles.logo} me-3`} />
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
                {footerLink?.youTube && (
                  <Link href={footerLink.youTube}>
                    <a target="_blank">
                      <FaYoutube className={`${styles.logo} me-3`} />
                    </a>
                  </Link>
                )}
              </div>
              <h6 className={`${styles.title} fs-16 mt-5 mt-md-0 lh-30 fw-500`}>
                Payment method
              </h6>
              <div className="d-flex align-items-center mt-2 justify-content-center justify-content-md-start">
                <div className="me-2 my-3">
                  <Image src={PayPal} alt="paypal" />
                </div>
                <div className="mx-2">
                  <Image src={Payoneer} alt="Payoneer" />
                </div>
                <div className="mx-2">
                  <Image src={skrill} alt="skrill" />
                </div>
                <div className="mx-2">
                  <Image src={BTC} alt="BTC" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center  text-muted">
          <p className="pt-3 fs-14 text-muted">{footer?.copyRightText}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
