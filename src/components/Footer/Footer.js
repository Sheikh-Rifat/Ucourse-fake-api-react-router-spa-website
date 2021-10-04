import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-dark text-white mt-5 p-3">
      <Container>
        <Row>
          <Col md={6}>
            <h4>Contact Us</h4>
            <div>
              <p>Address : 57 B.C.C. Road</p>
              <p>Website : Ucourse.com</p>
              <p>Mail : contact@Ucourse.co</p>
            </div>
          </Col>
          <Col md={6}>
            <h4>Terms</h4>
            <h4>Privacy policy</h4>
            <h4>Sitemap</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
