import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const About = () => {
  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-9">Hello this is About section</div>
      </div>
    </section>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
