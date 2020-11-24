import React from "react";
import "../styles/style.css";
import { Container, Col, Row, CardImg, Card, NavLink } from "reactstrap";
export default function Products() {
  const products = [
    {
      title: "Text to Speech 2077",
      img: "/assets/image/robot2.png",
      to: "/text-to-speech",
    },
    {
      title: "Voice to Text 2077",
      img: "/assets/image/robot5.png",
      to: "/being-built",
    },
    {
      title: "Voice Recognition 2077",
      img: "/assets/image/robot7.png",
      to: "/being-built",
    },
    {
      title: "Face Recognition 2077",
      img: "/assets/image/robot3.png",
      to: "/face-detection",
    },
  ];
  return (
    <div className="pb-5 m-5 pt-3 prod">
      <Container className="mx-auto m-0 p-0 text-center">
        <h1 style={{ fontFamily: "VT323", color: "#00e804" }}>
          More Products{" "}
          <i style={{ fontSize: "20px" }} className="mx-2 fas fa-robot"></i>
        </h1>
        <Row className="m-0 p-0">
          {products.map((products, index) => (
            <Col key={index} xl="3">
              <NavLink href={products.to}>
                <Card className="card2">
                  <CardImg src={products.img} className="robots" />
                </Card>
                <p
                  className="probot pt-3"
                  style={{
                    fontFamily: "VT323",
                    color: "#00e804",
                    fontSize: "25px",
                  }}
                >
                  {products.title}
                </p>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
