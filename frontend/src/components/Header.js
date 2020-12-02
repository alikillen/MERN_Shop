import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap"
import {Navbar, Nav, Container } from "react-bootstrap"

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to ="/">
          <Navbar.Brand> MERN Shop</Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            
            <LinkContainer to ="/cart">
            <Nav.Link><i className="fas fa-shopping-cart"></i>
              Cart</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to ="/login">
              <Nav.Link><i className="fas fa-user"></i>
              Login</Nav.Link>
            </LinkContainer>
              
            </Nav>         
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

// using class component here not arrow func w variable