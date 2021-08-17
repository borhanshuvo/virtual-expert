import Image from "next/image";
import logo from "../../../images/Logo.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="d-flex justify-content-between">
        <div>
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
