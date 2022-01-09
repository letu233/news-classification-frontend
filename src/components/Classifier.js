import React, { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import Axios from "axios";
import Result from './Result'
import validator from 'validator'


function Classifier() {
  const url = "http://127.0.0.1:5000/";
  const [link, setLink] = useState("");
  const [val, setVal] = useState('false');
  const [res, setRes] = useState([]);

  function submit(e) {
    e.preventDefault();
    Axios.get(url, {
      params: { link: link },
    }).then((res) => {
      setRes(res.data);
      console.log(res.data);
    });
  }

  const validate = (value) => {
    setLink(value)
    if (validator.isURL(value)) {
      setVal('true')
    } else {
      setVal('false')
    }
  }

  return (
    <Container>
      <Form onSubmit={(e) => submit(e)}>
        <Form.Group className="mb-3" controlId="link">
          <Form.Label>Link to Newspaper</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter link"
            value={link}
            onChange={(e) => validate(e.target.value)}
          />
          <Form.Text className="text-muted">
            Enter link you want to check
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit" disabled= {val !== 'true'}>
          Submit
        </Button>
      </Form>
      <hr></hr>
      <div>{res.answer === '1' ? <Result keyword={res.key} real={res.real} fake={res.fake} url={res.url}/> : res.answer ==='0'? 
      <Alert variant="warning">
        {res.result}
      </Alert> : <h3></h3>
      }</div>

    </Container>
  );
}
//https://edition.cnn.com/2021/12/09/health/covid-booster-adolescents-fda-authorization/index.html - fake
//https://abcnews.go.com/Health/tale-yorks-covid-19-hospitalization-rate-surging-upstate/story?id=81625675 - real

export default Classifier;
