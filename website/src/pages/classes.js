import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ClassCard from "../components/class-card"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const ClassesPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          <div className="content-title">Upcoming Classes</div>
        </Col>
        <Col xs={12} md={9}>

          <ClassCard date="Wed, Nov 6th at 8pm" price="$50 per person" spots="12 of 20 spots left" description="Please bring a lightweight sleeping bag for temperatures that is for 60 degree fahrenheit. Try to bring a rehuse water bottle, Headlamp, shoes in good conditions, and personal Snacks"/>

        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          <div className="content-title">What to expect</div>
        </Col>
        <Col xs={12} md={9}>
          <p>Compared to boot camps which are extremely cost prohibitive and high commitment, costing tens of thousands of dollars over the course of a dozen weeks.  We teach the same material for magnitudes less because we are not profit driven, we just love to teach. We make enough to cover the cost of renting a space and for the time of our instructors.</p>

        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          <div className="content-title">Where you'll be</div>
        </Col>
        <Col xs={12} md={9}>
          <p>Quail Hill Community Center, Multipurpose Room B.</p>
        </Col>

        <br style={{ margin: 10 }}/>

        <Col xs={12}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13285.028981285246!2d-117.783598!3d33.6504958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb91674ba6deed250!2sQuail%20Hill%20Community%20Center!5e0!3m2!1sen!2sus!4v1569953748439!5m2!1sen!2sus" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          <div className="content-title">Keep these in mind</div>
        </Col>
        <Col xs={12} md={9}>
          <p>Bring Laptop with firefox/chrome and a code editor, atom</p>
          <p>Come 10 minutes early to get settled. We will start right at 8.</p>
        </Col>
      </Row>
    </div>

  </Layout>
  )

  export default ClassesPage
