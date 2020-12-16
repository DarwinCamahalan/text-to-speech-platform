import React from "react";
import "../styles/style.css";
import Tilt from "react-vanilla-tilt";
import { Helmet } from "react-helmet";
import { Row, Col, Container } from "reactstrap";
function About() {
  return (
    <div className="px-3">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container className="py-5 my-3">
        <Row xl="12">
          <Col xl="10" className=" mx-auto">
            <Tilt className="tilt">
              <div className="bgvideo">
                <video controls autoPlay loop width="100%">
                  <source src="/assets/video/about.mp4" />
                </video>
              </div>
            </Tilt>
            <h2
              className="py-5 text-center"
              style={{ fontFamily: "Nosifer", color: "#6dd5ed" }}
            >
              About Text to Speech <br />
              <span style={{ fontFamily: "Goldman", color: "red" }}>2077</span>
            </h2>
            <div className="par text-justify">
              <p>
                Text to Speech 2077 is a Futuristic Website with lots of
                features not just a Text to Speech Software it has a lot more to
                offer. This is the most creative website you can ever imagine.
              </p>
              <p>
                We have the most advance technology ever made and most reliable
                software in the entire universe. Most future Proof Website and
                aesthetically pleasing in the eyes.
              </p>
              <p>
                We have 4 products for now but we will be expanding our software
                in the future to ride the never ending advancement of
                technologies ever imagine.
              </p>
              <p>
                This website is built by a young and ambitious Developer from
                the race of warriors, this is the most ambitous futuristic and
                most advance website you'll ever see.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
