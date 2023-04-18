import React, { useState } from "react";
import "./Admin.css";

export default function Admin(props) {
  const { item, deleteItem } = props;
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [position, setPosition] = useState("");
  return (
    <>
      <div className="container">
        <h1></h1>
      </div>
      <div>
        <label>Create User Here</label>
        <form>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Position"
            onChange={(event) => setPosition(event.target.value)}
          />
          <button
            type="submit"
            onClick={() => ({
              name: name,
              lastname: lastname,
              position: position,
            })}
          >
            Save
          </button>
        </form>
      </div>

      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </table>
    </>
  );
}
