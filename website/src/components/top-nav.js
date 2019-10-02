import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import "./top-nav.css"

const TopNav = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="sm" bg="transparent" variant="light">
    <Navbar.Brand href="/"><strong>Bite Sized</strong> 🍫 Web Dev</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/classes">Classes</Nav.Link>
        <Nav.Link eventKey={2} href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default TopNav
