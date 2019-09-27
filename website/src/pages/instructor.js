import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          Meet Your Instructor
        </Col>
        <Col xs={12} md={9}>

          <b>Eric</b>
          <p>Compared to boot camps which are extremely cost prohibitive and high commitment,
costing tens of thousands of dollars over the course of a dozen weeks.
We teach the same material for magnitudes less because we are not profit driven, 
we just love to teach. We make enough to cover the 
cost of renting a space and for the time of our instructors.
Don’t believe us? Try your first class for 25% off.</p>
        <Button>Contact</Button>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default SecondPage
