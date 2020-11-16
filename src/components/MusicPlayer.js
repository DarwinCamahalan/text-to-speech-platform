import React, { useState } from "react";
import "../styles/style.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MusicPlayer() {
  const [isLoopable] = useState(true);

  let Draggable = require("react-draggable");

  return (
    <>
      <Draggable>
        <div className="player">
          <AudioPlayer
            className="music"
            autoPlay
            loop={isLoopable}
            src="/assets/music/electric.mp3"
            onPlay={(e) => console.log("onPlay")}
          />
        </div>
      </Draggable>
    </>
  );
}
