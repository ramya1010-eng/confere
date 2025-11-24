import React from "react";
import "./Speakers.css";

// Import images
import speaker1 from "./images/speaker1.jpg";
import speaker2 from "./images/speaker2.jpg";
import speaker3 from "./images/speaker3.jpg";


const speakers = [
  {
    name: "Dr. Aisha Rahman",
    title: "Keynote — Global Education Futures",
    img: speaker1,
  },
  {
    name: "Prof. Miguel Santos",
    title: "Higher Ed Policy",
    img: speaker2,
  },
  {
    name: "Ms. Li Wei",
    title: "EdTech Innovation",
    img: speaker3,
  },
];

const Speaker = () => {
  return (
    <div className="speaker-container">
      <h1 className="speaker-title">ICRETM Speakers</h1>

      <div className="speaker-grid">
        {speakers.map((spk, index) => (
          <div className="speaker-card" key={index}>
            <img src={spk.img} alt={spk.name} className="speaker-img" />
            <h3 className="speaker-name">{spk.name}</h3>
            <p className="speaker-title-text">{spk.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speaker;
