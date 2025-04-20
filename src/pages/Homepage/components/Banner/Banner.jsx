import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "bootstrap";
import "./Banner.style.css";
import Button from "react-bootstrap/Button";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);

  if (isLoading) return <h1>Loading...</h1>;
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
