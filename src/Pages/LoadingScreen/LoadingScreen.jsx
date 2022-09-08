import React from "react";
import "./index.css";

function LoadingScreen() {
  return (
    <div id="root">
      <div className="loader-wrapper">
        <h1>Booting...</h1>
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
