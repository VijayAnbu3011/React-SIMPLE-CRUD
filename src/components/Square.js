import React, { useState } from "react";
import "./square.css";

const Square = ({ bg, isDark }) => {
  return (
    <div
      className="squareBaody"
      style={{
        backgroundColor: bg,
        color: isDark ? "#000" : "#FFF",
      }}
    >
      <p className="squareContent">{bg ? bg : "Enter the Color To View"}</p>
    </div>
  );
};
Square.defaultProps = {
  bg: "Empty Value",
};
export default Square;
