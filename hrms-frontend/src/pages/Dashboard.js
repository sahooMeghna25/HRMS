import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api";
import EmployeeList from "../components/EmployeeList";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    if (user?.role === "Admin") {
      API.get("/leaves/admin")
        .then((res) => setLeaves(res.data))
        .catch(console.error);
    }
  }, [user]);
  return (
    <div style={{ padding: 20 }}>
      <h2>
        Welcome, {user?.name} ({user?.role})
      </h2>
      <button onClick={logout}>Logout</button>

      {user?.role === "Admin" && (
        <>
          <h3>Employees</h3>
          <EmployeeList />

          <h3>Leave Requests</h3>
          <ul>
            {leaves.map((l) => (
              <li key={l._id}>
                {l.employee.name} — {new Date(l.from).toDateString()} to{" "}
                {new Date(l.to).toDateString()} — {l.status}
                {/* Admin can approve/reject using API calls */}
              </li>
            ))}
          </ul>
        </>
      )}

      {user?.role === "Employee" && (
        <>
          <h3>My actions</h3>
          <p>Apply Leave and Mark Attendance forms go here.</p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
