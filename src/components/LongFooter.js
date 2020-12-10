import React from "react";
import "../styles/style.css";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default function LongFooter() {
  return (
    <div className="main-footer text-center">
      <Container className="py-5 mx-auto">
        <Row className="mx-auto">
          <Col className="c1" xl="4">
            <h1
              className="py-3"
              style={{ fontSize: "25px", color: " #6dd5ed" }}
            >
              All <span>Links</span>
            </h1>

            <NavLink to="/text-to-speech">
              Text to Speech <span>2077</span>
            </NavLink>
            <br />
            <NavLink to="/being-built">
              Voice to Text <span>2077</span>
            </NavLink>
            <br />
            <NavLink to="/being-built">
              Voice Recognition <span>2077</span>
            </NavLink>
            <br />
            <NavLink to="/face-recognition">
              Face Recognition <span>2077</span>
            </NavLink>
          </Col>
          <Col className="c1" xl="4">
            <h1
              className="py-3"
              style={{ fontSize: "25px", color: " #6dd5ed" }}
            >
              Contact <span>Our</span> Dev
            </h1>
            <NavLink to="#">
              <span>Email: </span> camahalandarwin@gmail.com
            </NavLink>
            <br />
            <NavLink to="#">
              <span>Address: </span> Cagayan de Oro City Philippines
            </NavLink>
            <br />
            <NavLink to="#">
              <span>Phone Number: </span> +63754270609
            </NavLink>
            <br />
            <NavLink to="https://www.linkedin.com/in/DarwinCamahalan/">
              <span>LinkedIn: </span> Darwin Camahalan
            </NavLink>
          </Col>
          <Col className="c1" xl="4">
            <h1
              className="py-3"
              style={{ fontSize: "25px", color: " #6dd5ed" }}
            >
              Our <span>Sponsor</span>
            </h1>
            <NavLink to="#">
              Mik-Mik <span>Powder</span>
            </NavLink>
            <br />
            <NavLink to="#">
              Proben ni <span>Bobords</span>
            </NavLink>
            <br />
            <NavLink to="#">
              Ice <span>Drop</span>
            </NavLink>
            <br />
            <NavLink to="#">
              Siomai sa <span>USTP</span>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
