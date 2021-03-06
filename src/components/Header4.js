import React from "react";
import "../styles/style.css";
import Tilt from "react-vanilla-tilt";
import { Button } from "reactstrap";

export default function Header4() {
  let myaudio2 = new Audio("/assets/music/1.mp3");
  let myaudio3 = new Audio("/assets/music/warn4.wav");
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
      <div className="header4">
        <Tilt className="tilt bg-transparent">
          <div className="container">
            <div className="text">
              <div className="bg">
                <h1>
                  Face Recognition <span>2077</span>
                </h1>
                <h5>
                  The Worlds Best of the Best Face Recognition Algorithm Ever
                  Made.
                </h5>
                <i className="fa fa-medal text-center">
                  <p className="text-left mx-5">
                    It so accurate it can predict my movements 5 seconds before
                    I move! Amazing Face Recognition <br /> <br /> - Vladimir
                    Putin
                  </p>
                </i>
                <i className="fa fa-trophy">
                  <p className="text-left mx-5">
                    All I can say is this face recognition is so fucking good!{" "}
                    <br /> <br /> - Guy from Street
                  </p>
                </i>
                <div className="text-left pb-3 pl-5">
                  {" "}
                  <Button className="btn rounded-pill" href="/face-recognition">
                    <strong>Start Now</strong>
                  </Button>
                </div>
              </div>
            </div>
            <div className="header-robot mr-5">
              <img
                onMouseEnter={start}
                onMouseLeave={stopAll}
                src="/assets/image/robot3.png"
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
