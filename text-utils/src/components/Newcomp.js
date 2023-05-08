import React from "react";
import Subscribebtn from "./Subscribebtn.js";
import Inputfield from "./Inputfield.js";
const style = {
  backgroundColor: "#B6EAFA",
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
};

const headStyle = {
  display: "inline",
  marginTop: "1.5rem",
};

const divStyle = {
  marginTop: "2rem",
};

export default function Newcomp() {
  return (
    <div style={style}>
      <h1 style={headStyle}>SUBSCRIBE</h1>
      <h3 style={headStyle}>
        Sign up with your email address to receive news and updates
      </h3>
      <div style={divStyle}>
        <Inputfield text="First name" />
        <Inputfield text="Last name" />
        <Inputfield text="Email" />
      </div>

      <Subscribebtn />
    </div>
  );
}
