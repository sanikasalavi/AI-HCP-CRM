import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="p-4">
          <h2>Dashboard</h2>

          <p>
            Welcome to AI First CRM for Healthcare Professionals.
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;