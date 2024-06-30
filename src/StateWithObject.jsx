import React from "react";
import { useState } from "react";
import "./styles.css";
export default function StateWithObject() {
  const [product, updateProduct] = useState({
    pname: "puma",
    price: 2000,
  });
  return (
    <>
      <h1>{product.pname}</h1>
      <p>{product.price}</p>
    </>
  );
}
