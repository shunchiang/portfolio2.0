import React, { useState } from "react";
import Carousel from "./Carousel";
import Designs from "./Designs";
export default function PortfolioCard() {
  const [tabPosition, setTabPosition] = useState(1);
  return (
    <div className="back">
      <ul className="tabrow">
        <li
          className={tabPosition === 1 ? "selected first" : "first"}
          onClick={() => {
            setTabPosition(1);
          }}
        >
          <div className="tab">Works</div>
        </li>
        <li
          className={tabPosition === 2 ? "selected second" : "second"}
          onClick={() => {
            setTabPosition(2);
          }}
        >
          <div className="tab">Designs</div>
        </li>
        <li
          className={tabPosition === 3 ? "selected third" : "third"}
          onClick={() => {
            setTabPosition(3);
          }}
        >
          <div className="tab">About</div>
        </li>
      </ul>
      {tabPosition === 1 ? (
        <div className="back-cont">
          <h1>Fullstack Projects</h1>
          <Carousel />
          <div className="back-btn-div">
            <div
              className="back-btn"
              onClick={() => {
                document
                  .querySelector(".user-card-body")
                  .classList.toggle("flip");
                document.querySelector(".App").classList.toggle("newBg");
              }}
            >
              back
            </div>
          </div>
        </div>
      ) : tabPosition === 2 ? (
        <Designs />
      ) : tabPosition === 3 ? (
        <></>
      ) : null}
    </div>
  );
}
