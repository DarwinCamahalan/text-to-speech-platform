import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import "../styles/style.css";
import { Container, Card, FormGroup, Input, Label, Button } from "reactstrap";

export default function Notes() {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <>
      <div>
        <Container className="py-5 my-5">
          <Card>
            <FormGroup>
              <Label for="textInput">Text Area</Label>
              <Input
                type="textarea"
                name="text"
                id="textInput"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />

              <Button id="btnSpeak" onMouseDown={listen} onMouseUp={stop}>
                Speak
              </Button>
              {listening && <div>Go ahead I'm listening</div>}
            </FormGroup>
          </Card>
        </Container>
      </div>
    </>
  );
}
