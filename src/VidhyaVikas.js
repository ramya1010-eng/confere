import React from "react";
import "./VidhyaVikas.css";

export default function VidhyaVikas() {
  return (
    <section className="vv-wrapper">

      <h1 className="vv-title">About Vidya Vikas</h1>

      <div className="vv-container">

        {/* LEFT SIDE CONTENT */}
        <div className="vv-left">

          <p className="vv-text">
            <strong>VIDYA VIKAS COLLEGE OF ENGINEERING AND TECHNOLOGY (VVCET)</strong> 
             were established in the year 2007 by Vidyaa Vikas Educational and Charitable Trust. 
             The management comprises of Mrs.S.Tamilarasi Correspondent, Mrs.G.Malliga Secretary, Mr.M.Moorthy, President, the following managing trustees Mrs.Girja Devi, Mrs.Vasuki And the following Founders Dr.S.Gunasekaran, Dr. T. O. Singaravel, Dr. S. Ramalingam and Dr. M.Muthusamy is a unit of Vidyaa Vikas Educational Institutions, a premier education 
             provider in Tiruchengode, having 11 Institutions, 17,000students, offering various academic programmes. The College of Engineering and Technology has entered into 17th year of its glorious service to the student community. The college imparts quality education and continuous efforts were made in upholding quality practices. At present the college offers 6 undergraduate programs and 4 postgraduate programs. 
             The under graduate programs are B.E (CSE, ECE, EEE, MECH, CSE(SC)) and B.Tech (AIDS) and post graduates programs are M.E.(CSE, ED), MBA and MCA. All thecourses are approved by AICTE, Delhi and affiliated by Anna University, Chennai. 
             The following UG coursesB.E.(CSE, EEE, ECE) are permanently affiliated by Anna University, Chennai. Our college obtains a status of 2 (f) and 12(B) from UGC. Our college is focusing on overall development on the students through participationin co-curricular and extracurricular activities. The college is known for its state of- the-art infrastructureconsisting of advanced laboratories, well stacked library and ICT facilities.

The research cell cultivates a research-oriented culture among both faculty and students by Organizing diverse workshops, seminars, training programs, and special meetings designed to promote research endeavours. There is a strong emphasis on encouraging faculty and students to actively engage in the preparation and writing of research-oriented papers as part of this research initiative. Through the R&D Cell, 13 Research programs are conducted based on ‘Research paper writing – Methodologies, 
Tools, and Guidelines’, ‘Critical Thinking and Problem Solving’ & ‘PCB Design Fundamentals Proto typing and the PCB Design Flow’.
          </p>

          <h2 className="vv-subtitle">Vision</h2>
          <p className="vv-text">
            <em>
              “To be a world-class engineering institution contributing to technological and socio-economic
              development through high-quality technical education, innovation, and intellectual contributions.”
            </em>
          </p>

          <h2 className="vv-subtitle">Mission</h2>
          <p className="vv-text">
            To offer value-based education that develops engineering knowledge, professional skills, and
            ethical responsibility, preparing students to serve industry and society with exemplary character.
          </p>

          <a 
  className="vv-readmore" 
  href="https://vvcet.ac.in" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Read more...
</a>

        </div>

        {/* RIGHT SIDE BOX */}
        <div className="vv-right">
          <h3>Why Choose VVCET?</h3>
          <ul>
            <li>17+ years of excellence in engineering education</li>
            <li>AICTE & Anna University approved courses</li>
            <li>Highly qualified faculty members</li>
            <li>Modern labs and ICT-enabled classrooms</li>
            <li>Research-driven initiatives and technical clubs</li>
            <li>Strong industry-academia collaboration</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
