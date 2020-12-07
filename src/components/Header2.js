import React from "react";
import "../styles/style.css";
import { Button } from "reactstrap";

export default function Header2() {
  let myaudio2 = new Audio("/assets/music/1.mp3");
  let myaudio3 = new Audio("/assets/music/warn2.wav");
  const start = () => {
    myaudio2.play();
    myaudio3.play();
  };
  return (
    <>
      <div className="header2">
        <div className="container">
          <div className="text">
            <div className="bg">
              <h1>
                Voice to Text <span>2077</span>
              </h1>
              <h5>
                The Best to the best Voice to Text Software, It has an accuracy
                level of over 9000! It can hear you from 700 miles away. and
                precisely knows what you said.
              </h5>
              <i className="fa fa-medal text-center">
                <p className="text-left mx-5">
                  I love this Product, It's so good that we might file
                  bankruptcy in just 3 months because of this voice to text
                  software <br /> <br /> - Bill Gates
                </p>
              </i>
              <i className="fa fa-trophy">
                <p className="text-left mx-5">
                  Bruh, I'm Speechless 10 out of 10 Software so good! <br />{" "}
                  <br /> - Jeff Bezos
                </p>
              </i>
              <div className="text-left pb-3 pl-5">
                {" "}
                <Button className="btn rounded-pill" href="/being-built">
                  <strong>Start Now</strong>
                </Button>
              </div>
            </div>
          </div>
          <div className="header-robot mr-5">
            <img
              onMouseEnter={start}
              className="robotimg"
              src="/assets/image/robot5.png"
              alt="robot"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}
