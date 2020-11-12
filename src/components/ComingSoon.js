import React from "react";
import "../styles/style.css";
import { Container, Col, Row } from "reactstrap";
export default () => {
  return (
    <div className="py-3 mt-4">
      <Container fluid className="mx-auto m-0 p-0">
        <Row className="mx-auto">
          <Col xl="5">
            <img className="robot" src="/assets/image/robot3.png" alt="robot" />
          </Col>
          <Col className="my-auto mx-auto">
            <div className="text-white text-center">
              <h1 className="py-4">Coming Soon</h1>
            </div>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/TSoTiZwuxC8?autoplay=1"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
};
