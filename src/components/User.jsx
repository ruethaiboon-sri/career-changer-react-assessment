import React from "react";
import "./User.css";

export default function User(props) {
  const { item } = props;
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
        <tr>
          <td>....</td>
          <td>....</td>
          <td>....</td>
        </tr>
        <tr>
          <td>....</td>
          <td>....</td>
          <td>....</td>
        </tr>
        <tr>
          <td>....</td>
          <td>....</td>
          <td>....</td>
        </tr>
      </table>
    </>
  );
}
