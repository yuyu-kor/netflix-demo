import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

const MovieDetailInfo = ({ movie }) => {
  return (
    <Container>
      <Row className="mb-5">
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
        <Col lg={6} xs={12}>
          <div>
            {movie.genres?.map((genre) => (
              <Badge key={genre.id} className="genre-badge me-1" bg="danger">
                {genre.name}
              </Badge>
            ))}
          </div>
          <h2>{movie?.title}</h2>
          <p>
            {movie?.release_date} <span className="mx-2">|</span>{" "}
            {movie?.runtime}분
          </p>
          <p>⭐{Math.round(movie?.vote_average * 10) / 10}</p>
          <p>{movie?.overview}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailInfo;
