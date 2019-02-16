import React, { Component } from "react";
import Jumbotron from "../comp/Jumbotron";
import { Col, Row, Container } from "../comp/Grid";

class Top extends Component {
 render() {
  return (
   <Container fluid>
    <Row>
     <Col size="md-12">
      <Jumbotron>
       <h1>Welcome!</h1>
      </Jumbotron>
     </Col>
    </Row>
   </Container>
  );
 }
};

 export default Top;
