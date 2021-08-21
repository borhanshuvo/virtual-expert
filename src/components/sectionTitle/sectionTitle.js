import Image from "next/image";
import angle from "../../../images/Rectangle 266.svg";
import ring from "../../../images/service/Ellipse 261.svg";

const SectionTitle = () => {
  return (
    <div className="position-relative col-11 col-md-5 mx-auto">
      <div className="border border-warning my-5 ring-title background-color-skyblue">
        <h6 className="text-center fs-28 lh-base p-3 textCenterAfterEffect lh-36">
          Hello I am hello World Text
        </h6>
      </div>

      <div className="ring d-none d-md-block">
        <Image src={ring} alt="angle" />
      </div>

      <div className="angle d-none d-md-block">
        <Image src={angle} alt="angle" />
      </div>

      <div className="ring-mobile-size d-md-none d-block">
        <Image src={ring} height={50} width={50} alt="ring" />
      </div>

      <div className="angle-mobile-size d-md-none d-block">
        <Image src={angle} height={50} width={50} alt="ring" />
      </div>
    </div>
  );
};

export default SectionTitle;
