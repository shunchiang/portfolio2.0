import React from "react";
// import { Carousel } from "react-responsive-carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import ftc from "../img/ftc.mp4";
import mtg from "../img/mtgVid.mp4";
import gigapet from "../img/gigapet.png";
import foodtruck from "../img/foodtruck.mp4";
import conways from "../img/Conways.mp4";
import potd from "../img/nasa.png";
import blog from "../img/blog.png";
import portfo from "../img/portfo.png";
import rm from "../img/rm.png";
import mm from "../img/mm.mp4";

export default () => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={46}
    totalSlides={10}
  >
    <Slider>
      <Slide index={0}>
        <div>
          <video autoPlay="autoplay" loop="loop" muted>
            <source type="video/mp4" src={mm} />
          </video>
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://miracle-messages-fe-git-mm-view.kkslider2130.vercel.app/"
                >
                  Miracle Map
                </a>
                |Redux| |Node| |PostGres| |MapBox| |DeckGL| |Oauth|{" "}
              </div>
              Map app built for the Miracle Messages organization, an SF based
              non-profit with a mission of reuniting the homeless. A platform
              for data visualization displaying reunions ofhomeless people and
              their loved ones.
            </p>
          </div>
        </div>
      </Slide>
      <Slide index={1}>
        <div>
          <video autoPlay="autoplay" loop="loop" muted>
            <source type="video/mp4" src={foodtruck} />
          </video>
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://food-truck-track-r.vercel.app/login"
                >
                  Foodtruck TrackR
                </a>
                |React| |Node.JS| |Stripe| |Redux| |Google Maps| |Redux|
                |Cypress|{" "}
              </div>
              Yelp like app for food tracking and reviewing foodtrucks with
              stripe and payment integration for vendors and customers
            </p>
          </div>
        </div>
      </Slide>
      <Slide index={2}>
        <div>
          <video autoPlay="autoplay" loop="loop" muted>
            <source type="video/mp4" src={ftc} />
          </video>{" "}
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://flatten-the-curve19.now.sh/"
                >
                  Flatten the Curve
                </a>
                |Firebase| |Socket.IO| |React| |Redux| |Google Maps|
                |MaterialUI| |Jest|{" "}
              </div>
              A hackathon team COVID information site featuring a geolocation
              chat, twitter feed, and more
            </p>
          </div>
        </div>
      </Slide>
      <Slide index={3}>
        <div>
          <video autoPlay="autoplay" loop="loop" muted>
            <source type="video/mp4" src={conways} />
          </video>{" "}
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://shun-chiang-game-of-life.vercel.app/"
                >
                  Conway's Game of Life
                </a>
                |Algorithm| |2D Arrays| |Automoton| |Python| |React|{" "}
              </div>
              A Cellular automoton game based on Conway's Game of life which
              simulates the change in oraganic life refactored from a python
              algorithm I coded
            </p>
          </div>
        </div>
      </Slide>

      <Slide index={4}>
        <div>
          <video autoPlay="autoplay" loop="loop" muted>
            <source type="video/mp4" src={mtg} />
          </video>{" "}
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://shun-chiang-game-of-life.vercel.app/"
                >
                  MTG booster sim
                </a>
                |Redux| |React Testing Library| |Adobe suite| |Javascript|
                |HTML|{" "}
              </div>
              Personal project utilizing react-redux and design principles to
              simulate booster pack openings of various trading card sets
            </p>
          </div>
        </div>
      </Slide>
      <Slide index={5}>
        <div>
          <img alt="gigapet" src={gigapet} />{" "}
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://kkslider2130.github.io/Gigapet-Marketing-proto/#"
                >
                  Gigapet
                </a>
                |Rest| |Adobe suite| |HTML| |Javascript| |CSS| |Node| |Knex|{" "}
              </div>
              A virtual pet app for kids. Keeps track of meals for kids by
              feeding the same meal virtually to digital pets. Utilized SERN
              stack with redux
            </p>
          </div>
        </div>
      </Slide>
      <Slide index={6}>
        <div>
          <img alt="nasa app" src={potd} />
          {""}
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://nasa-potd-react-project.netlify.app/"
                >
                  NASA Photo of the Day
                </a>
                |HTML| |Javascript| |CSS| |React|{" "}
              </div>
              simple react app which displays a photo of the day taken by Nasa,
              features a calendar to backtrack and real time updating
            </p>
          </div>
        </div>
      </Slide>
      <Slide index={7}>
        <div>
          <img alt="Blog" src={blog} />
          {""}
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://agile-shore-94352.herokuapp.com/"
                >
                  Server side Blog
                </a>
                |Express| |EJS| |MongoDB| |HTML|{" "}
              </div>
              A blog rendered serverside using EJS and express persisted with
              MongoDB
            </p>
          </div>
        </div>
      </Slide>
      <Slide index={8}>
        <div>
          <img alt="Blog" src={rm} />
          {""}
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://rick-and-morty-fansite.now.sh/"
                >
                  Rick and Morty fan site
                </a>
                |React Router| |HTML| |CSS| |JS|{" "}
              </div>
              A timed react router challenge built in an hour using the rick and
              morty API
            </p>
          </div>
        </div>
      </Slide>
      <Slide index={9}>
        <div>
          <img alt="Blog" src={portfo} />
          {""}
          <div className="infoCon">
            <p className="legend">
              <div className="titleBox">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://shunchiang.github.io/kkslider2130.github.io/"
                >
                  Smaller Projects
                </a>
                |HTML| |CSS| |JS|{" "}
              </div>
              A collection of my smaller projects built excercising vanilla JS
            </p>
          </div>
        </div>
      </Slide>
    </Slider>
    <DotGroup />
    <ButtonBack className="btnLeft">
      <i class="fas fa-angle-left"></i>
    </ButtonBack>
    <ButtonNext className="btnRight">
      <i class="fas fa-angle-right"></i>
    </ButtonNext>
  </CarouselProvider>
  // <Carousel showThumbs={false} showStatus={true}>
  //   <div>
  //     <video autoPlay="autoplay" loop="loop" muted>
  //       <source type="video/mp4" src={mm} />
  //     </video>
  //     <p className="legend">
  //       <a
  //         rel="noopener noreferrer"
  //         target="_blank"
  //         href="https://miracle-messages-fe-git-mm-view.kkslider2130.vercel.app/"
  //       >
  //         Miracle Map
  //       </a>
  //       : Map app built for the Miracle Messages organization based in San
  //       Francisco with a mission of reuniting the homeless. A platform for
  //       joining and displaying local chapters and displaying reunions of
  //       homeless people and their loved ones.
  //     </p>
  //   </div>
  // <div>
  //   <video autoPlay="autoplay" loop="loop" muted>
  //     <source type="video/mp4" src={foodtruck} />
  //   </video>
  //   <p className="legend">
  //     {" "}
  //     <a
  //       rel="noopener noreferrer"
  //       target="_blank"
  //       href="https://food-truck-track-r.vercel.app/login"
  //     >
  //       FoodTruck TrackR
  //     </a>
  //     : Yelp like app for food tracking and reviewing foodtrucks with stripe
  //     and payment integration for vendors and customers.
  //   </p>
  // </div>
  // <div>
  //   <video autoPlay="autoplay" loop="loop" muted>
  //     <source type="video/mp4" src={ftc} />
  //   </video>{" "}
  //   <p className="legend">
  //     <a
  //       rel="noopener noreferrer"
  //       target="_blank"
  //       href="https://flatten-the-curve19.now.sh/"
  //     >
  //       Flatten the Curve
  //     </a>
  //     : A hackathon team project featuring a geolocation chat, twitter feed,
  //     and more. Utilized: Node, Socket.io, MUI, Redux, Firebase
  //   </p>
  // </div>
  //   <div>
  //     <img alt="magic the gathering portfolio piece" src={mtg} />
  //     <p className="legend">
  //       <a
  //         rel="noopener noreferrer"
  //         target="_blank"
  //         href="https://inspiring-archimedes-3b4ff0.netlify.app/"
  //       >
  //         Magic the Gathering booster sim
  //       </a>
  //       : Personal project utilizing react-redux and design principles to
  //       simulate booster pack openings of various trading card sets.
  //     </p>
  //   </div>
  //   <div>
  //     <img alt="gigapet project" src={gigapet} />
  //     <p className="legend">
  //       <a
  //         rel="noopener noreferrer"
  //         target="_blank"
  //         href="https://kkslider2130.github.io/Gigapet-Marketing-proto/#"
  //       >
  //         Gigapet
  //       </a>
  //       : A virtual pet app for kids. Keeps track of meals for kids by feeding
  //       the same meal virtually to digital pets. Utilized SERN stack with redux
  //     </p>
  //   </div>

  //   <div>
  //     <img alt="" src={potd} />
  //     <p className="legend">
  //       <a
  //         rel="noopener noreferrer"
  //         target="_blank"
  //         href="https://nasa-potd-react-project.netlify.app/"
  //       >
  //         Nasa Photo of the Day
  //       </a>
  //       : simple react app which displays a photo of the day taken by Nasa,
  //       features a calendar to backtrack and real time updating{" "}
  //     </p>
  //   </div>
  //   <div>
  //     <img alt="" src={blog} />
  //     <p className="legend">
  //       <a
  //         rel="noopener noreferrer"
  //         target="_blank"
  //         href="https://agile-shore-94352.herokuapp.com/"
  //       >
  //         Blog
  //       </a>
  //       : simple blog rendered server side using just Node/Express/EJS
  //     </p>
  //   </div>
  //   <div>
  //     <img alt="" src={portfo} />
  //     <p className="legend">
  //       <a
  //         rel="noopener noreferrer"
  //         target="_blank"
  //         href="https://kkslider2130.github.io/"
  //       >
  //         Portfolioception
  //       </a>
  //       : My first ever portfolio crammed with fundementals projects, essential
  //       for looking back on with embarrassment.
  //     </p>
  //   </div>
  //   <div>
  //     <img alt="" src={rm} />
  //     <p className="legend">
  //       <a
  //         rel="noopener noreferrer"
  //         target="_blank"
  //         href="https://rick-and-morty-fansite.now.sh/"
  //       >
  //         Rick and Morty challenge
  //       </a>
  //       : A timed react router challenge of building a functional fan site using
  //       the Rick and Morty API.
  //     </p>
  //   </div>
  // </Carousel>
);
