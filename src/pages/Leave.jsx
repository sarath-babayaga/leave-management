import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Leave.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Leave() {
  return (
    <div className="form">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Leave Type
          </Form.Label>
          <Col sm={10}>
            <Dropdown />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Start Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" placeholder="Select a date" id="input" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            End Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" placeholder="Select a date" id="input" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Comments
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" id="input-one" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
          <Link to="/">
            <Button variant="outline-success ms-5" size="lg">
              Save
            </Button>
            </Link>
            <Link to="/">
              <Button variant="outline-success ms-3" size="lg">
                Cancel
              </Button>
            </Link>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Leave;
