import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const About = () => {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">Hello this is About section</div>
    </div>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
