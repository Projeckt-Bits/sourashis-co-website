import React from "react";
import Styles from "./LogoAnimation.module.scss";

const LogoAnimation = () => {
  return (
    <div className={Styles.LogoContainer}>
      <div className={Styles.LogoAnimation}>
        <video
          src="/Videos/Sourashis & Co Logo Animation.mp4"
          loop
          autoPlay
          muted
          controls={false}
        />
      </div>
    </div>
  );
};

export default LogoAnimation;
