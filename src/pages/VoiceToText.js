import React from "react";

import NavigationBar from "../components/NavBar";
import MusicPlayer from "../components/MusicPlayer";
import VTT from "../components/VTT";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function VoiceToText() {
  return (
    <div>
      <NavigationBar />
      <MusicPlayer />
      <VTT />
      <Products />
      <Footer />
    </div>
  );
}
