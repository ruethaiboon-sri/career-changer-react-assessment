import React, { useState } from "react";
import "./Header.css";
import Admin from "./Admin";
import User from "./User";
export default function Header() {
  const [sector, setSector] = useState("");
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
    console.log("deleted");
  };
  {
    // employees.map((item) => (
    //   <Admin key={item.id} item={item} deleteItem={deleteItem} />
    // ));
    employees.map((item) => <User key={item.id} item={item} />);
  }
  return (
    <>
      <div className="container">
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
        {/* <Home sector={sector} /> */}
      </div>
      <div className="btn">
        <button onClick={() => setSector("user")}>User Home Sector</button>
        <button onClick={() => setSector("admin")}>Admin Home Sector</button>
      </div>
    </>
  );
}
