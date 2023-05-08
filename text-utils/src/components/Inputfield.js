import React from "react";
const style = {
  position: "relative",
  padding: "0.7rem 3rem",
  borderWidth: "1px",
  borderRadius: "7px",
  borderColor: "transparent",
  margin: "0 0.5rem",
};
export default function Inputfield(props) {
  return <input style={style} type="text" value={props.text} />;
}
