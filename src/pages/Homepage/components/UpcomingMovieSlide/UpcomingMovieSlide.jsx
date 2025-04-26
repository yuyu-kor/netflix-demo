import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import { Alert } from "bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const UpcomingMovieSlide = () => {
  const { data, isError, error } = useUpcomingMoviesQuery();

  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <MovieSlider
      title="Upcoming movies"
      movie={data.results}
      responsive={responsive}
    />
  );
};

export default UpcomingMovieSlide;
