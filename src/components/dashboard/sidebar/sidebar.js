import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../../../../pages/_app";
import Logo from "../../../../public/v-logo-black.svg";

const Sidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [signedUser, setSignedUser] = useContext(UserContext);

  const logout = () => {
    setSignedUser({});
    localStorage.clear();
  };

  return (
    <nav className="vh-100 bg-dark px-3 text-white">
      <Image src={Logo} alt="virtual-logo" height="100" width="150" />
      <div className="pt-1">
        <Link href="/dashboard/">
          <a
            className={`d-block py-2 ${
              pathname === "/dashboard" ? "bg-orange" : ""
            } px-3 rounded-3 text-white my-2 navHover`}
          >
            Home
          </a>
        </Link>
        <Link href="/dashboard/service">
          <a
            className={`d-block py-2 ${
              pathname === "/dashboard/service" ? "bg-orange" : ""
            } px-3 rounded-3 text-white my-2 navHover`}
          >
            Service
          </a>
        </Link>
        <Link href="/dashboard/about">
          <a
            className={`d-block py-2 ${
              pathname === "/dashboard/about" ? "bg-orange" : ""
            } px-3 rounded-3 text-white my-2 navHover`}
          >
            About
          </a>
        </Link>
        <Link href="/">
          <a
            className={`d-block py-2 px-3 rounded-3 text-white my-2 navHover`}
            onClick={logout}
          >
            Logout
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
