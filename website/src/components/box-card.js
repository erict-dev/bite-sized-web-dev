import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./box-card.css"

const BoxCard = ({ icon, title, description }) => (
  <div className="box-card">
    <div className="box-card-icon" style={{ backgroundImage: `url(${icon})` }}/>
    <div className="box-card-title">{title}</div>
    <div className="box-card-description">{description}</div>
  </div>
)

export default BoxCard
