import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movie, responsive }) => {
  return (
    <div className="movies-wrap">
      <h3 className="text-white">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="carousel-item-wrapper" //item 간격
        containerClass="carousel-container"
        responsive={responsive}
        // slidesToSlide={6}
      >
        {movie.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default MovieSlider;
