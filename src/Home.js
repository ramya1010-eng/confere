import React from "react";
import Header from "./Header";
import "./App.css";

function Home() {
  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <Header />

      <div className="content">
        <h2>6th International Conference on</h2>
        <p><strong>COGNITIVE INFORMATICS ENGINEERING AND TECHNOLOGY</strong></p>

        <div className="date-box">
          March 28th & 29th, 2026 (Saturday & Sunday)
        </div>
        <section className="location-section">
  <h2 className="section-title">📍Location</h2>

  <p className="location-text">
    Vidya Vikas college of Engineering and Technology,Thiruchengode, Coimbatore.
  </p>
</section>

      </div>
    </div>
  );
}

export default Home;
