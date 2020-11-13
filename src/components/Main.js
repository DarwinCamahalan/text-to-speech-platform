import React from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

import "../styles/style.css";

import {
  Container,
  Card,
  CardBody,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";

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
      <header>
        <Container className="container py-5 mx-auto">
          <Card className="card">
            <FormGroup>
              <Label for="textInput">Type Text Here *</Label>
              <Input
                type="textarea"
                name="text"
                id="textInput"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </FormGroup>
            <CardBody>
              <Button className="play" onClick={() => speak({ text: value })}>
                <i className="text-dark fas fa-play"></i>
              </Button>
              <Button className="mic" onMouseDown={listen} onMouseUp={stop}>
                {" "}
                <i className="text-danger fas fa-microphone"></i>
              </Button>
              {listening && <div>Go ahead I'm listening</div>}
            </CardBody>
          </Card>
        </Container>
      </header>
    </>
  );
}
