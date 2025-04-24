import React from "react";
import MovieDetailInfo from "./components/MovieDetailInfo/MovieDetailInfo";
import RelatedMovieSlider from "./components/RelatedMovieSlider/RelatedMovieSlider";
import Reviews from "./components/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Alert } from "react-bootstrap";
import MovieDetailBanner from "./components/MovieDetailBanner/MovieDetailBanner";

const MovieDetailPage = () => {
  let { id } = useParams();

  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  console.log("data", data);

  if (isLoading) return <h1>isLoading...</h1>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <div className="d-flex flex-column justify-content-center">
      <MovieDetailBanner movie={data} />
      <MovieDetailInfo movie={data} />
      <Reviews />
      <RelatedMovieSlider />
    </div>
  );
};

export default MovieDetailPage;
