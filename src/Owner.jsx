import React from "react";
import Navbar from "./components/Navbar";
import "./Owner.css";
import myimage from "../src/images/cutedog.avif";
function Owner() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Pan - Group H - 37</h1>
        <img src={myimage} />
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
