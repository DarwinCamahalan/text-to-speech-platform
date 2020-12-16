import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import { Container } from "reactstrap";
export default function BeingBuilt() {
  return (
    <>
      <div className="built">
        <Helmet>
          <title>Page Being Built</title>
        </Helmet>
        <audio autoPlay loop>
          <source src="/assets/music/electric.mp3" />
        </audio>
        <Container
          className="py-5 mt-5 text-center text-white vtt"
          style={{ fontFamily: "Poppins" }}
        >
          <h2>Our Products are currently being Built.</h2>
          <h3>We're Excited to show it to you though.</h3>
          <i className="fas fa-tools pt-5" style={{ fontSize: "1000%" }}></i>
        </Container>
      </div>
    </>
  );
}
