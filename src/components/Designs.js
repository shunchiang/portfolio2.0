import React, { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// import fitnessThumb from "../img/fitnessThumb.png"
// import queueThumb from "../img/queuethumb.png"
import sleepTrackerApp from "../img/sleepTrackerApp.png";
import fitnessApp from "../img/fitnessApp.png";
import queueApp from "../img/QueueApp.png";
import rrandall from "../img/rrandall.png";

export default function Designs() {
  const thumbnailArray = [fitnessApp, queueApp, sleepTrackerApp, rrandall];
  const [currentThumb, setCurrentThumb] = useState(fitnessApp);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="designs-container">
      <div className="thumbnail-container">
        {thumbnailArray.map((e) => (
          <img
            src={e}
            alt="design thumbnail"
            className={
              currentThumb !== e ? `thumbnail ${e}` : `thumbnail ${e} active`
            }
            onClick={() => {
              setCurrentThumb(e);
            }}
          />
        ))}
      </div>
      <div className="view-container">
        <div
          className={currentThumb !== fitnessApp ? "viewBox" : `viewBox fade`}
        >
          <Loader
            type="Puff"
            color="white"
            height={100}
            width={100}
            className="loader"
            visible={setLoaded ? false : true}
          />

          <img
            src={currentThumb}
            alt="application"
            onLoad={() => {
              setLoaded(true);
            }}
          />

          <div className="design-description">
            <p className="title">Anywhere Fitness</p>
            <p className="content">
              A fitness application concept made for both trainers and clients
              to bridge personal fitness needs & goals. Worked with a small team
              of UI designers and made contributions to the style guide, user
              flow, and mobile promotional views. The app was designed heavily
              with usability, convenience, and simplicity in mind.
            </p>
            <div className="figma-btn">
              <a
                href="https://www.figma.com/file/21x7l36ouAwxCCkqXUHoZk/Anywhere-Fitness?node-id=15%3A10867"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>
            </div>
          </div>
        </div>
        <div className={currentThumb !== queueApp ? "viewBox" : `viewBox fade`}>
          <img src={currentThumb} alt="application" />
          <div className="design-description">
            <p className="title">The Queue</p>
            <p className="content">
              An application design for a virtual general purpose student
              ticketing system. The key design framework was made to be Material
              UI inspired, but with a large color palette to catagorize and tag
              different needs. The content focused views framed by the economy
              of our whitespace really allows us to drive home the design system
              principles.
            </p>
            <div className="figma-btn">
              <a
                href="https://www.figma.com/file/Eydo5RtUYCddBsApV6hEpM/The-Queue-App?node-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            currentThumb !== sleepTrackerApp ? "viewBox" : `viewBox fade`
          }
        >
          <img src={currentThumb} alt="application" />
          <div className="design-description">
            <p className="title">Sleep Tracker</p>
            <p className="content">
              A school hackathon productivity application made in parallel with
              a development team that logs a user's sleep and displays
              statistics accordingly. The nocturnal themes focuses on invoking
              the feeling of relaxation and peacefulness without falling into
              boredom. The project spanned a week and went through 4 iteration
              cycles.
            </p>
            <div className="figma-btn">
              <a
                href="https://www.figma.com/file/VFBL5X6fvEV15JODy8Sfdw/Sleep-Tracker-App?node-id=330%3A0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>
            </div>
          </div>
        </div>
        <div className={currentThumb !== rrandall ? "viewBox" : `viewBox fade`}>
          <img src={currentThumb} alt="application" />
          <div className="design-description">
            <p className="title">R.Randall Contractors</p>
            <p className="content">
              A quick mock up of a mobile paintaing contractor website built for
              a client for a freelance gig. The designs followed specifications
              from the client's existing needs and business model. The goal was
              to cater towards the client's domestic audience's sensibilities
              while also keeping his commercial audiences in mind.
            </p>
            <div className="figma-btn">
              <a
                href="https://www.figma.com/file/3DOLsQusbcWxuYu9iK3lXW/R.Randall?node-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
