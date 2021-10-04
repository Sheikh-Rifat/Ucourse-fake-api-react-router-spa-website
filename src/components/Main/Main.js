import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useCourses from "../../Hooks/useCourses";
import image from "../../images/undraw_Online_learning_re_qw08.png";
import Courses from "../Courses/Courses";
import "./Main.css";

const Main = () => {
  // calling data
  const [courses] = useCourses();
  return (
    <div>
      <Container>
        <Row>
          {/* hero section */}
          <Col md={4} className="modify">
            <h2 className=" pt-5">Modern Life </h2>
            <h1>Coach School</h1>

            <p>
              We understand the importance of approaching each work integrally
              and believe in the power of simple.
            </p>
          </Col>
          <Col md={8} className="mb-5">
            <img src={image} alt="img" className="img-fluid" />
          </Col>
        </Row>

        {/* service section */}
        <section className="service mt-5 mb-5">
          <div>
            <h1 className="title">Our Services</h1>
          </div>
          <div className="mt-4">
            <Row xs={1} md={2} className="g-4 mb-5">
              {/* mapping and slicing data to show minimal courses */}
              {courses.slice(0, 4).map((course) => (
                <Courses key={course.id} course={course}></Courses>
              ))}
            </Row>

            {/* link to services page */}
            <NavLink to={`/services`}>
              <Button variant="outline-success" size="lg">
                View all
              </Button>
            </NavLink>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Main;
