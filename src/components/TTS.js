import React from "react"; // importing React JS
import { Helmet } from "react-helmet"; // importing react-helment for SEO purpose
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

import "../styles/style.css";

import { Card, CardBody, FormGroup, Input, Label, Button } from "reactstrap";
import Tilt from "react-vanilla-tilt";

export default function TTS() {
  // defining Text to Speech Function where the text being process to become an audio
  const [value, setValue] = React.useState(""); // defining a variable named value as an state of react which allow as to set its value
  let myaudio = new Audio("/assets/music/speak.wav"); // varible for adding audio when user clicks on mic icon
  const start = () => {
    // defining an arrow Function ES6+ Javascript style which plays the audio definded above
    myaudio.play();
  };
  let myaudio2 = new Audio("/assets/music/warn3.wav"); // varible for adding audio when user hover on robot image
  let myaudio3 = new Audio("/assets/music/warn.wav");
  const start2 = () => {
    // defining an arrow Function ES6+ Javascript style which plays the audio definded above
    myaudio2.play();
    myaudio3.play();
  };
  const stopAll = () => {
    // defining an arrow Function ES6+ Javascript style which plays the audio definded above
    myaudio2.pause();
    myaudio3.pause();
  };
  const { speak } = useSpeechSynthesis(); // using Google Tensorflow API for converting text into Audio and storing it to a variable named "speak"
  const { listen, listening, stop } = useSpeechRecognition({
    // destructuring the Google Tensorflow API and only using the listen, listening, and stop functions
    onResult: (result) => {
      // defining function for getting the text and converting it to audio when user clicks the play icon
      setValue(result); // passing the text to the API mentioned above
    },
  });
  return (
    // React JS Render Method which render all the components inside
    <>
      {/* NOTE: this is not a HTML Syntax this is JSX they're just similar to HTML */}
      <div className="containertts">
        {/* Container of all components */}
        <Helmet>
          <title>Text to Speech 2077</title>
        </Helmet>
        {/* Tab Title for SEO purpose and Page recognition in Search Engine e.g Google Search */}
        <div className="input-bg">
          {/* Container of Input Object with brackground */}
          <Tilt className="tilt">
            {/* my Tilt Component where objects can be seen as a 3D object visually */}
            <Card className="card ">
              {/* Card Container for the whole Input label */}
              <FormGroup>
                {/* the whole Input Object group together */}
                <Label for="textInput">
                  {/* The Input Label */}
                  <h5 className="py-3 text-white">
                    {/* Text indicator for user experience design*/}
                    <strong>
                      {" "}
                      Input Text Here or Click the{" "}
                      <i className="micicon fas fa-microphone px-1"> </i>
                      icon
                      {/* The Mic Icon for the user to click on */}
                    </strong>
                  </h5>
                </Label>
                <Input
                  /* The Input Object itself */
                  type="textarea"
                  name="text"
                  id="textInput"
                  value={value} // passing the value to the function defined above from the user input
                  onChange={(e) => setValue(e.target.value)} // an event listener where when the user inputted the text it will send to the function above called "setValue"
                />
              </FormGroup>
              {listening && ( // Listening to the user input (an event listener from Tensorflow API)
                <h5 className="text-white">
                  {/* Text indicator for user experience design*/}
                  <strong>
                    {" "}
                    Speak now, I'm listening Human.{" "}
                    <i className="text-danger fas fa-volume-up"></i>
                    {/* volume icon for dsiplay purposes only */}
                  </strong>
                </h5>
              )}
              <CardBody className="mx-auto text-center m-0 p-0">
                {/* Container of two buttons Play and Mic*/}
                <Button
                  className="play rounded-circle border-0 shadow-none text-center bg-transparent"
                  // The Play Button itself
                  onClick={() => speak({ text: value })}
                  // an onclick event which triggers when user click the button then after clicking it will play the converted text to audio
                >
                  <i className="fas fa-play"></i>
                  {/* Play icon for Play Button a user experience design */}
                </Button>
                <Button
                  // The Microphone Button itself
                  className="play rounded-circle border-0 shadow-none text-center bg-transparent"
                  onMouseDown={listen} // when the user click the button and hold it. It will start listening to the voice of the user
                  onMouseUp={stop} // when the user release the button from hodling it. It will stop listening to the user.
                  onMouseDownCapture={start} // when the user cursor leaves the button it will now display the text to the input object mentioned above
                >
                  {" "}
                  <i className="fas fa-microphone"></i>
                  {/* Microphone icon for Mic Button a user experience design */}
                </Button>
                {/* End of the button JSX Tag */}
              </CardBody>
              {/* End of the CardBody JSX Tag */}
            </Card>
            {/* End of the Card JSX Tag */}
          </Tilt>
          {/* End of the Tilt JSX Tag */}
        </div>
        {/* End of the div JSX Tag */}
        <div className="robot">
          {/* Container for Robot Image */}{" "}
          <img
            // The Robot Image itself
            onMouseEnter={start2}
            onMouseLeave={stopAll} // when user hover onto the robot image it will make a audio which robot will challenge the user :)
            // "start2" is the variable mentioned above
            src="/assets/image/robot4.png" // Robot Image Directory
            alt="robot"
          />
        </div>
        {/* End of the div JSX Tag */}
      </div>
      {/* End of the div JSX Tag */}
      <hr className="hrmain" />
      {/* Horizontal Rule/Line div JSX Tag */}
    </>
  );
} // End of React JS render method
