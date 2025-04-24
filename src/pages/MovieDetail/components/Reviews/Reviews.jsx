import React from "react";
import ReviewBox from "./ReviewBox/ReviewBox";
import { Container } from "react-bootstrap";

const Reviews = () => {
  return (
    <Container>
      <h2>Reviews</h2>
      <ReviewBox />
    </Container>
  );
};

export default Reviews;
