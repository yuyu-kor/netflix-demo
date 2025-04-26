import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner
        animation="border"
        variant="danger"
        style={{
          width: "4rem",
          height: "4rem",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
