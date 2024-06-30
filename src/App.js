import React from "react";
import { useState } from "react";
import "./styles.css";
import StateWithObject from "./StateWithObject";
import Background from "./Background";
import PropsDestructure from "./PropsDestructure";

export default function App() {
  let price = "20000";
  let product = {
    name: "Mickey",
    id: 102,
    price: 200,
  };
  const [name, setName] = useState("Realme");
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>{price}</p>
      <input type="text" id="searchname"></input>
      <br />
      <button
        onClick={() => {
          let sname = document.getElementById("searchname").value;
          // first way:
          setName(sname);
          // second way:
          // setName((sname) => {
          //   console.log(sname);
          //   return sname;
        }}
      >
        Update
      </button>
      <StateWithObject />
      <Background />
      {/* Destructuring Object using spread  */}
      <PropsDestructure {...product} />
      {/* Event Binding refer : https://arunyokesh.medium.com/react-js-ways-of-binding-events-858325b7d93c */}
    </div>
  );
}
