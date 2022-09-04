import React from "react";
import styles from "./index.module.css";

function LoadingScreen() {
  return (
    <div className={styles.body}>
      <div className={styles.heading}>
        <h1>Booting...</h1>
      </div>
      <div className={styles.body_loading}>
        <div className={styles.percent}>
          <p>{loadingPercentage}%</p>
        </div>
        <div className={styles.lds_ellipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
