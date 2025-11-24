import React from "react";
import "./JournalPublication.css";
import { openRegistrationModal } from "./Header";

export default function JournalPublication() {
  return (
    <div className="jp-container">

      {/* ---------- PAGE TITLE ---------- */}
      <h1 className="jp-title">Journal Publication</h1>

      {/* ---------- DESCRIPTION ---------- */}
      <p className="jp-text">
        Publication Opportunity: All registered papers will be published in an
        international conference proceeding (with ISBN number)Journal Publication Opportunity. 
        All registered and extended versions of the papers will be published in related reputed International Journals. Get your paper published in 
        <span className="highlight"> Scopus, Web of Science, SCI, Annexure 1 & 2 </span> 
        indexed journals and book chapters with nominal extra charges.
        This conference is classified under Scopus Indexed Journals Associated Events.
      </p>

      {/* ---------- DOWNLOAD LINKS ---------- */}
      <div className="jp-section">
         <a
              href="/files/journals-list.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
          Click here (PDF format) to view the list of journals.
        </a>

        <a href="/files/journals-list.docx" download className="jp-link">
          Click here (DOC format) to view the list of journals.
        </a>
      </div>

      {/* ---------- PREVIOUS YEAR ---------- */}
      <h2 className="jp-subtitle">Previous Year Journal Publication List</h2>

      <div className="jp-section">
         <a
              href="/files/2025-publications.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
          Click here (PDF format) to view list of 
          <span className="highlight-box"> Papers published in ICRETM 2025 </span>
        </a>

         <a href="/files/2025-publications.docx" download className="jp-link">
          Click here (DOC format) to view list of 
          <span className="highlight-box"> Papers published in ICRETM 2025 </span>
        </a>
      </div>

      {/* ---------- BLUE CTA SECTION ---------- */}
      <div className="jp-cta-box">
        <div className="jp-cta-text">
          Ready to join delegates from 50+ countries?
        </div>

        <button className="jp-cta-btn" onClick={openRegistrationModal}>
          Register
        </button>
      </div>

    </div>
  );
}
