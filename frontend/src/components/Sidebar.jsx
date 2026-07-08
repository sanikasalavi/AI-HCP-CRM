import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#ffffff",
        height: "100vh",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h5>Menu</h5>

      <hr />

      <p>
        <Link to="/">Dashboard</Link>
      </p>

      <p>
        <Link to="/log">Log Interaction</Link>
      </p>

      <p>
        <Link to="/history">Interaction History</Link>
      </p>
    </div>
  );
}

export default Sidebar;