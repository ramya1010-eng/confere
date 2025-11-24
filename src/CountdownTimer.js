import React, { useState, useEffect } from "react";
import "./Countdown.css";

export default function CountdownTimer() {

  const targetDate = new Date("2026-01-01T00:00:00").getTime(); // Set your date

  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTime({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(
          Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0"),
        seconds: String(
          Math.floor((diff % (1000 * 60)) / 1000)
        ).padStart(2, "0"),
      });
    };

    updateTime(); // run immediately
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // targetDate is constant, so it's safe

  return (
    <div className="countdown-wrapper">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div className="countdown-box" key={unit}>
          <div className="count-number">{time[unit]}</div>
          <div className="count-label">{unit.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
}
