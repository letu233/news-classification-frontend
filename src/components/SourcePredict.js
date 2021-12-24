import React, { useState } from "react";
import Axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import SourceResult from "./SourceResult";

function SourcePredict() {
  const url = "http://127.0.0.1:5000/source";
  const options = [
    {
      id: 1,
      source: "Abcnews",
      value: "1",
    },
    {
      id: 2,
      source: "CNBC",
      value: "2",
    },
    {
      id: 3,
      source: "Foxnews",
      value: "3",
    },
    {
      id: 4,
      source: "The Guardian",
      value: "4",
    },
    {
      id: 5,
      source: "Reuters",
      value: "5",
    },
  ];

  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function submit(e) {
    e.preventDefault();
    Axios.get(url, {
      params: { choice: selectedOption.value },
    })
      .then((res) => {
        console.log(res.data)
        return res.data
      })
      .then((json) => setData(json));
  }

  return (
    <div>
      <Container className="mb-3">
        <h2>Select source article</h2>
        <Form onSubmit={(e) => submit(e)}>
          <Form.Select
            className="mb-1"
            option={selectedOption}
            onChange={(e) =>
              setSelectedOption(options.find((val) => val.id == e.target.value))
            }
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.source}
              </option>
            ))}
          </Form.Select>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <SourceResult data={data} />
    </div>
  );
}

export default SourcePredict;
