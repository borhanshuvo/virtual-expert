import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const LetsTalk = () => {
  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">Hello this is LetsTalk section</div>
      </div>
    </section>
  );
};

export default LetsTalk;

LetsTalk.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
