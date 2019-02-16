import React, { Component } from "react";
import Jumbotron from "../comp/Jumbotron";
import { Col, Row, Container } from "../comp/Grid";
import { Input, FormBtn } from "../comp/Form";

import API from "../utils/API";

class Login extends Component {
 state = {
  email: "",
  password: "",
  redirect: false,
  route: "/login"
 };

 handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
   [name]: value
  });
 };

 handleFormSubmit = event => {
  event.preventDefault();
  console.log("Submitting Form ----------------------------------------")
  if (this.state.email && this.state.password) {
   console.log(this.state)
   console.log("End State ----------------------------------------")

   API.login(this.state)

   .then((newPage) => {
     console.log(newPage.data)
     console.log("Made the API Call")
     this.props.history.push('/trello', { some: 'state' })
     this.setState({
      redirect: true,
      route: newPage.data // Should be /trello
     })
    })
   
    //.catch(err => console.log(err));
    .catch((err) => {
     alert("Please sign-up")
     this.props.history.push('/signup', { some: 'state' })
     this.setState({
      redirect: true,
      route: "/signup"
     })
    });
   }};
     //  res.redirect(302, "/employees/" + employee.id);

 render() {
  return (

   <Container fluid>
    <Row>
     <Col size="md-12">
      <Jumbotron>
       <h1>Login Form</h1>

       <form>
        <Input
         value={this.state.email}
         onChange={this.handleInputChange}
         name="email"
         placeholder="Email (required)"
        />
        <Input
         value={this.state.password}
         onChange={this.handleInputChange}
         name="password"
         placeholder="Password (required)"
        />
        <FormBtn
         disabled={!(this.state.email && this.state.password)}
         onClick={this.handleFormSubmit}
        >
         Login
        </FormBtn>
       </form>
       <br />
       <p>Not a member? Sign up <a href="/signup">here</a></p>
      </Jumbotron>
     </Col>
    </Row>
   </Container>
  );
 }

};

export default Login;
