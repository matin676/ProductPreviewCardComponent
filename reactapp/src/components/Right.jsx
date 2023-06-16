import React from "react";
import Rate from "./Rate";
import Cart from "./Cart";
import Content from "./Content";

export default function Right() {
  return (
    <div className="right">
      <div className="right-content">
        <Content />
        <Rate />
        <Cart />
      </div>
    </div>
  );
}
