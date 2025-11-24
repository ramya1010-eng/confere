import React from "react";
import "./Schedule.css";

export default function Schedule() {
  return (
    <div className="schedule-wrapper">

      <h1 className="schedule-title">One-day Sample Schedule</h1>

      <div className="schedule-container">

        {/* LEFT SIDE — TIMELINE */}
        <div className="schedule-left">
          <div className="schedule-card">

            <div className="schedule-item">
              <div className="time">09:00 AM</div>
              <div>
                <h3>Registration & Welcome Coffee</h3>
                <p>Location: Main Hall</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="time">10:00 AM</div>
              <div>
                <h3>Opening Keynote — Global Trends</h3>
                <p>Location: Main Hall</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="time">11:30 AM</div>
              <div>
                <h3>Panel: EdTech Adoption</h3>
                <p>Location: Main Hall</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="time">01:00 PM</div>
              <div>
                <h3>Lunch & Networking</h3>
                <p>Location: Dining Hall</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="time">02:30 PM</div>
              <div>
                <h3>Workshops / Breakouts</h3>
                <p>Location: Breakout Rooms</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="time">04:00 PM</div>
              <div>
                <h3>Closing Remarks</h3>
                <p>Location: Main Hall</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — WORKSHOPS */}
        <div className="schedule-right">
          <div className="workshop-card">
            <h2>Workshops & Breakouts</h2>

            <ul>
              <li>Building Inclusive Curricula</li>
              <li>Measuring Learning Outcomes</li>
              <li>Scaling EdTech in Low-Resource Settings</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
