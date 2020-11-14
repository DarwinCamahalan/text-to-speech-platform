import React from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

import "../styles/style.css";

import { Card, CardBody, FormGroup, Input, Label, Button } from "reactstrap";

export default function Main() {
  const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <>
      <header className="container mx-auto pt-3">
        <div className="input-bg">
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
              >
                {" "}
                <i className="fas fa-microphone"></i>
              </Button>
            </CardBody>
          </Card>
        </div>
        <img
          className="robot3"
          src="/assets/video/gif4.gif"
          alt="gif"
          width="100%"
        />
        <img
          className="robot3"
          src="/assets/video/gif2.gif"
          alt="gif"
          width="100%"
        />
        <img src="/assets/image/robot2.png" alt="robot" className="robot" />
      </header>
      <hr />
    </>
  );
}
