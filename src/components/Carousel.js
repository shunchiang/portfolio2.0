import React from "react";
import { Carousel } from "react-responsive-carousel";
import ftc from "../img/ftc.png";
import mtg from "../img/mtg.png";
import gigapet from "../img/gigapet.png";
import foodtruck from "../img/foodtruck.png";
import potd from "../img/nasa.png";
import blog from "../img/blog.png";
import portfo from "../img/portfo.png";
import rm from "../img/rm.png";

export default () => (
  <Carousel showThumbs={false} showStatus={true}>
    <div>
      <img alt="project example" src={ftc} />
      <p className="legend">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://flatten-the-curve19.now.sh/"
        >
          Flatten the Curve
        </a>
        : A hackathon team project featuring a geolocation chat, twitter feed,
        and more. Utilized: Node, Socket.io, MUI, Redux, Firebase
      </p>
    </div>
    <div>
      <img alt="magic the gathering portfolio piece" src={mtg} />
      <p className="legend">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://inspiring-archimedes-3b4ff0.netlify.app/"
        >
          Magic the Gathering booster sim
        </a>
        : Personal project utilizing react-redux and design principles to
        simulate booster pack openings of various trading card sets.
      </p>
    </div>
    <div>
      <img alt="gigapet project" src={gigapet} />
      <p className="legend">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://kkslider2130.github.io/Gigapet-Marketing-proto/#"
        >
          Gigapet
        </a>
        : A virtual pet app for kids. Keeps track of meals for kids by feeding
        the same meal virtually to digital pets. Utilized SERN stack with redux
      </p>
    </div>
    <div>
      <img alt="" src={foodtruck} />
      <p className="legend">
        {" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://confident-volhard-97d9a3.netlify.app/loginDiner"
        >
          FoodTruck TrackR
        </a>
        : Team built web app that allows consumers to track food trucks, and
        truck vendors to list their businesses
      </p>
    </div>
    <div>
      <img alt="" src={potd} />
      <p className="legend">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://nasa-potd-react-project.netlify.app/"
        >
          Nasa Photo of the Day
        </a>
        : simple react app which displays a photo of the day taken by Nasa,
        features a calendar to backtrack and real time updating{" "}
      </p>
    </div>
    <div>
      <img alt="" src={blog} />
      <p className="legend">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://agile-shore-94352.herokuapp.com/"
        >
          Blog
        </a>
        : simple blog rendered server side using just Node/Express/EJS
      </p>
    </div>
    <div>
      <img alt="" src={portfo} />
      <p className="legend">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://kkslider2130.github.io/"
        >
          Portfolioception
        </a>
        : My first ever portfolio crammed with fundementals projects, essential
        for looking back on with embarrassment.
      </p>
    </div>
    <div>
      <img alt="" src={rm} />
      <p className="legend">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://rick-and-morty-fansite.now.sh/"
        >
          Rick and Morty challenge
        </a>
        : A timed react router challenge of building a functional fan site using
        the Rick and Morty API.
      </p>
    </div>
  </Carousel>
);
