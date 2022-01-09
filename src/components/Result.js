import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Iframes from "./Ifames";
import tick from '../tick.png'
import cross from '../cross.png'

function Result(props) {
  return (
    <Container fluid='md'>
      <div>
        <Badge bg="dark">Notable words: </Badge>
        {props.keyword.map((word, index) => {
          return (

              <Badge pill bg="light" key={index}>{word}</Badge>

          )
        })}
      </div>
      <hr/>
      <Row className="justify-content-md-center">
        <Col xs={2} sm={2} md={2}>
          <img src={tick} style={{ height: "40%", width: "20%" }} alt="tick"/>
          <p>Reliable: {props.real}%</p>
        </Col>
        <Col xs={2} sm={2} md={2}>
          <img src={cross} style={{ height: "40%", width: "20%" }} alt="cross"/>
          <p>Unreliable: {props.fake}%</p>
        </Col>
      </Row>
      <Iframes src={props.url} />
    </Container>
  );
}

export default Result;
