import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.style.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="not-found-container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-4 text-white">페이지를 찾을 수 없습니다😢</p>
      <p>주소가 잘못되었거나, 존재하지 않는 페이지입니다.</p>
      <Button variant="outline-light" size="lg" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

export default NotFoundPage;
