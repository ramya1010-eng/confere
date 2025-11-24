import React from "react";
import "./PaperSubmission.css";
import { openRegistrationModal } from "./Header";

export default function PaperSubmission() {
  return (
    <div className="ps-container">

      <h1 className="ps-title">Paper Submission & Registration</h1>

      <div className="ps-section">
        <h2 className="ps-heading">Submission Methods</h2>

        <div className="ps-buttons">
          <button className="ps-btn" onClick={openRegistrationModal}>
            Click here to submit the papers
          </button>

          <a href="mailto:iccetconf@gmail.com" className="ps-email-btn">
            iccetconf@gmail.com
          </a>
        </div>

        <p className="ps-text">
          <b>Proceedings of ICRET 2026</b> will be published with ISBN number.
          Selected papers will appear in
          <span className="highlight"> Google Scholar, SCIE, Scopus, Web of Science, Annexure 1</span>
          with an additional fee.
        </p>

        <p className="ps-note">
          <b>*Note:</b> *Note: The conference secretary will contact you within 3 working days of submission with your paper ID and feedback. 
          If you don’t receive feedback, please follow up after 3 days.
        </p>
      </div>

      {/* Template */}
      <div className="ps-section">
        <h2 className="ps-heading">Template</h2>
        <p>Please follow the official paper template.</p>

        <a href="/template/ICRETM_Template.docx" download className="download-btn">
          Download Template
        </a>
      </div>

       {/* ---------- REGISTRATION TABLE ---------- */}
      <div className="ps-section">
        <h2 className="ps-heading">Registration Fees</h2>

        <div className="table-wrapper">
          <table className="ps-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>National Participants</th>
                <th>International Participants</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>UG, PG Student / Research scholar / Faculty / Industry Participant (VIRTUAL PRESENTATION - 1 member )</td>
                <td>Rs. 1800</td>
                <td>USD 60</td>
              </tr>

              <tr>
                <td>UG, PG Student / Research scholar / Faculty / Industry Participant (VIRTUAL PRESENTATION - Batch can be 5 to 7 members )</td>
                <td>Rs. 2200</td>
                <td>USD 65</td>
              </tr>

              <tr>
                <td>UG, PG Students / Research scholars / Faculties / Industry Participants (VIRTUAL PRESENTATION- Batch can be 5 to 7 members)</td>
                <td>Rs. 2550</td>
                <td>USD 70</td>
              </tr>

              <tr>
                <td>UG, PG Students / Research scholars / Faculties / Industry Participants (Participants willing to attend the Conference at College)</td>
                <td>Rs. 2200</td>
                <td>USD 70</td>
              </tr>

              <tr>
                <td>UG, PG Students / Research scholars / Faculties / Industry Participants (Participants willing to attend the Conference at College -Batch can be 2 to 5 members)</td>
                <td>Rs. 2950</td>
                <td>USD 75</td>
              </tr>

              <tr>
                <td>Visitors</td>
                <td>Rs. 1000</td>
                <td>USD 50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Policy */}
      <div className="ps-section">
        <h2 className="ps-heading">Policy on Dual Submission</h2>
        <p>Submissions that are identical (or substantially similar) to versions previously published or under review elsewhere are not
         accepted for ICRETM 2026 and violate our dual submission policy.</p>
      </div>
 {/* ---------- FINAL INSTRUCTION ---------- */}
      <div className="ps-section">
        <h2 className="ps-heading">Registration Instructions</h2>
        <p>For Authors: Registration details will be included in your acceptance letter.</p>
      </div>

    </div>
    
  );
}
