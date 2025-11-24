import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./RegistrationFee.css";

export default function RegistrationFee({ isOpen, onClose }) {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    category: "",
    presentation_type: "",
    institution: "",
    country: ""
  });

  const [selectedFile, setSelectedFile] = useState(""); // NEW — store file name
  const [successPopup, setSuccessPopup] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0].name); // show name
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_j26jj3o",
        "template_9jydyis",
        {
          full_name: formData.full_name,
          email: formData.email,
          category: formData.category,
          presentation_type: formData.presentation_type,
          institution: formData.institution,
          country: formData.country,
          file_name: selectedFile, // sending filename also
        },
        "ltjnR41p9KqrdZD57"
      )
      .then(() => {
        setSuccessPopup(true);

        setTimeout(() => {
          setSuccessPopup(false);
          onClose();
        }, 2000);
      })
      .catch((error) => {
        console.log("Email error:", error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2 className="modal-title">Conference Registration</h2>

        {successPopup && (
          <div className="popup-box">
            Registration Successful! Confirmation email sent.
          </div>
        )}

        <form className="modal-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="institution"
            placeholder="Institution/Organization"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            required
          />

          <select name="category" onChange={handleChange} required>
            <option value="">-- Select Category --</option>
            <option>UG / PG Student</option>
            <option>Research Scholar</option>
            <option>Faculty / Professor</option>
            <option>Industry Participant</option>
            <option>Visitor</option>
          </select>

          <select name="presentation_type" onChange={handleChange} required>
            <option value="">-- Select Presentation Type --</option>
            <option>Virtual Presentation (Single)</option>
            <option>Virtual Presentation (Batch)</option>
            <option>Offline Presentation (Single)</option>
            <option>Offline Presentation (Batch)</option>
          </select>

          {/* FILE UPLOAD + CONFIRMATION */}
          <div className="form-group">
            <label className="upload-label">Attach File (PDF / DOC)</label>

            <input
              type="file"
              className="file-upload"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />

            {selectedFile && (
              <p className="file-confirm">Selected File: {selectedFile}</p>
            )}
          </div>

          <button className="submit-btn">Submit Registration</button>
        </form>
      </div>
    </div>
  );
}
