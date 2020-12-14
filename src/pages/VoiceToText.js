import React from "react";

import MusicPlayer from "../components/MusicPlayer";
import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import ChatButton from "../components/ChatButton";
import VTT from "../components/VTT";
import Products from "../components/Products";
import LongFooter from "../components/LongFooter";
import Footer from "../components/Footer";

export default function VoiceToText() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <ChatButton />
      <MusicPlayer />
      <VTT />
      <Products />
      <LongFooter />
      <Footer />
    </div>
  );
}
