import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", fontSize: "8vh" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
