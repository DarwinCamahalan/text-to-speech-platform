import React from "react";
import "../styles/style.css";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default function LongFooter() {
  return (
    <div className="main-footer">
      <Container className="py-5">
        <Row>
          <Col className="col text-center">
            <h1
              className="py-3"
              style={{ fontSize: "25px", color: " #6dd5ed" }}
            >
              All <span>Links</span>
            </h1>
            <NavLink className="d-block d-lg-inline" to="/text-to-speech">
              Text to Speech <span>2077</span>
            </NavLink>
            <NavLink className="d-block d-lg-inline" to="/being-built">
              Voice to Text <span>2077</span>
            </NavLink>
            <NavLink className="d-block d-lg-inline" to="/being-built">
              Voice Recognition <span>2077</span>
            </NavLink>
            <NavLink className="d-block d-lg-inline" to="/face-recognition">
              Face Recognition <span>2077</span>
            </NavLink>
          </Col>
          <Col className="col text-center">
            <h1
              className="py-3"
              style={{ fontSize: "25px", color: " #6dd5ed" }}
            >
              Contact <span>Our</span> Dev
            </h1>
            <NavLink to="#">
              <span>Email: </span> camahalandarwin@gmail.com
            </NavLink>
            <NavLink to="#">
              <span>Address: </span> Cagayan de Oro City Philippines
            </NavLink>
            <NavLink to="#">
              <span>Phone Number: </span> +63754270609
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/DarwinCamahalan/">
              <span>LinkedIn: </span> Darwin Camahalan
            </NavLink>
          </Col>
          <Col className="col text-center">
            <h1
              className="py-3"
              style={{ fontSize: "25px", color: " #6dd5ed" }}
            >
              Our <span>Sponsor</span>
            </h1>
            <NavLink className="d-block d-lg-inline" to="#">
              Mik-Mik <span>Powder</span>
            </NavLink>
            <NavLink className="d-block d-lg-inline" to="#">
              Ice <span>Water</span>
            </NavLink>
            <NavLink className="d-block d-lg-inline" to="#">
              Ice <span>Pop</span>
            </NavLink>
            <NavLink className="d-block d-lg-inline" to="#">
              Bobot <span>Hard Candy</span>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
