import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import "./class-card.css"

const ClassCard = ({ date, price, spots, description }) => (
  <div className="class-card">
    <Row>
      <Col xs={12} sm={9}>
        <div className="class-card-title">Introduction to HTML/CSS/JS</div>
        <div className="class-card-date">{date}</div>
        <div className="class-card-price">{price}</div>
        <div className="class-card-spots">{spots}</div>
        <div className="class-card-description">{description}</div>
      </Col>

      <Col xs={12} sm={3} className="class-card-button-container">
        <Button size="sm" variant="outline-success">Choose</Button>
      </Col>
    </Row>

  </div>
)

export default ClassCard
