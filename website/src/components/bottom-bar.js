import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

import "./bottom-bar.css"

const BottomBar = ({ siteTitle }) => (
  <Navbar className="bottom-bar" fixed="bottom" variant="light">
    <Navbar.Toggle />
    <Navbar.Collapse className="bottom-bar-inner">
      <Navbar.Text>
        <div>Bite Sized 🍫</div>
        <div>Web Development Classes</div>
      </Navbar.Text>
      <Navbar.Text>
        From $50/person
        <Button size="sm">See class dates</Button>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
)

export default BottomBar
