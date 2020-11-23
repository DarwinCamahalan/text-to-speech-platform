import React from "react";

import NavigationBar from "../components/NavBar";
import TTS from "../components/TTS";
import Products from "../components/Products";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";

export default function TextToSpeech() {
  return (
    <div>
      <NavigationBar />
      <MusicPlayer />
      <TTS />
      <Products />
      <Footer />
    </div>
  );
}
