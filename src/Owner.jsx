import React from "react";
import Navbar from "./components/Navbar";
import "./Owner.css";

function Owner() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Pan - Group H - 37</h1>
        <img src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <h4>Short Biography: </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque adipiscing commodo elit at imperdiet dui accumsan.
          Ultricies mi eget mauris pharetra. Elit ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus at augue. Et pharetra pharetra
          massa massa.
        </p>
      </div>
    </>
  );
}

export default Owner;
