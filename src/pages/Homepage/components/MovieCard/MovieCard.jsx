import React from "react";
import "./MovieCard.style.css";
import PopularMovieSlide from "../PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "../TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "../UpcomingMovieSlide/UpcomingMovieSlide";
import { Badge } from "react-bootstrap";
import { FaBan } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge className="genre-badge" bg="danger">
            {id}
          </Badge>
        ))}
        <div>
          <div className={`age-icon ${movie.adult ? "adult" : "general"}`}>
            {movie.adult ? <FaBan /> : <LuBaby />}
          </div>
          <div className="movie-card-score">rating {movie.vote_average}</div>
          <div className="movie-card-score">popularity {movie.popularity}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
