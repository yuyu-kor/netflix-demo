import React, { Suspense } from "react";
import MovieDetailInfo from "./components/MovieDetailInfo/MovieDetailInfo";
import RelatedMovieSlider from "./components/RelatedMovieSlider/RelatedMovieSlider";
import Reviews from "./components/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Alert } from "react-bootstrap";
import MovieDetailBanner from "./components/MovieDetailBanner/MovieDetailBanner";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

const MovieDetailPage = () => {
  let { id } = useParams();

  const { data, isError, error } = useMovieDetailQuery(id);
  console.log("data", data);

  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  // 만약 데이터가 없다면 로딩스피너가 돌아가게 해야 상세페이지 에러 안 뜸
  if (!data) return <LoadingSpinner />;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="d-flex flex-column justify-content-center">
        <MovieDetailBanner movie={data} />
        <MovieDetailInfo movie={data} />
        <Reviews />
        <RelatedMovieSlider />
      </div>
    </Suspense>
  );
};

export default MovieDetailPage;
