import React from "react";
import { useState } from "react";
import "./styles.css";
export default function Background() {
  //   const [color, setColor] = useState("White");
  return (
    <>
      <h1>Background Changer</h1>
      <input
        type="color"
        onChange={(e) => {
          document.body.style.background = e.target.value;
        }}
      />
    </>
  );
}
