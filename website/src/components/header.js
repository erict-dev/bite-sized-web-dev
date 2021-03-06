import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="main-title" style={{ marginBottom: '-8px' }}>Bite Sized 🍫</div>
    <div className="main-subtitle">Web Development & UI/UX Design Classes</div>
    <div className="main-caption">Located in Irvine, California</div>
    <hr style={{ marginBottom: 0 }}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
