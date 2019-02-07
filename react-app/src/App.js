import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Trello from './comp/Card/trello';
import Login from "./comp/pages/Login";
//import Wrapper from "./comp/Wrapper";
//import Title from "./comp/Title";
import NoMatch from "./comp/Jumbotron";
import Nav from "./comp/Nav";


//class App extends Component {
// render() {
//  return (
//   <Wrapper>
//   <Nav />
//    <Trello />
//    <NoMatch />
//   </Wrapper>
//  );
//}

function App() {
 return (
 <Router>
  <div>
   <Nav />
   <Switch>
    <Route exact path="/" component={Trello} />
    <Route exact path="/login" component={Login} />
    <Route component={NoMatch} />
   </Switch>
  </div>
 </Router>
 );
}


export default App;
