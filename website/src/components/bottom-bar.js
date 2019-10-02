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
        <div>🍫 Web Development Classes</div>
      </Navbar.Text>
      <Navbar.Text className="bottom-bar-flex-wrap bottom-bar-right-content">
        <span>From $50/person</span>
        <Link to="/classes"><Button size="sm" variant="success" style={{ marginLeft: 10 }}>See class dates</Button></Link>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
)

export default BottomBar
