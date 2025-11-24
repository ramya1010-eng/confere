import React from "react";
import "./ProgramCommittee.css";

export default function ProgramCommittee() {
  return (
    <div className="pc-container">

      <h1 className="pc-title">Program Committee</h1>

      <div className="pc-grid">

        {/* LEFT COLUMN */}
        <div className="pc-column">

          <h2 className="pc-heading">CHIEF PATRON</h2>
          <p className="pc-text">Mrs. S. TAMILARASI, Correspondent, VVEI</p>

          <h2 className="pc-heading">PATRONS</h2>
          <ul className="pc-list">
            <li>Mrs. G. MALLIGA, Secretary, VVEI</li>
            <li>Mr. M. MOORTHY, President, VVEI</li>
            <li>Mrs. GIRIJA DEVI, Managing Trustee, VVEI</li>
            <li>Mrs. VASUKI, Managing Trustee, VVEI</li>
          </ul>

          <h2 className="pc-heading">CONFERENCE CHAIR</h2>
          <p className="pc-text">Dr. K. POORNAPRIYA, Principal, VVCET</p>

          <h2 className="pc-heading">CONVENER</h2>
          <p className="pc-text">Dr. K. POORNAPRIYA, Principal, VVCET</p>

          <h2 className="pc-heading">ADVISORY COMMITTEE</h2>
          <p className="pc-text">[Add members here]</p>

        </div>

        {/* RIGHT COLUMN */}
        <div className="pc-column">

          <h2 className="pc-heading">COORDINATORS</h2>
          <ul className="pc-list">
            <li>Mr. T. KARTHIKEYAN, IQAC Co-ordinator, VVCET</li>
            <li>Dr. S. ROSHINI, HoD / CSE, VVCET</li>
            <li>Dr. G. AARTHI, HoD / MCA, VVCET</li>
            <li>Dr. G. SOMATHI, Professor / MCA, VVCET</li>
            <li>Mr. S. SIVASAMY, HoD / AIDS, VVCET</li>
            <li>Mr. G. RAVISHANKAR, HoD / MBA, VVCET</li>
            <li>Mrs. M. REVATHI, HoD / ECE, VVCET</li>
            <li>Mr. P. HEMANTH, AP / ECE, VVCET</li>
            <li>Mr. K. P. ARAVINDAN, Professor / MECH, VVCET</li>
            <li>Mr. R. RAVI, HoD / Physics, VVCET</li>
            <li>Mr. R. KARAPAGARAJAN, HoD / Chemistry, VVCET</li>
          </ul>

          <h2 className="pc-heading">CO-CONVENER</h2>
          <ul className="pc-list">
            <li>Dr. G. VETRICHELVAN, HoD / MECH, VVCET</li>
            <li>Dr. R. DHANU, HoD / EEE, VVCET</li>
          </ul>

        </div>

      </div>
    </div>
  );
}
