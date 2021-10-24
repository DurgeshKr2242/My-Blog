import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Feed from "./Components/Feed/Feed";
import NewPost from "./Components/NewPost/NewPost";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Feed />
          </Route>
          <Route path="/new">
            <NewPost />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
