import React, { useState, useEffect } from "react";
import profilePic from "../img/IMG_3528.PNG";
import { Route, Link, useHistory } from "react-router-dom";
import Modal from "react-modal";
import FrontFooter from "./FrontFooter";
import PortfolioCard from "./PortfolioCard";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "rgb(58, 58, 58)",
    borderRadius: "8px",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.37)",
  },
};

export default function Usercard() {
  let subtitle;

  const history = useHistory();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (history.location.pathname.includes("works")) {
      setFlipped(true);
    }
  }, [history]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "white";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //////
  return (
    <div className={!flipped ? "user-card-body" : "user-card-body flip"}>
      <div className="front">
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
          >
            <div className="modal-header">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Contact Me</h2>
              <button onClick={closeModal}>
                <i class="fas fa-times"></i>
              </button>
            </div>

            <div className="contact-inputs">
              <form action="https://formspree.io/mnqpoygn" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" />
                <label htmlFor="replyTo">Email</label>

                <input type="text" name="_replyto" placeholder="Email" />
                <label htmlFor="subject">Subject</label>

                <input type="text" name="subject" placeholder="Subject" />
                <label htmlFor="message">Info</label>

                <textarea
                  className="text-area"
                  name="message"
                  placeholder="Message"
                  rows="6"
                ></textarea>
                <input className="send-btn" type="submit" value="Send" />
              </form>
            </div>
          </Modal>
        </div>
        <div className="avatar-con">
          <img className="avatar" src={profilePic} alt="avatar" />
          <div className="card-content">
            <h2 className="name">Shun Chiang</h2>
            <p className="sub">Web/UI developer</p>
            <h3 className="description">
              SERN stack web developer with a passion for creative problem
              solving and a heart for design.{" "}
            </h3>
            <div className="bg"> </div>
            <Link className="portfolioBtnDiv" exact to="/works">
              <div
                className="btn btn--swap"
                onClick={() => {
                  document
                    .querySelector(".user-card-body")
                    .classList.toggle("flip");
                  document.querySelector(".App").classList.toggle("newBg");
                }}
              >
                Portfolio
              </div>
            </Link>
          </div>
        </div>
        <FrontFooter openModal={openModal} />
      </div>
      <Route exact path="/works">
        <PortfolioCard />
      </Route>
    </div>
  );
}
