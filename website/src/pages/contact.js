import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const FAQPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          <div className="content-title">Have questions?</div>
        </Col>
        <Col xs={12} md={9}>
          The quickest way get in touch is to send an email to: contact@erict.dev and we'll respond within a few hours. Another great way to ask a specific question about the course is to join our Discord chat: ________________.
        </Col>
      </Row>
    </div>
    <div class="content-container">
      <Row>
        <Col xs={12} md={3}>
          <div className="content-title">Frequently Asked Questions</div>
        </Col>
        <Col xs={12} md={9}>

          <div><strong>When are new classes added to the schedule?</strong></div>
          <div>About once a month, depending on the venue reservation avaliability. But we will announce new upcoming classes on our email list. You can also check back here once a month to check out new upcoming classes.</div>

          <br />

          <div><strong>The class I want is full, what do I do?</strong></div>
          <div>Sorry, we limit class sizes in order to provide the best learning experiences for our students. We cycle some of our classes every month so check back or join our email list to be notified of new upcoming classes.</div>

          <br />

          <div><strong>I have no experience with coding at all, can I become a strong web dev?</strong></div>
          <div>Yes. Although it's important to have realistic expectations. It will take work, you will be frustrated especially early on, and it will take longer than you would like. However if you put in the time and effort to review the material and tinker on your own, you will be an amazing web developer.</div>
          <br />

          <div><strong>[TODO] When are new classes added to the schedule?</strong></div>
          <div>About once a month, depending on the venue reservation avaliability. But we will announce new upcoming classes on our email list. You can also check back here once a month to check out new upcoming classes.</div>

          <br />

          <div><strong>[TODO] When are new classes added to the schedule?</strong></div>
          <div>About once a month, depending on the venue reservation avaliability. But we will announce new upcoming classes on our email list. You can also check back here once a month to check out new upcoming classes.</div>

          <br />

        </Col>
      </Row>
    </div>
  </Layout>
)

export default FAQPage
