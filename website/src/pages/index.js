import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <div className="description">Learn web development without the prohibitive costs and commitments of a boot camp.</div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          Each Class Is
        </Col>
        <Col xs={12} md={9}>
          Boxes
        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          About The Classes
        </Col>
        <Col xs={12} md={9}>
          Compared to boot camps which are extremely cost prohibitive and high commitment, 
costing tens of thousands of dollars over the course of a dozen weeks.
We teach the same material for magnitudes less because we are not profit driven, 
we just love to teach. We make enough to cover the 
cost of renting a space and for the time of our instructors.
Don’t believe us? Try your first class for 25% off.
        <Button>Sign up for a class</Button>
        </Col>
      </Row>
    </div>

    <div class="content-container">
      <div>Keep in Touch</div>
      <Button>Email List</Button>
      <Button>Discord</Button>
    </div>

  </Layout>
)

export default IndexPage
