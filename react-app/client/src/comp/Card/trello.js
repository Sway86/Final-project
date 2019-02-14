import React from 'react'
import { Board } from 'react-trello'
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

function Trello() {
 function onDataChange() {
  console.log("I'm a changing...")
 }

 return (

  <Container fluid>
   <Row>
    <Col size="md-12">
     <Jumbotron>

      <Board
       data={{
        lanes: [
         {
          id: 'Card1',
          title: 'Waiting',
          cards: [
           {
            id: 'Card1', title: 'Name: John Doe', description: 'Address: 901 Interntional Parkway LAke Mary', label: '30 mins'
           },
          ]

         },
         {
          id: 'In transport',
          title: 'In transposrt',
          label: '10/20'

         },
         {
          id: 'Done',
          title: 'Done',
          label: '0/0'

         },

        ]
       }}
       draggable
       onDataChange={onDataChange}
      />
     </Jumbotron>
    </Col>
   </Row>
   </Container>
   )
}

export default Trello