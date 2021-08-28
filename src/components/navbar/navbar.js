import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../images/Logo.svg";
import mobileLogo from "../../../public/v-logo-black.svg";
import { navData } from "../fakeData/navData";
import styles from "./navBar.module.css";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <nav
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
      <div className={`${styles.marginBottomNavbar}`}>
        <div className={`fixed-top bg-white`}>
          <div className="d-flex justify-content-between align-items-center container py-3">
            <div className="d-none d-md-block">
              <Link href="/" scroll>
                <a>
                  <Image src={logo} alt="logo" height="50" width="278" />
                </a>
              </Link>
            </div>
            <div className="d-block d-md-none">
              <Image src={logo} alt="logo" height="31" width="170" />
            </div>
            <div className="d-none d-md-block">
              <ul className="d-flex align-items-center">
                {navData.map((nav) => (
                  <li key={nav.id} className="mx-3 position-relative">
                    <Link href={nav.link}>
                      <a
                        className={`${
                          currentPath === nav.link ? `${styles.active}` : ""
                        } ${styles.navItem}`}
                      >
                        {nav.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="d-block d-md-none cursor-pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className={styles.menu1}></span>
              <span className={styles.menu2}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <div
          className={`offcanvas offcanvas-end bg-dark ${styles.zIndex}`}
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div className="ms-auto text-white">
              <AiOutlineClose
                size={24}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
          </div>
          <div className="mx-auto">
            <Image src={mobileLogo} height={100} width={150} alt="loading..." />
          </div>
          <div className="offcanvas-body">
            <div className="text-center">
              {navData.map((nav) => (
                <div
                  key={nav.id}
                  className={`${styles.navItemMobileHover} my-2 py-2`}
                >
                  <Link href={nav.link}>
                    <span
                      className={`cursor-pointer`}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <a className={styles.navItemMobile}>{nav.title}</a>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
