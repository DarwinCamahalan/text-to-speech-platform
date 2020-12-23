import React from "react";
import "../styles/style.css";
import { Helmet } from "react-helmet";
import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import ChatButton from "../components/ChatButton";
import MainHeader from "../components/MainHeader";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Header4 from "../components/Header4";
import LongFooter from "../components/LongFooter";
import Footer from "../components/Footer";

export default function Home() {
  let xmasAudio = new Audio("/assets/music/xmas.mp3");
  let bgaudio = new Audio("/assets/music/electric.mp3");
  let hoho = new Audio("/assets/music/hoho.mp3");

  bgaudio.play();
  const start = () => {
    document.getElementById("homebg").style.backgroundImage =
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
    bgaudio.pause();
  };
  const normal = () => {
    document.getElementById("homebg").style.backgroundImage = "none";
    xmasAudio.pause();
    bgaudio.play();
    document.getElementById("extra").style.display = "none";
  };
  return (
    <div id="homebg">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavigationBar />
      <Social />
      <ChatButton />

      <img
        className="santa"
        data-toggle="tooltip"
        title="Click Me! 🎄🎅"
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
        title="Turn Off Christmas Mode 🎄"
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
      <MainHeader />
      <h1 className="text-center" style={{ color: "#6dd5ed" }}>
        All Products <span>2077</span>{" "}
      </h1>
      <div className="home">
        {" "}
        <Header />
        <Header2 />
        <Header3 />
        <Header4 />
      </div>

      <LongFooter />
      <Footer />
    </div>
  );
}
