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
          <p>We move fast, our teaching philosophy is that if you're comfortable with the material presented in class, then we are wasting your time. So in class we'll push you out of your comfort zone and present you with challenging and valuable material. We'll throw you into the deep end and help you out. Most classes will have a follow along portion so bring your laptops with a coding focused text editor installed like Atom, VSCode, or Vim for the brave and reckless. We will start exactly at 8, we have a lot of material to cover and will not be spending class time helping you get your environment setup. See below for how to prepare for class.</p>

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
          <p>Come 10 minutes early to get settled. We will start exactly at 8.</p>
          <p>Bring a laptop with the latest firefox/chrome and a code editor, atom. We will be doing coding in class and will not have time to help you with setup related issues.</p>
          <p>Be ready to take notes in class</p>
          <p>No video or audio recordings of the class</p>
        </Col>
      </Row>
    </div>

  </Layout>
  )

  export default ClassesPage
