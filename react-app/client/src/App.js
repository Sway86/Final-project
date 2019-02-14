import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Trello from './comp/Card/trello';
import Navbar from "./comp/Navbar";

import Top from "./pages/Top";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

function App() {
 return (
 <Router>
  <div>
  <Navbar />
   <Switch>
    <Route exact path="/" component={Top} />
    <Route exact path="/trello" component={Trello} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route component={NoMatch} />
   </Switch>
  </div>
 </Router>
 );
}


export default App;
