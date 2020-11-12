import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default function Footer() {
  return (
    <footer className="border-top" style={{ borderTopColor: "blue" }}>
      <Container className="py-3">
        <Row>
          <Col
            xs="12"
            lg="3"
            className="py-3 mt-2 align-middle text-center text-lg-left"
          >
            &copy; Copyright {new Date().getFullYear()} Text to Speech
          </Col>
          <Col xs="12" lg="9" className="py-3">
            <Row>
              <Col className="text-right mb-lg-0 " lg="8">
                <NavLink
                  className="text-dark d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className="text-dark d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  to="/terms-of-service"
                >
                  Terms of Service
                </NavLink>
                <NavLink
                  className="text-dark d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </NavLink>
              </Col>
              <Col className="text-center" lg="4">
                <a
                  className="text-theme-dark rounded-circle bg-white d-inline-block text-center"
                  href="https://www.facebook.com/text-to-speech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/icon/fb.png" alt="fb logo" width="22px" />
                </a>
                <a
                  className="ml-2 text-theme-dark rounded-circle bg-white d-inline-block text-center"
                  href="https://instagram.com/text-to-speech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/icon/insta.png"
                    alt="insta logo"
                    width="22px"
                  />
                </a>
                <a
                  className="ml-2 text-theme-dark rounded-circle bg-white d-inline-block text-center"
                  href="https://github.com/text-to-speech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded-circle "
                    src="/assets/icon/github.png"
                    alt="ustp logo"
                    width="24px"
                  />
                </a>
                <a
                  className="ml-2 text-theme-dark rounded-circle bg-white d-inline-block text-center"
                  href="https://www.linkedin.com/company/text-to-speech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/icon/linkend.png"
                    alt="linked"
                    width="25px"
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
