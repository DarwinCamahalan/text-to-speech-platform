import React from "react";
import "../styles/style.css";
import { Button } from "reactstrap";

export default function Header4() {
  let myaudio = new Audio("/assets/music/face.wav");
  const start = () => {
    myaudio.play();
  };
  let myaudio2 = new Audio("/assets/music/1.mp3");
  const start2 = () => {
    myaudio2.play();
  };
  return (
    <>
      <div className="header4">
        <div className="container">
          <div className="text">
            <div className="bg">
              <h1>Face Recognition 2077</h1>
              <h5>
                The Worlds Best of the Best Face Recognition Algorithm Ever
                Made. It's Created by Darpax the Most Intelligent Human Being
                Ever Lived!.
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
                <Button
                  onMouseEnter={start}
                  className="btn rounded-pill"
                  href="/face-detection"
                >
                  <strong>Start Now</strong>
                </Button>
              </div>
            </div>
          </div>
          <div className="header-robot mr-5">
            <img
              onMouseEnter={start2}
              src="/assets/image/robot3.png"
              alt="robot"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}
