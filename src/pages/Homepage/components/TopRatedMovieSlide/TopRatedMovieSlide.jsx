import React from "react";
import { Alert } from "bootstrap";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) return <h1>isLoading...</h1>;
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
