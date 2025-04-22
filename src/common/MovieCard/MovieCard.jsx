import React from "react";
import "./MovieCard.style.css";
import PopularMovieSlide from "../../pages/Homepage/components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "../../pages/Homepage/components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "../../pages/Homepage/components/UpcomingMovieSlide/UpcomingMovieSlide";
import { Badge } from "react-bootstrap";
import { FaBan } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  // data이름 특별하게 재정의
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreIdList || !genreIdList) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData?.find((genre) => genre.id === id);
      return genreObj?.name;
    });

    return genreNameList;
  };

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
        {showGenre(movie.genre_ids).map((genre, index) => (
          <Badge className="genre-badge" bg="danger">
            {genre}
          </Badge>
        ))}
        <div>
          <div className={`age-icon ${movie.adult ? "adult" : "general"}`}>
            {movie.adult ? <FaBan /> : <LuBaby />}
          </div>
          <div className="movie-card-score">
            rating {Math.round(movie.vote_average * 10) / 10}
          </div>
          <div className="movie-card-score">popularity {movie.popularity}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
