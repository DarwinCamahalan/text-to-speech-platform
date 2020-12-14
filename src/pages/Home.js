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
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavigationBar />
      <Social />
      <ChatButton />
      <audio autoPlay loop>
        <source src="/assets/music/electric.mp3" />
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
