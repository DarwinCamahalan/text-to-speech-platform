import React from "react";

import NavigationBar from "../components/NavBar";
import MusicPlayer from "../components/MusicPlayer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <MusicPlayer />
      <Header />
      <Header2 />
      <Footer />
    </div>
  );
}
