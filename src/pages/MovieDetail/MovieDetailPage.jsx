import React from "react";
import Banner from "../Homepage/components/Banner/Banner";
import MovieDetailInfo from "./components/MovieDetailInfo/MovieDetailInfo";
import RelatedMovieSlider from "./components/RelatedMovieSlider/RelatedMovieSlider";
import Reviews from "./components/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Alert } from "react-bootstrap";

const MovieDetailPage = () => {
  let { id } = useParams();

  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  console.log("data", data);

  if (isLoading) return <h1>isLoading...</h1>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <div>
      <Banner />
      <MovieDetailInfo movie={data} />
      <RelatedMovieSlider />
      <Reviews />
    </div>
  );
};

export default MovieDetailPage;
