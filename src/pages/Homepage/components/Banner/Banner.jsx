import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";
import { FaPlay } from "react-icons/fa";
import { Alert, Spinner, Button } from "react-bootstrap";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);

  if (isLoading)
    return (
      <div className="spinner-wrap">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
    );
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data.results[0].poster_path}` +
          ")",
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].release_date}</p>
        <p>{data?.results[0].overview}</p>
        <div>
          <Button className="banner-play-btn" variant="light" size="lg">
            <FaPlay />
            재생
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
