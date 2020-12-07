import React from "react";
import "../styles/style.css";
import { Helmet } from "react-helmet";
import { Row, Col, Container } from "reactstrap";
function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container className="py-5 my-3">
        <Row xl="12">
          <Col xl="10" className=" mx-auto">
            <div className="bgvideo">
              <video controls autoPlay loop width="100%">
                <source src="/assets/video/about.mp4" />
              </video>
            </div>
            <h2
              className="py-5 text-center"
              style={{ fontFamily: "Nosifer", color: "#6dd5ed" }}
            >
              About Text to Speech <br />
              <span style={{ fontFamily: "Goldman", color: "red" }}>2077</span>
            </h2>
            <div className="par text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                minus nemo ullam similique nobis iusto quos unde cum vero
                tempore, quo quam saepe molestiae architecto a enim aut
                consectetur? Enim dignissimos quaerat, quis omnis, sint
                repellendus, ex voluptatum quidem earum adipisci necessitatibus
                doloribus? Optio fuga debitis possimus, quas corrupti dolore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                minus nemo ullam similique nobis iusto quos unde cum vero
                tempore, quo quam saepe molestiae architecto a enim aut
                consectetur? Enim dignissimos quaerat, quis omnis, sint
                repellendus, ex voluptatum quidem earum adipisci necessitatibus
                doloribus? Optio fuga debitis possimus, quas corrupti dolore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                minus nemo ullam similique nobis iusto quos unde cum vero
                tempore, quo quam saepe molestiae architecto a enim aut
                consectetur? Enim dignissimos quaerat, quis omnis, sint
                repellendus, ex voluptatum quidem earum adipisci necessitatibus
                doloribus? Optio fuga debitis possimus, quas corrupti dolore.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
