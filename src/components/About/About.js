import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import AboutImg from "../../images/undraw_About_me_re_82bv.png";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <Header />

      {/* creating about section */}
      <h1 className="title m-5 p-5 bg-dark">About</h1>
      <Container className=" mb-5 pb-5">
        <Row>
          <Col md={6}>
            <img src={AboutImg} alt="contact-img" className="img-fluid" />
          </Col>
          <Col md={6} className="mt-5 pt-5">
            <h1>We share knowledge with the world</h1>
            <h5>
              Changing learning for the better Whether you want to learn or to
              share what you know, you’ve come to the right place. As a global
              destination for online learning, we connect people through
              knowledge.
            </h5>
            <p>
              We help organizations of all types and sizes prepare for the path
              ahead — wherever it leads. Our curated collection of business and
              technical courses help companies, governments, and nonprofits go
              further by placing learning at the center of their strategies.
            </p>
          </Col>
        </Row>
      </Container>

      {/* adding footer */}
      <Footer />
    </div>
  );
};

export default About;
