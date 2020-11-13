import React from "react";
// import { useSpeechRecognition } from "react-speech-kit";
import "../styles/style.css";
import { Container } from "reactstrap";

export default function Notes() {
  // const [value, setValue] = useState("");
  // const { listen, listening, stop } = useSpeechRecognition({
  //   onResult: (result) => {
  //     setValue(result);
  //   },
  // });
  return (
    <>
      <div>
        <Container className="pt-5 mt-5 mx-auto">
          <h1 className="text-white text-center">Coming Soon! </h1>
          <h4 className="text-white text-center">
            More Features to Come{" "}
            <i style={{ fontSize: "30px" }} className="fas fa-robot"></i>
          </h4>
          {/* <Card>
            <FormGroup>
              <Label for="textInput"></Label>
              <Input
                type="textarea"
                name="text"
                id="textInput"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />

              <Button
                className="play rounded-circle border-0 shadow-none text-center bg-transparent"
                onMouseDown={listen}
                onMouseUp={stop}
              >
                <i className="fas fa-microphone"></i>
              </Button>
              {listening && <div>Go ahead I'm listening</div>}
            </FormGroup>
          </Card> */}
          <img src="/assets/image/robot3.png" alt="" className="vh-100" />
        </Container>
      </div>
    </>
  );
}
