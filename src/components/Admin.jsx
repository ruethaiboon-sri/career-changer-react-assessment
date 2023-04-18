import React, { useState } from "react";
import "./Admin.css";

export default function Admin({ employees, setEmployees, deleteItem }) {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [newEmployee, setNewEmployee] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && lastname !== "" && position !== "") {
      const newEmployee = {
        id: employees.length,
        name: name,
        lastname: lastname,
        position: position,
      };
      setEmployees([...employees, newEmployee]);
      setName("");
      setLastName("");
      setPosition("");
    }
  };

  const handleDelete = (id) => {
    deleteItem(id);
  };

  return (
    <>
      <div className="container"></div>
      <div>
        <label>Create User Here</label>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Save
          </button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.position}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        {newEmployee.name && (
          <tbody>
            <tr>
              <td>{newEmployee.name}</td>
              <td>{newEmployee.lastname}</td>
              <td>{newEmployee.position}</td>
              <td>
                <button onClick={() => setNewEmployee({})}>Delete</button>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
}
