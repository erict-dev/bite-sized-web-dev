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
import ProfileImg from '../images/profile.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <div className="description">Learn web development and UI/UX design without the prohibitive costs and commitments of a boot camp.</div>

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
          <div className="content-title">What you'll learn</div>
        </Col>
        <Col xs={12} md={9}>
          <p>Latest web dev tech stack, modern html/css/js, sort through the noise of web dev, the field moves fast, we'll get to the unchanging fundamentals, react, how the web works, ui/ux design trends and tools.</p>
          <Link to="/classes"><Button size="sm" variant="outline-primary">See upcoming classes</Button></Link>
        </Col>
      </Row>
    </div>

    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          <div className="content-title">Your instructor</div>
        </Col>
        <Col xs={12} md={9}>

          <div className="profile-img" style={{ backgroundImage: `url(${ProfileImg})`}}></div>

          <b>Eric</b>
          <p>magna cum laude ui/ux at UCI, ui/ux research associate for facebook, terrestrial and digital marketing at Apple, 4 years of full stack web software engineering experience at Blizzard, web design and development agency owner/founder/director. passion for teaching</p>
        <Button size="sm" variant="outline-primary">Contact</Button>
        </Col>
      </Row>
    </div>

  </Layout>
)

export default IndexPage
