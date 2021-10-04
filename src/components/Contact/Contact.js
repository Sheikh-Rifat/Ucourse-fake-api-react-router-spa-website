import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ContactImg from "../../images/undraw_contact_us_15o2.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      {/* adding header */}
      <Header />

      {/* creating contact section */}
      <h1 className="title m-5 p-5 bg-dark">Contact Us</h1>
      <Container className=" mb-5 pb-5">
        <Row>
          <Col md={6}>
            <img src={ContactImg} alt="contact-img" className="img-fluid" />
          </Col>
          <Col md={6} className="mt-5 pt-5">
            <h1>Address : 57 B.C.C. Road</h1>
            <h1>Website : Ucourse.com</h1>
            <h1>Mail : contact@Ucourse.co</h1>
          </Col>
        </Row>
      </Container>

      {/* adding footer */}
      <Footer />
    </div>
  );
};

export default Contact;
