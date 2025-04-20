import React from "react";
import { Alert } from "bootstrap";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "../PopularMovieSlide/PopularMovieSlide.style.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
  },
  laptop: {
    breakpoint: { max: 1200, min: 992 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 992, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) return <h1>isLoading...</h1>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <div className="movies-wrap">
      <h3 className="text-white">Top Rated Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="carousel-item-wrapper" //item 간격
        containerClass="carousel-container"
        responsive={responsive}
        slidesToSlide={6}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default TopRatedMovieSlide;
