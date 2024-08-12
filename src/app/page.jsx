"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./page.module.scss";
import Loader from "./components/Loader/page";
import Navbar from "./components/NavBar/page";
import LogoAnimation from "./components/LogoAnimation/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={Styles.main}>
        {isLoading ? (
          <Loader className={Styles.LoaderPosition} />
        ) : (
          <div className={Styles.pageWrapper}>
            <Navbar className={Styles.navBarPosition} />
            <LogoAnimation />
            <div className={Styles.pageContent}>
              <div className={Styles.tagLineWrapper}>
                <h1 className={Styles.tagLine}>
                  never&nbsp;&nbsp; wait&nbsp;&nbsp; for&nbsp;&nbsp;
                  the&nbsp;&nbsp; right&nbsp;&nbsp; time...
                </h1>
                <h2 className={Styles.carpeDiem}>carpe diem</h2>
                <p className={Styles.carpeDiemDesc}>
                  /ˌkɑːpeɪ&apos;diːɛm,ˌkɑːpeɪ&apos;dʌɪɛm/
                  <br />
                  exclamation: carpe diem
                  <br />
                  used to urge someone to make the most of the present time and
                  give little thought to the future
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
