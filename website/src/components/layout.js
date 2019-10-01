/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Button from 'react-bootstrap/Button';

import Header from "./header"
import TopNav from "./top-nav"
import BottomBar from "./bottom-bar"
import "./layout.css"
import "../styles/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="bottom-bar-spacer">
          <div>
            <Button className="contact-btn" size="sm" variant="outline-dark">Subscribe to our email list</Button>
            <Button className="contact-btn" size="sm" variant="outline-dark">Join our discord chat</Button>
          </div>
          <div className="footer-small">© {new Date().getFullYear()}, Bite Sized Web Dev</div>
        </footer>
        <BottomBar />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
