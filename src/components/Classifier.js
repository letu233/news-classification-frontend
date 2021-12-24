import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Axios from "axios";
import Result from './Result'


function Classifier() {
  const url = "http://127.0.0.1:5000/";
  const [link, setLink] = useState("");

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

  return (
    <Container>
      <Form onSubmit={(e) => submit(e)}>
        <Form.Group className="mb-3" controlId="link">
          <Form.Label>Link to Newspaper</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Form.Text className="text-muted">
            Enter link you want to check
          </Form.Text>
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      <hr></hr>
      <div>{res.answer === '1' ? <Result real={res.real} fake={res.fake} url={res.url}/> : <h3></h3>   
      }</div>

    </Container>
  );
}
//https://edition.cnn.com/2021/12/09/health/covid-booster-adolescents-fda-authorization/index.html - fake
//https://abcnews.go.com/Health/tale-yorks-covid-19-hospitalization-rate-surging-upstate/story?id=81625675 - real

export default Classifier;
