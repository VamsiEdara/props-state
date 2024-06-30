import React from "react";
import { useState } from "react";
import "./styles.css";

export default function PropsDestructure(props) {
  return (
    <>
    {/* Refer to article : https://medium.com/@simplecrypto22/how-to-fix-the-objects-are-not-valid-as-a-react-child-error-in-react-f5555908189d */}
      <h2>Name: {props.name}</h2>
      <b>Id:{props.id}</b>
      <p>Price:{props.price}</p>
    </>
  );
}
