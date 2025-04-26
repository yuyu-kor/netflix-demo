import React from "react";
import { Alert } from "bootstrap";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const TopRatedMovieSlide = () => {
  const { data, isError, error } = useTopRatedMoviesQuery();

  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <MovieSlider
      title="Top Rated Movies"
      movie={data.results}
      responsive={responsive}
    />
  );
};

export default TopRatedMovieSlide;
