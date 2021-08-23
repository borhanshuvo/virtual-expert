import Image from "next/image";
import SectionTitle from "../../sectionTitle/sectionTitle";

const WhyChooseVirtualExports = ({
  virtualServicesData,
  headerInfoVirtualExportsData,
}) => {
  return (
    <section className="py-5 background-color-skyblue">
      <div className="container">
        <SectionTitle
          title={headerInfoVirtualExportsData[0].title}
          isBgWhite={false}
        />
        <p className="col-12 col-md-8 mx-auto fs-14 text-center">
          {headerInfoVirtualExportsData[0].description}
        </p>
        <div className="row">
          {virtualServicesData.map((virtualService) => (
            <div className="col-12 my-3 col-md-4" key={virtualService._id}>
              <div className="mx-1 bg-white p-3 h-100">
                <Image
                  src={virtualService?.img}
                  alt="service"
                  height="60"
                  width="60"
                />
                <h3 className="fs-16 mt-2 font-family-roboto">
                  {virtualService.title}
                </h3>
                <p className="fs-14">{virtualService.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVirtualExports;
