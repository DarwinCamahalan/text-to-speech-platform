import React from "react";
import { Helmet } from "react-helmet";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

import "../styles/style.css";

import { Card, CardBody, FormGroup, Input, Label, Button } from "reactstrap";
import Tilt from "react-vanilla-tilt";

export default function TTS() {
  const [value, setValue] = React.useState("");
  let myaudio = new Audio("/assets/music/speak.wav");
  const start = () => {
    myaudio.play();
  };
  let myaudio2 = new Audio("/assets/music/warn3.wav");
  let myaudio3 = new Audio("/assets/music/warn.wav");
  const start2 = () => {
    myaudio2.play();
    myaudio3.play();
  };
  const { speak } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <>
      <div className="containertts">
        <Helmet>
          <title>Text to Speech 2077</title>
        </Helmet>

        <div className="input-bg">
          <Tilt className="tilt">
            <Card className="card ">
              <FormGroup>
                <Label for="textInput">
                  <h5 className="py-3 text-white">
                    <strong>
                      {" "}
                      Input Text Here or Click the{" "}
                      <i className="micicon fas fa-microphone px-1"></i> icon.
                    </strong>
                  </h5>
                </Label>
                <Input
                  type="textarea"
                  name="text"
                  id="textInput"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </FormGroup>
              {listening && (
                <h5 className="text-white">
                  <strong>
                    {" "}
                    Speak now, I'm listening Human.{" "}
                    <i className="text-danger fas fa-volume-up"></i>
                  </strong>
                </h5>
              )}
              <CardBody className="mx-auto text-center m-0 p-0">
                <Button
                  className="play rounded-circle border-0 shadow-none text-center bg-transparent"
                  onClick={() => speak({ text: value })}
                >
                  <i className="fas fa-play"></i>
                </Button>
                <Button
                  className="play rounded-circle border-0 shadow-none text-center bg-transparent"
                  onMouseDown={listen}
                  onMouseUp={stop}
                  onMouseDownCapture={start}
                >
                  {" "}
                  <i className="fas fa-microphone"></i>
                </Button>
              </CardBody>
            </Card>
          </Tilt>
        </div>

        <div className="robot">
          {" "}
          <img
            onMouseEnter={start2}
            src="/assets/image/robot4.png"
            alt="robot"
          />
        </div>
      </div>
      <hr className="hrmain" />
    </>
  );
}
