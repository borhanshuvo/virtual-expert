import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="vh-100 bg-dark px-3 text-white">
      <div className="pt-4">
        <Link href="/dashboard/">
          <a
            className={`d-block py-2 ${
              pathname === "/dashboard" ? "bg-primary" : ""
            } px-3 rounded-3 text-white my-2`}
          >
            Home
          </a>
        </Link>
        <Link href="/dashboard/service">
          <a
            className={`d-block py-2 ${
              pathname === "/dashboard/service" ? "bg-primary" : ""
            } px-3 rounded-3 text-white my-2`}
          >
            Service
          </a>
        </Link>
        <Link href="/dashboard/about">
          <a
            className={`d-block py-2 ${
              pathname === "/dashboard/about" ? "bg-primary" : ""
            } px-3 rounded-3 text-white my-2`}
          >
            About
          </a>
        </Link>
        <Link href="/dashboard/lets-talk">
          <a
            className={`d-block py-2 ${
              pathname === "/dashboard/lets-talk" ? "bg-primary" : ""
            } px-3 rounded-3 text-white my-2`}
          >
            Let&apos;s talk
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
