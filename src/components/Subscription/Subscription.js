import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewsImg from "../../images/undraw_Newsletter_re_wrob.png";

const Subscription = () => {
  return (
    <div>
      <Header />
      <h1 className="title m-5 p-5 bg-dark">Subscribe To Our Newsletter</h1>
      <Container className=" mb-5 pb-5">
        <Row>
          <Col md={6} className="mt-5 pt-5">
            <p>
              <strong>Subscribe to our newsletter now!</strong>
            </p>
            <p>
              Join our big community to get discounts, promotional offers and
              many more. Pay only $2.99 and join our newsletter
            </p>
          </Col>
          <Col md={6}>
            <img src={NewsImg} alt="contact-img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Subscription;
