//import React from "react";
import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

class Login extends Component {

 render() {
  return (
   <Container fluid>
    <Row>
     <Col size="md-12">
      <Jumbotron>
       <h2>Sign Up Form</h2>
       <form class="login">

        <div class="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input type="email" class="form-control" id="email-input" placeholder="Email"></input>
        </div>

        <div class="form-group">
         <label for="exampleInputPassword1">Password</label>
         <input type="password" class="form-control" id="password-input" placeholder="Password"></input>
        </div>

        <button type="submit" class="btn btn-default">Login</button>

       </form>

       <br />
      <p>Already have an Account? Log in <a href="/login">here</a></p>
      </Jumbotron>
     </Col>
    </Row>
   </Container>
  );
 }
};

 export default Login;
