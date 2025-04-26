import React, { useState } from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";
import { FaPlay } from "react-icons/fa";
import { Alert, Spinner, Button, Modal } from "react-bootstrap";
import YouTube from "react-youtube";
import { useMovieVideoQuery } from "../../../../hooks/useMovieVideo";

const Banner = () => {
  const { data, isError, error } = usePopularMoviesQuery();
  const [show, setShow] = useState(false);

  const featuredMovie = data?.results?.[0];
  const { data: video } = useMovieVideoQuery(featuredMovie?.id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

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
          <Button
            variant="light"
            onClick={handleShow}
            className="banner-play-btn"
            // disabled={!video} // 영상 없으면 비활성화
          >
            <FaPlay />
            Play
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            centered
            dialogClassName="modal-no-padding" //모달 전체 박스의 위치/사이즈/정렬용
            contentClassName="modal-transparent-content" //모달 안쪽 컨텐츠의 배경/테두리 등 디자인용
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="d-flex justify-content-center p-0">
              {video ? (
                <YouTube videoId={video.key} opts={opts} />
              ) : (
                <p className="text-center py-5 text-white">
                  예고편이 없습니다.
                </p>
              )}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Banner;
