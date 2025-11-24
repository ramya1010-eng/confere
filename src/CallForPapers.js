import React from "react";
import "./CallForPapers.css";

export default function CallForPapers() {
  return (
    <div className="cfp-container">

      <h1 className="cfp-title">Call for Papers</h1>

      <p className="cfp-subtitle">
        Topics of interest for submission include, but are not limited to:
      </p>

      <div className="cfp-grid">

        {/* ----------- Column 1: Engineering ----------- */}
        <div className="cfp-column">
          <h3 className="cfp-heading">Engineering & Technology</h3>
          <ul>
            <li>Computer Engineering</li>
            <li>Electrical & Electronics Engineering</li>
            <li>Electronics & Communication Engineering</li>
            <li>Architectural Engineering</li>
            <li>Agricultural Engineering</li>
            <li>Acoustic Engineering</li>
            <li>Automotive Engineering</li>
            <li>Biomechanics</li>
            <li>Biomedical Engineering</li>
            <li>Biotechnology</li>
            <li>Chemical Engineering</li>
            <li>Civil Engineering</li>
            <li>Control Engineering</li>
            <li>Environmental Engineering</li>
            <li>Industrial Engineering</li>
            <li>Instrumentation</li>
            <li>Mechanical Engineering</li>
            <li>Materials Engineering</li>
            <li>Nuclear Engineering</li>
            <li>Nano Engineering</li>
            <li>Petroleum Engineering</li>
            <li>Space Engineering</li>
            <li>Sports Engineering</li>
          </ul>
        </div>

        {/* ----------- Column 2: Management ----------- */}
        <div className="cfp-column">
          <h3 className="cfp-heading">Management</h3>
          <ul>
            <li>Business Risk</li>
            <li>Marketing</li>
            <li>Human Resource</li>
            <li>International Operational Research</li>
            <li>International Business</li>
            <li>Trends in Medicine & Radiology</li>
          </ul>
        </div>

        {/* ----------- Column 3: Medical Science ----------- */}
        <div className="cfp-column">
          <h3 className="cfp-heading">Medical and Science</h3>
          <ul>
            <li>Oral Medicine and Radiology</li>
            <li>Oral Pathology</li>
            <li>Oral and Maxillofacial Surgery</li>
            <li>Prosthodontics</li>
            <li>Endodontics</li>
            <li>Pendodontics</li>
            <li>Periodontics</li>
            <li>Community Dentistry</li>
            <li>Biochemistry</li>
            <li>Biochemical Science</li>
            <li>Biochemical Engineering</li>
            <li>Environmental Science</li>
            <li>Measurement Science</li>
            <li>Nutrition</li>
            <li>Soil Science</li>
            <li>Horticulture</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM EMAIL SECTION */}
      <p className="cfp-email">
        📩 Submit your papers to <a href="mailto:iccetconf@gmail.com">iccetconf@gmail.com</a>
      </p>

    </div>
  );
}
