import React from "react";
import "./styles/App.scss";
import { Route } from "react-router-dom";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <UserCard />
      </Route>
    </div>
  );
}

export default App;
