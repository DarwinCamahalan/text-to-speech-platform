import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { Helmet } from "react-helmet";
import AudioPlayer from "react-h5-audio-player";
import "../styles/style.css";

export default function FaceRecognition() {
  let Draggable = require("react-draggable");

  const [initializing, setInitializing] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.getUserMedia(
      {
        video: {},
      },
      (stream) => (videoRef.current.srcObject = stream),
      (err) => console.log(err)
    );
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }
      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      const displaySize = {
        width: videoWidth,
        height: videoHeight,
      };
      faceapi.matchDimensions(canvasRef.current, displaySize);
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const resizeDetections = faceapi.resizeResults(detections, displaySize);
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizeDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizeDetections);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resizeDetections);
    }, 500);
  };
  const videoHeight = 480;
  const videoWidth = 640;

  const [isLoopable] = useState(true);

  return (
    <>
      <div className="vh-100 face">
        <Helmet>
          <title>Face Recognition 2077</title>
        </Helmet>

        <Draggable>
          <div>
            <h3 className="text-center text-white">
              {initializing
                ? "Initializing Face Recognition 2077"
                : "I can see your Face now Human."}
              <i style={{ fontSize: "20px" }} className="mx-2 fas fa-robot"></i>
            </h3>

            <div className="video flex">
              {" "}
              <video ref={videoRef} autoPlay muted onPlay={handleVideoOnPlay} />
              <canvas ref={canvasRef} className="canvas" />
            </div>
          </div>
        </Draggable>
      </div>
      <audio autoPlay>
        <source src={initializing ? "/assets/music/intro.wav" : ""} />
      </audio>

      <Draggable>
        <div className="player">
          <AudioPlayer
            className="music"
            autoPlay
            loop={isLoopable}
            src={initializing ? "" : "/assets/music/face-bg.mp3"}
            onPlay={(e) => console.log("onPlay")}
          />
        </div>
      </Draggable>
    </>
  );
}
