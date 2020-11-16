import React from "react";

import NavigationBar from "../components/NavBar";
import MusicPlayer from "../components/MusicPlayer";
import VTT from "../components/VTT";
import Footer from "../components/Footer";

export default function VoiceToText() {
  return (
    <div>
      <NavigationBar />
      <MusicPlayer />
      <VTT />
      <Footer />
    </div>
  );
}
