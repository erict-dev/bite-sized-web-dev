import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import BoxCard from "../components/box-card"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import OutlineIcon from '../images/outline-icon.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <div className="description">Learn web development without the prohibitive costs and commitments of a boot camp.</div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          <div className="content-title">Each Class Is</div>
        </Col>
        <Col xs={12} md={9}>
          <div className="box-card-container">
            <BoxCard icon={OutlineIcon} title="Taught in person" description="By a software engineer and UI/UX designer with years of experience at Blizzard, Facebook, and Apple."/>
            <BoxCard icon={OutlineIcon} title="1 hour 30 minutes" description="Packed with valuable knowledge. We dive right into the material and focus on making the most out of class."/>
            <BoxCard icon={OutlineIcon} title="Limited class size" description="Small class sizes allow for a better teaching experience and is more effective and valuable for students."/>
            <BoxCard icon={OutlineIcon} title="Affordable" description="At $50 per class we are much more affordable compared to boot camps. We teach more for your time and money."/>
          </div>
        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          What you'll learn
        </Col>
        <Col xs={12} md={9}>
          <p>Compared to boot camps which are extremely cost prohibitive and high commitment, costing tens of thousands of dollars over the course of a dozen weeks.  We teach the same material for magnitudes less because we are not profit driven, we just love to teach. We make enough to cover the cost of renting a space and for the time of our instructors.</p>
        <Button>Upcoming classes</Button>
        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          Your instructor
        </Col>
        <Col xs={12} md={9}>

          <b>Eric</b>
          <p>Compared to boot camps which are extremely cost prohibitive and high commitment, costing tens of thousands of dollars over the course of a dozen weeks.  We teach the same material for magnitudes less because we are not profit driven, we just love to teach. We make enough to cover the cost of renting a space and for the time of our instructors.</p>
        <Button>Contact</Button>
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
