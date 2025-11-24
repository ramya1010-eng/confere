import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationFee from "./RegistrationFee";

import "./Header.css";

/* 🔥 GLOBAL FUNCTION so PaperSubmission.js can open the modal */
export let openRegistrationModal = () => {};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showModal, setShowModal] = useState(false);

  /* Store global trigger */
  openRegistrationModal = () => setShowModal(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(null);
  };

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <>
      <header className="header">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <button className="register-btn" onClick={() => setShowModal(true)}>
          Register
        </button>

        <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
          <ul>

            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>

            {/* ABOUT DROPDOWN */}
            {/* ABOUT (no navigation, only dropdown open) */}
<li className="dropdown">
  <div 
    className="dropdown-title" 
    onClick={() => toggleDropdown("about")}
    style={{ cursor: "pointer" }}
  >
    About <span style={{ marginLeft: "8px" }}>▾</span>
  </div>

  {dropdownOpen === "about" && (
    <ul className="dropdown-menu">
      <li>
        <Link to="/icretm2026" onClick={toggleMenu}>ICRET 2026</Link>
      </li>
      <li>
        <Link to="/vidhya-vikas" onClick={toggleMenu}>Vidya Vikas</Link>
      </li>
    </ul>
  )}
</li>


            <li><Link to="/speakers" onClick={toggleMenu}>Speakers</Link></li>
            <li><Link to="/program-committee" onClick={toggleMenu}>Program Committee</Link></li>
            <li><Link to="/call-for-papers" onClick={toggleMenu}>Call for Papers</Link></li>

            {/* PAPER SUBMISSION DROPDOWN */}
            <li className="dropdown">
              <div className="dropdown-title" onClick={() => toggleDropdown("paper")}>
                Paper Submission ▾
              </div>

              {dropdownOpen === "paper" && (
                <ul className="dropdown-menu">
                  <li><Link to="/paper-submission" onClick={toggleMenu}>Registration</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/accepted-papers" onClick={toggleMenu}>Accepted Paper List</Link></li>
            <li><Link to="/journal-publication" onClick={toggleMenu}>Journal Publication</Link></li>
            <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>

          </ul>
        </nav>
      </header>

      {/* Registration Modal */}
      <RegistrationFee
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default Header;
