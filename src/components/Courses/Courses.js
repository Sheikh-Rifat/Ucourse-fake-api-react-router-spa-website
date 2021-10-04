import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Courses = (props) => {
  // destructuring props data
  const { id, image, courseName, author, description, price, access } =
    props.course;
  return (
    // creating cards according to data
    <Col key={id}>
      <Card className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <p className="title">
            <strong>{author}</strong>
          </p>
          <p>Course Access : {access}</p>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <strong> Course Value : ${price}</strong>
          </Card.Text>

          {/* enroll button */}
          <Button variant="outline-primary">Enroll now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Courses;
