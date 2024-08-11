"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./page.module.scss";
import Loader from "./components/Loader/page";
import Navbar from "./components/NavBar/page";
import SciFiButton from "./components/SciFiButton/page";
import LogoAnimation from "./components/LogoAnimation/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={Styles.main}>
        {isLoading ? (
          <Loader className={Styles.LoaderPosition}/>
        ) : (
          <>
            <Navbar className={Styles.navBarPosition} />
            <LogoAnimation />
            <SciFiButton className={Styles.SciFiButton1Position} caption={"Join Us!"} link={"components/Loader"} />
          </>
        )}
      </div>
    </>
  );
}
