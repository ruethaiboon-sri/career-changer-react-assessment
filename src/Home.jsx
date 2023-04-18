import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import User from "./components/User";
import "./Home.css";

const Home = () => {
  const [sector, setSector] = useState("default");
  const [employees, setEmployees] = useState([
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer",
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer",
    },
  ]);

  const deleteItem = (id) => {
    setEmployees(employees.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {sector === "user" && (
          <h1>
            Generation Thailand
            <br />
            Home - User Sector
          </h1>
        )}
        {sector === "admin" && (
          <h1>
            Generation Thailand
            <br />
            Home - Admin Sector
          </h1>
        )}
        {sector === "default" && (
          <h1>
            Generation Thailand
            <br /> React - Assessment
          </h1>
        )}
        <div className="btn">
          <button onClick={() => setSector("user")}>User Home Sector</button>
          <button onClick={() => setSector("admin")}>Admin Home Sector</button>
        </div>
      </div>
      {sector === "admin" && (
        <Admin
          employees={employees}
          setEmployees={setEmployees}
          deleteItem={deleteItem}
        />
      )}
      {sector === "user" && <User employees={employees} />}
    </>
  );
};

export default Home;
