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
      <div className={Styles.Main}>
        {isLoading ? (
          <Loader className={Styles.LoaderPosition} />
        ) : (
          <div className={Styles.PageWrapper}>
            <Navbar className={Styles.NavBarPosition} />
            <LogoAnimation />
            <div className={Styles.PageContent}>
              <div className={Styles.TagLineWrapper}>
                <h1 className={Styles.TagLine}>
                  never&nbsp;&nbsp; wait&nbsp;&nbsp; for&nbsp;&nbsp;
                  the&nbsp;&nbsp; right&nbsp;&nbsp; time...
                </h1>
                <h2 className={Styles.CarpeDiem}>carpe diem</h2>
                <p className={Styles.CarpeDiemDesc}>
                  /ˌkɑːpeɪ&apos;diːɛm,ˌkɑːpeɪ&apos;dʌɪɛm/
                  <br />
                  exclamation: carpe diem
                  <br />
                  used to urge someone to make the most of the
                  <br />
                  present time and give little thought to the future
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
