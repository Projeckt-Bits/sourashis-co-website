"use client";
import React from "react";
import Styles from "./AnalogueClock.module.scss";

const AnalogueClock = () => {
  const SecondHand = document.getElementById("SecondsHand");
  const MinuteHand = document.getElementById("MinutesHand");
  const HourHand = document.getElementById("HoursHand");

  function FlowingTime() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    RotateClockHand(SecondHand, seconds);
    RotateClockHand(MinuteHand, minutes);
    RotateClockHand(HourHand, hours);
  }

  function RotateClockHand(element, rotation) {
    element.style.setProperty("--rotate", rotation * 360);
  }
  setInterval(FlowingTime, 1000);
  return (
    <div>
      <div className={Styles.HoursHand} id="HoursHand"></div>
      <div className={Styles.MinutesHand} id="MinutesHand"></div>
      <div className={Styles.SecondsHand} id="SecondsHand"></div>
      <div className={Styles.CentredDot}></div>
    </div>
  );
};

export default AnalogueClock;
