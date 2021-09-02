import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSkype } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import styles from "./sideLink.module.css";

const SideLink = () => {
  const [footerLink, setFooterLink] = useState({});

  useEffect(() => {
    fetch("https://sleepy-mesa-08037.herokuapp.com/footer")
      .then((res) => res.json())
      .then((data) => setFooterLink(data[0]));
  }, []);

  return (
    <>
      <div className={`position-fixed left-0 top-30 ${styles.zIndex}`}>
        <Link href={`${footerLink.skype}`}>
          <a
            target="_blank"
            title={footerLink.skypeTitle}
            className="position-relative d-flex align-items-center test"
          >
            <FaSkype
              className={`d-block cursor-pointer px-2 order-color fixedIcon ${styles.sidelinkColor}`}
              size={40}
            />
            <span
              className={`social-address fs-12 ms-1 text-secondary bg-light p-1`}
            >
              skype:{footerLink.skypeTitle}
            </span>
          </a>
        </Link>
        <Link href={`${footerLink.whatsApp}`}>
          <a
            target="_blank"
            title={footerLink.whatsAppTitle}
            className="position-relative d-flex align-items-center test"
          >
            <IoLogoWhatsapp
              className={`d-block cursor-pointer px-2 order-color fixedIcon ${styles.sidelinkColor}`}
              size={40}
            />
            <span className="social-address fs-12 ms-1 text-secondary bg-light p-1">
              WhatsApp:{footerLink.whatsAppTitle}
            </span>
          </a>
        </Link>
        <Link href={`mailto:${footerLink.email}`}>
          <a
            target="_blank"
            title={footerLink.email}
            className="position-relative d-flex align-items-center test" 
          >
            <MdEmail
              className={`d-block cursor-pointer px-2 order-color fixedIcon ${styles.sidelinkColor}`}
              size={40}
            />
            <span className="social-address fs-12 ms-1 text-secondary bg-light p-1">
              {footerLink.email}
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default SideLink;
