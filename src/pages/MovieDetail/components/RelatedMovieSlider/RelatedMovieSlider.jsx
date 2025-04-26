import React from "react";
import { useMovieRecommendation } from "../../../../hooks/useMovieRecommendation";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const RelatedMovieSlider = () => {
  let { id } = useParams();
  const { data, isError, error } = useMovieRecommendation(id);
  console.log("sususu", data);

  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <Container>
      <MovieSlider
        title="Related Movies"
        movie={data.results || []}
        responsive={responsive}
      />
    </Container>
  );
};

export default RelatedMovieSlider;
