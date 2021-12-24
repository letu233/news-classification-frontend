import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";
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
      text: "Fake(%)",
      sort: true,
      headerStyle: () => {
        return {width: "10%"}
      },
      headerAlign: 'center',
      align: 'center'

    },
    {
      dataField: "real",
      text: "Real(%)",
      sort: true,
      headerStyle: () => {
        return {width: "10%"}
      },
      headerAlign: 'center',
      align: 'center'
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
