import React, { Component } from 'react'
import {Container, Row, Col } from "react-bootstrap"

// testing small comment here for git

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Alison Killen 2020
            </Col>
          </Row>
        </Container>
      </footer>
      
    )
  }
}

// using class component here not arrow func w variable