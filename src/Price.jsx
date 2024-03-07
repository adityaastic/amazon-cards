import React from "react";

export default function Price({ oldPrice, newPrice }) {
  const oldStyles = {
    textDecorationLine: "line-through",
  };
  const newStyles = {
    fontWeight: "bold",
  };

  const styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    width:"200px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };

  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
