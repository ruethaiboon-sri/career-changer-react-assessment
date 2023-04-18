import React from "react";
import "./User.css";

export default function User({ employees }) {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
        <tbody>
          {employees.map((item, id) => (
            <tr key={id}>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
