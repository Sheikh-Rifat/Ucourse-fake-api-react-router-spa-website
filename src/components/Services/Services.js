import React from "react";
import { Container, Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Services.css";
const Services = () => {
  // calling data
  const [courses] = useCourses();
  return (
    <div>
      <Header />

      <h1 className="title m-5 p-5 bg-dark">Our Services</h1>
      <Container>
        <div className="mt-4 mb-5">
          <Row xs={1} md={3} className="g-4">
            {/* using and mapping data to show detailed and all courses list  */}
            {courses.map((course) => (
              <Courses key={course.id} course={course}></Courses>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
