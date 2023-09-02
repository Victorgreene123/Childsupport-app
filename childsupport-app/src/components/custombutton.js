// import { Link } from "react-router-dom";
import "../App";
import "../index.css";
import React from "react";

export default function Custombutton(props) {
  const [text, settext] = React.useState(props.default);
  function handleClick(event) {
    settext(text === props.default ? props.other : text);
  }
  return (
    <>
      <button
        className="custombutton togglepeer"
        onClick={() => handleClick}
        type="button"
      >
        {text}
      </button>
    </>
  );
}
