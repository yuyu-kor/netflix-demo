import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MovieDetailInfo = ({ movie }) => {
  return (
    <Container>
      <Row>
        <Col lg={6} xs={12}>
          <div
            style={{
              backgroundImage: `url(https://media.themoviedb.org/t/p/w780${movie?.poster_path})`,
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
            }}
          ></div>
        </Col>
        <Col lg={6} xs={12}></Col>
      </Row>
    </Container>
  );
};

export default MovieDetailInfo;
