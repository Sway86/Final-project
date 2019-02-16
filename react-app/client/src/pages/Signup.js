import React, { Component } from "react";
import Jumbotron from "../comp/Jumbotron";
import { Col, Row, Container } from "../comp/Grid";
import { Input, FormBtn } from "../comp/Form";

import API from "../utils/API";

class Signup extends Component {
 state = {
  email: "",
  password: ""
 };

 // componentDidMount() {
 //  this.loadUsers();
 // }

 loadUsers = () => {
  API.getUsers()
   .then(res => {
    console.log(res)
    this.setState({ Users: res.data, email: "", password: "" })
   }
    // this.setState({ Users: res.data, email: "", password: "" })
   )
   .catch(err => console.log(err));
 };

 // deleteUser = id => {
 //  API.deleteUser(id)
 //   .then(res => this.loadUsers())
 //   .catch(err => console.log(err));
 // };

 handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
   [name]: value
  });
 };

 handleFormSubmit = event => {
  event.preventDefault();

  if (this.state.email && this.state.password) {
   API.saveUser({
    email: this.state.email,
    password: this.state.password
   })
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }
 };

 // signUpUser = function (email, password) {
 //  $.post("/api/signup", {
 //   email: email,
 //   password: password
 //  })
 //  .then(function (data) {
 //   window.location.replace(data);
 //   // If there's an error, handle it by throwing up a bootstrap alert
 //  })
 //  .catch(err => console.log(err));
 // }

 render() {
  return (

   <Container fluid>
    <Row>
     <Col size="md-12">
      <Jumbotron>
       <h1>Sign Up Form</h1>

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
         Sign Up
        </FormBtn>
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

export default Signup;
