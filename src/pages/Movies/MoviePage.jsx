import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Alert, Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

//MoviePage에 올 수 있는 경로 2가지
//navbar에서 클릭해서 온 경우(키워드x) => popular movie 보여주기 (원랜 백엔드 영역)
//keyword 입력해서 온 경우 => keyword 관련된 영화 보여주기

//pagination 설치
//page state 만들기
//pagination 클릭할 때마다 page값 바꿔주기
//page 값이 바뀔 때마다 useSearchMovie에 page 넣어서 fetch

//드롭다운에서 정렬 기준 선택
//선택된 정렬 기준을 state로 저장
//data.results를 해당 기준에 따라 sort()로 정렬
//정렬된 결과를 .map()으로 MovieCard에에 뿌리기

//드롭다운에서 장르 선택
//선택된 장르 id 기억
//영화리스트에서 해당 장르 포함된 것만 .filter()
//정렬 + 필터 => movieCard

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const navigate = useNavigate();

  const keyword = query.get("q");

  // 키워드 없이 검색 시, 원래 리스트로
  useEffect(() => {
    if (!keyword) return navigate("/movies");
  }, [keyword]);

  // 키워드 검색 시, pagination 초기화
  useEffect(() => {
    if (keyword) return setPage(1);
  }, [keyword]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  const { data: genreList, isLoading: genreLoading } = useMovieGenreQuery();

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  console.log("Ddd", data);

  if (isLoading) return <h1>isLoading...</h1>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  const getSortedMovies = (movies, option) => {
    switch (option) {
      case "popularity":
        return [...movies].sort((a, b) => b.popularity - a.popularity);
      case "rating":
        return [...movies].sort((a, b) => b.vote_average - a.vote_average);
      case "release_date":
        return [...movies].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
      default:
        return movies;
    }
  };

  const filteredMoviesByGenre = (movies, genreId) => {
    if (!genreId) return movies;
    return movies.filter((movie) => movie.genre_ids.includes(genreId));
  };

  const sortedMovies = getSortedMovies(data?.results || [], sortOption);
  const filteredMovies = filteredMoviesByGenre(sortedMovies, selectedGenre);

  return (
    <Container>
      <Row>
        <Col className="btn-container">
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort By"
            variant="danger"
            className="sort-btn"
          >
            <Dropdown.Item onClick={() => setSortOption("popularity")}>
              Popularity
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("rating")}>
              Rating
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("release_date")}>
              Release Date
            </Dropdown.Item>
          </DropdownButton>
          <Col>
            <DropdownButton title="Genre" variant="danger" className="sort-btn">
              <Dropdown.Item onClick={() => setSelectedGenre(null)}>
                All
              </Dropdown.Item>
              {genreList?.map((genre) => (
                <Dropdown.Item
                  key={genre.id}
                  onClick={() => setSelectedGenre(genre.id)}
                >
                  {genre.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col lg={12} xs={12}>
          <Row>
            {filteredMovies?.length === 0 ? (
              <Col>
                <p>검색 결과가 없습니다.</p>
              </Col>
            ) : (
              filteredMovies?.map((movie, index) => (
                <Col key={index} lg={3} xs={6}>
                  <MovieCard movie={movie} />
                </Col>
              ))
            )}
          </Row>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={Math.min(data?.total_pages, 500)} //전체 페이지 수 500으로 제한
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1} //보고 있는 페이지 값 설정
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
