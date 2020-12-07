import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import { Container } from "reactstrap";
export default function BeingBuilt() {
  return (
    <>
      <div>
        <Helmet>
          <title>Page Being Built</title>
        </Helmet>
        <Container className="py-5 mt-5 text-center text-white vtt">
          <h2>Our Product are currently being Built.</h2>
          <h3>We're Excited to show it though.</h3>
          <i className="fas fa-tools pt-5" style={{ fontSize: "1000%" }}></i>
        </Container>
      </div>
    </>
  );
}
