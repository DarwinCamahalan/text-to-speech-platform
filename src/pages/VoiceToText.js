import React from "react";

import MusicPlayer from "../components/MusicPlayer";
import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import VTT from "../components/VTT";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function VoiceToText() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <MusicPlayer />
      <VTT />
      <Products />
      <Footer />
    </div>
  );
}
