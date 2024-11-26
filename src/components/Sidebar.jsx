import React from "react";

const Sidebar = ({ patients }) => (
  <aside className="sidebar">
    <ul>
      {patients.map((patient) => (
        <li
          key={patient.id}
          className={patient.name === "Jessica Taylor" ? "active" : ""}
        >
          {patient.name}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
