import React, { useState } from "react";
import "./ReviewBox.style.css";
import { Alert, Container, Row, Col, Card } from "react-bootstrap";
import { useMovieReviews } from "../../../../../hooks/useMovieReviews";
import { useParams } from "react-router-dom";

const ReviewBox = () => {
  let { id } = useParams();
  const { data, isLoading, isError, error } = useMovieReviews(id);
  const [showMoreMap, setShowMoreMap] = useState();

  console.log("aaaa", data);

  if (isLoading) return <h1>isLoading...</h1>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  if (!data || data.length === 0)
    return <p className="text-muted">리뷰가 없습니다.</p>;

  const toggleShowMore = (reviewId) => {
    setShowMoreMap((prev = {}) => ({
      // 특정 리뷰 ID의 상태만 true/false로 토글
      ...prev,
      [reviewId]: !prev?.[reviewId],
    }));
  };

  return (
    <Container className="review-box mt-5">
      <Row xs={1} md={1} lg={1} className="g-4">
        {data.slice(0, 3).map((review) => {
          const reviewId = review?.id;
          const content = review?.content || "";
          const isShowMore = showMoreMap?.[reviewId] || false;
          const isLong = content.length > 100;
          const displayed = isShowMore ? content : content.slice(0, 100);

          return (
            <Col key={reviewId}>
              <Card className="bg-dark text-white h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold">
                    {review?.author || "Unknown"}
                  </Card.Title>
                  <Card.Text>{displayed}</Card.Text>
                  {isLong && (
                    <div
                      className="content-toggle"
                      role="button"
                      onClick={() => toggleShowMore(reviewId)}
                    >
                      {isShowMore ? "[Read less]" : "... [Read more]"}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ReviewBox;
