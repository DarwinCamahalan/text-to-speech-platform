import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import TTS from "../components/TTS";
import Products from "../components/Products";
import Footer from "../components/Footer";
import LongFooter from "../components/LongFooter";
import MusicPlayer from "../components/MusicPlayer";

export default function TextToSpeech() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <MusicPlayer />
      <TTS />
      <Products />
      <LongFooter />
      <Footer />
    </div>
  );
}
