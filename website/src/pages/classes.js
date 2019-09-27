import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const ClassesPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          Upcoming Classes
        </Col>
        <Col xs={12} md={9}>

          <div>Class 1</div>
          <div>Class 2</div>
          <div>Class 3</div>
          <div>Class 4</div>

        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          Where you'll be
        </Col>
        <Col xs={12} md={9}>
          <div>Map</div>
        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          Keep these in mind
        </Col>
        <Col xs={12} md={9}>
          <div>Bring Laptop with firefox/chrome and a code editor, atom</div>
          <div>Come 10 minutes early to get settled. We will start right at 8.</div>
        </Col>
      </Row>
    </div>

  </Layout>
)

export default ClassesPage
