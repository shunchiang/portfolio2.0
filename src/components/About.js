import React from "react";
import headShot from "../img/headshot.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="headshot">
        <img src={headShot} alt="Shun's headshot" />
      </div>
      <div className="about-content">
        <p className="intro">Hi, I'm Shun,</p>
        <h2>
          Fullstack developer <span className="and">&</span> Designer
        </h2>
        <p className="about-body">
          From a young age, the constant theme of my life has been connection.
          As a naturalized immigrant and avid traveler, the connection through
          not just speech, but feelings, and culture shaped my drive and endless
          curiosity to explore the new worlds around me. Whether it'd be food or
          technology, my goal is to always bridge this sense of connection
          through empathetic design in everything I do.
        </p>
      </div>
    </div>
  );
}
