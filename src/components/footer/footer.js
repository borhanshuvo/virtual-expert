import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaSkype, FaTelegram } from "react-icons/fa";
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
  const [footer, setFooter] = useState(null);
  const [footerLink, setFooterLink] = useState({});
  useEffect(() => {
    fetch("https://virtual-expert.herokuapp.com/footer")
      .then((res) => res.json())
      .then((data) => setFooter(data[0]));

    fetch("https://virtual-expert.herokuapp.com/footerLink")
      .then((res) => res.json())
      .then((data) => setFooterLink(data[0]));
  }, []);

  return (
    <section className={`${styles.main}`}>
      <div className={`container py-3`}>
        <div className={`${styles.bottom} row p-2 p-md-5`}>
          <div className="col-md-4">
            <Image src={Logo} alt="logo" />
            <p className="fs-15 mt-2 text-muted text-center text-md-start">
              {footer?.description}
            </p>
          </div>
          <div className="col-md-4 px-5">
            <div className="text-center text-md-start">
              <h6 className={`${styles.title} fs-16 mt-5 mt-md-0 fw-bold`}>
                Get in Touch
              </h6>
            </div>
            <p className="mt-3 text-muted fs-14">
              {" "}
              <MdEmail className={`${styles.logo}`} />
              Email: {footer?.email}
            </p>
            <p className=" text-muted fs-14">
              {" "}
              <FaSkype className={`${styles.logo}`} />
              Skype: {footer?.skype}
            </p>
            <p className=" text-muted fs-14">
              {" "}
              <IoLogoWhatsapp className={`${styles.logo}`} />
              Whatsapp: {footer?.whatsApp}
            </p>
          </div>
          <div className="col-md-4 text-center text-md-start mt-4 mt-md-0">
            <h6 className={styles.title}>Let’s Get Social</h6>
            <div className="d-flex align-items-center my-4 justify-content-center justify-content-md-start">
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
            <h6 className={`${styles.title} mt-4 mt-md-0`}>Payment method</h6>
            <div className="d-flex align-items-center mt-2 justify-content-center justify-content-md-start">
              <div className="me-2 my-3">
                <Image src={PayPal} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={Payoneer} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={skrill} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={BTC} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center  text-muted">
        <p className="pt-3 fs-14 text-muted">{footer?.copyRightText}</p>
      </footer>
    </section>
  );
};

export default Footer;
