import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
