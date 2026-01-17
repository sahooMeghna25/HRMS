import React, { useEffect, useState } from "react";
import API from "../api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {employees.map((e) => (
          <li key={e._id}>
            {e.name} — {e.email} — {e.designation || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
