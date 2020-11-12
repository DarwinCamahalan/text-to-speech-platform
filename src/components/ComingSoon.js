import React from "react";
import "../styles/style.css";
import { Container, Col, Row } from "reactstrap";
export default function ComingSoon() {
  return (
    <div className="pt-3 mt-4">
      <Container fluid className="mx-auto m-0 p-0">
        <Row className="mx-auto">
          <Col xl="6">
            <img
              className="robot w-100 vh-100"
              src="/assets/image/robot3.png"
              alt="robot"
            />
          </Col>
          <Col xl="6" className="my-auto mx-auto">
            <div className="text-white text-center">
              <h1 className="py-4">Coming Soon</h1>
            </div>

            <iframe
              title="video"
              width="95%"
              height="400"
              src="https://www.youtube.com/embed/TSoTiZwuxC8?autoplay=1"
              frameborder="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
