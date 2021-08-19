import Link from "next/link";

const Dashboard = () => {
  return (
    <section>
      <div className="row">
        <div className="col-2">
          <Link href="/dashboard/service">
            <a>service</a>
          </Link>
        </div>
        <div className="col-10">nested page goes here</div>
      </div>
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
