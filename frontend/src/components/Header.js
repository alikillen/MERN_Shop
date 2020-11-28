import React, { Component } from 'react'
import {Navbar, Nav, Container } from "react-bootstrap"

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">MERN Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>
              Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>
              Login</Nav.Link>
            </Nav>         
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

// using class component here not arrow func w variable