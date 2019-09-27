import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

import "./bottom-bar.css"

const BottomBar = ({ siteTitle }) => (
  <Navbar fixed="bottom" variant="light">
    <Navbar.Brand href="#home">Sign up for a class</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <Button>Sign up for a class</Button>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
)

export default BottomBar
