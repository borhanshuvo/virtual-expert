import Link from "next/link";

const Sidebar = () => {
  return (
    <nav>
      <Link href="/dashboard/">
        <a className="d-block">Home</a>
      </Link>
      <Link href="/dashboard/service">
        <a className="d-block">Service</a>
      </Link>
      <Link href="/dashboard/about">
        <a className="d-block">About</a>
      </Link>
      <Link href="/dashboard/lets-talk">
        <a className="d-block">Let&apos;s talk</a>
      </Link>
    </nav>
  );
};

export default Sidebar;
