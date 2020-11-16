import React from "react";
import "../styles/style.css";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default function Footer() {
  return (
    <footer className="border-top">
      <Container className="py-3">
        <Row>
          <Col
            xs="12"
            lg="4"
            className="py-3 align-middle text-center text-lg-left"
            style={{ color: "#000" }}
          >
            &copy;{" "}
            <strong>
              Copyright {new Date().getFullYear()} Text to Speech{" "}
              <i className="fas fa-robot"></i>
            </strong>
          </Col>
          <Col xs="12" lg="8" className="py-3">
            <Row>
              <Col className="text-right" lg="8">
                <NavLink
                  className="d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  // to="/about"
                  to="/take-notes"
                >
                  About
                </NavLink>
                <NavLink
                  className="d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  // to="/terms-of-service"
                  to="/take-notes"
                >
                  Terms of Service
                </NavLink>
                <NavLink
                  className="d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  // to="/privacy-policy"
                  to="/take-notes"
                >
                  Privacy Policy
                </NavLink>
              </Col>
              <Col className="text-center" lg="4" style={{ fontSize: "20px" }}>
                <a
                  className="d-inline-block text-center"
                  href="https://www.facebook.com/text-to-speech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook "></i>
                </a>
                <a
                  className="ml-2 d-inline-block text-center"
                  href="https://instagram.com/text-to-speech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram "></i>
                </a>
                <a
                  className="ml-2 d-inline-block text-center"
                  href="https://github.com/text-to-speech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="ml-2 px-1 d-inline-block text-center"
                  href="https://www.linkedin.com/company/text-to-speech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
