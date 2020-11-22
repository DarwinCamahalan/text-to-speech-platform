import React from "react";
import "../styles/style.css";
import { Button } from "reactstrap";

export default function Header3() {
  let myaudio2 = new Audio("/assets/music/1.mp3");
  let myaudio3 = new Audio("/assets/music/warn5.wav");
  const start = () => {
    myaudio2.play();
    myaudio3.play();
  };
  return (
    <>
      <div className="header3">
        <div className="container">
          <div className="text">
            <div className="bg">
              <h1>Darpax Voice Assistant 2077</h1>
              <h5>
                The Smartest Voice Assistant in the whole Universe! It can
                predict what your saying before you even talk to it. The Apex
                Voice Assistant ever.
              </h5>
              <i className="fa fa-medal text-center">
                <p className="text-left mx-5">
                  Our Company and Products are Nothing to this Voice Assistant,
                  I'm Definitely Afraid of Darpax Voice Assistant. <br /> <br />{" "}
                  - Elon Musk
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
                <Button className="btn rounded-pill" href="/take-notes">
                  <strong>Start Now</strong>
                </Button>
              </div>
            </div>
          </div>
          <div className="header-robot mr-5">
            <img
              onMouseEnter={start}
              src="/assets/image/robot6.png"
              alt="robot"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}
