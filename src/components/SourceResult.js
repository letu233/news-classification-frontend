import React from "react";
import { Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function SourceResult(props) {
  const columns = [
    {
      dataField: "url",
      text: "URL",
      sort: true,
      formatter: (cell, row) => <a href={cell}> {cell} </a>,
      headerAlign: 'center'
    },
    {
      dataField: "fake",
      text: "Unreliable(%)",
      sort: true,
      headerStyle: () => {
        return {width: "15%"}
      },
      headerAlign: 'center',
      align: 'center',
      style: { color: 'red' },

    },
    {
      dataField: "real",
      text: "Reliable(%)",
      sort: true,
      headerStyle: () => {
        return {width: "15%"}
      },
      headerAlign: 'center',
      align: 'center',
      style: { color: 'green' },
    },
  ];

  return (
    <Container fluid>
      <BootstrapTable bordered hover
        bootstrap4
        keyField="url"
        data={props.data}
        columns={columns}
        pagination={paginationFactory()}
      />
    </Container>
  );
}

export default SourceResult;
