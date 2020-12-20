import React from "react";
import "../styles/style.css";
import Tilt from "react-vanilla-tilt";
import { Button } from "reactstrap";

export default function Header3() {
  let myaudio2 = new Audio("/assets/music/1.mp3");
  let myaudio3 = new Audio("/assets/music/warn5.wav");
  const start = () => {
    myaudio2.play();
    myaudio3.play();
  };
  const stopAll = () => {
    myaudio2.pause();
    myaudio3.pause();
  };
  return (
    <>
      <div className="header3">
        <Tilt className="tilt bg-transparent">
          <div className="container">
            <div className="text">
              <div className="bg">
                <h1>
                  Voice Assistant <span>2077</span>
                </h1>
                <h5>
                  The Smartest Voice Assistant in the whole Universe! It can
                  predict what your saying before you even talk to it. The Apex
                  Voice Assistant ever.
                </h5>
                <i className="fa fa-medal text-center">
                  <p className="text-left mx-5">
                    Our Company and Products are Nothing to this Voice
                    Assistant, I'm Definitely Afraid of this Voice Assistant.{" "}
                    <br /> <br /> - Elon Musk
                  </p>
                </i>
                <i className="fa fa-trophy">
                  <p className="text-left mx-5">
                    I've Seen the Most Advance Voice Assistant in the entire
                    Universe! I can peacefully Die now. <br /> <br /> - Mark
                    Zuckerberg
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
                onMouseLeave={stopAll}
                src="/assets/image/robot6.png"
                alt="robot"
                width="100%"
              />
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
}
