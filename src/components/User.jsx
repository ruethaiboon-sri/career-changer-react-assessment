import React from "react";
import "/src/components/User.css";

export default function User({ employees }) {
  return (
    <>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
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
      </div>
    </>
  );
}
