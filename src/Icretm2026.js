import React from "react";
import { useNavigate } from "react-router-dom";   // ✅ STEP 4: Add this
import "./Icretm2026.css";

import rightImage from "./images/confern.jpg";

export default function Icretm2026() {

  const navigate = useNavigate();                // ✅ STEP 4: Initialize Navigation

  return (
    <div className="icretm-wrapper">

      {/* TITLE */}
      <h1 className="icretm-title">About the Conference</h1>

      <div className="icretm-container">

        {/* LEFT CONTENT */}
        <div className="icretm-left">
          <p className="icretm-text">
            International Conference on Cognitive Informatics Engineering and Technology (ICETM)
            will be held on <b>28th and 29th March 2026</b> at Vidyaa Vikas College of Engineering
            and Technology, Tiruchengode, India. ICETM brings together innovative academics and
            industrial experts in the field of Science, Engineering, Technology, and Management to
            a common forum.
          </p>

          <p className="icretm-text">
            This conference provides a unique opportunity for Research Scholars, Students, and
            Academicians to actively engage with leading technology experts. Delegates can expect
            keynote lectures, hands-on workshops, demonstrations, and cutting-edge research
            presentations.
          </p>

          <ul className="icretm-list">
            <li>Keynotes by world-class education leaders</li>
            <li>Hands-on workshops and demo booths</li>
            <li>Networking sessions and grants showcase</li>
          </ul>

          {/* STEP 4 — Navigation Button */}
          <button 
            className="icretm-btn"
            onClick={() => navigate("/schedule")}   // ✅ GO TO /schedule PAGE
          >
            See Schedule
          </button>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="icretm-right">
          <div className="attend-box">
            <h3>Who should attend?</h3>
            <ul>
              <li>University leaders & deans</li>
              <li>K–12 policymakers</li>
              <li>EdTech startups & investors</li>
              <li>Researchers & graduate students</li>
            </ul>
          </div>

          <img src={rightImage} alt="Conference" className="icretm-image" />
        </div>

      </div>
    </div>
  );
}
