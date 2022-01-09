import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import axios from "axios";
import Axios from "axios";
import SourceResult from "./SourceResult";

function Source() {
  const url = "http://127.0.0.1:5000/get_source";
  const url_source = "http://127.0.0.1:5000/source";

  const [sources, setSources] = useState({ result: [] });
  const [prediction, setPrediction] = useState([])

  useEffect(() => {
    const fetchSource = async () => {
      const { data } = await axios(url);

      setSources({ result: data });
      console.log(data);
    };
    fetchSource();
  }, [setSources]);

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(row.name)
      Axios.get(url_source, {
        params: { choice: row.name },
      })
        .then((res) => {
          console.log(res.data)
          return res.data
        })
        .then((json) => setPrediction(json));
    }
  };

  const columns = [
    {
      dataField: "name",
      text: "source",
      sort: true,
      //formatter: (cell, row) => <a href={cell}> {cell} </a>,
      headerAlign: "center",
    },
    {
      dataField: "fake_prob",
      text: "Unreliable(%)",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
      headerAlign: "center",
      align: "center",
      style: { color: 'red' },
    },
    {
      dataField: "real_prob",
      text: "Reliable(%)",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
      headerAlign: "center",
      align: "center",
      style: { color: 'green' },
    },
  ];

  return (
    <Container fluid>
      <p>Click a row to see details from that source</p>
      <BootstrapTable
        bordered
        hover
        bootstrap4
        keyField="name"
        data={sources.result}
        columns={columns}
        rowEvents={ rowEvents }
        
      />
      <SourceResult data={prediction} />
    </Container>
  );
}

export default Source
