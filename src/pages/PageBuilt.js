import React from "react";
import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import ChatButton from "../components/ChatButton";
import BeingBuilt from "../components/BeingBuilt";
import Products from "../components/Products";
import LongFooter from "../components/LongFooter";
import Footer from "../components/Footer";

export default function PageBuilt() {
  let xmasAudio = new Audio("/assets/music/xmas.mp3");
  let bgaudio = new Audio("/assets/music/electric.mp3");
  let hoho = new Audio("/assets/music/hoho.mp3");
  bgaudio.play();
  const start = () => {
    document.getElementById("builtbg").style.backgroundImage =
      "url(assets/image/snow.gif)";
    document.getElementById("extra").style.display = "block";
    xmasAudio.play();
    bgaudio.pause();
  };
  const stopAll = () => {
    hoho.pause();
  };

  const xmashoho = () => {
    hoho.play();
  };
  const normal = () => {
    document.getElementById("builtbg").style.backgroundImage = "none";
    xmasAudio.pause();
    bgaudio.play();
    document.getElementById("extra").style.display = "none";
  };
  return (
    <div id="builtbg">
      <NavigationBar />
      <Social />
      <ChatButton />
      <img
        className="santa"
        data-toggle="tooltip"
        title="Click Me!"
        data-placement="top"
        src="/assets/image/santa.png"
        alt="santa"
        onClick={start}
        onMouseEnter={xmashoho}
        onMouseLeave={stopAll}
      />
      <img
        className="santa2"
        data-toggle="tooltip"
        title="Turn Off Christmas Mode"
        src="/assets/image/deer.png"
        alt="santa"
        onClick={normal}
      />
      <img
        id="extra"
        className="extra"
        src="/assets/image/gift.gif"
        alt="gift"
      />
      <audio autoPlay loop>
        <source src={bgaudio} />
      </audio>
      <BeingBuilt />
      <Products />
      <LongFooter />
      <Footer />
    </div>
  );
}
