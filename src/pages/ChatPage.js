import React from "react";
import "../styles/style.css";
import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import Chat from "../components/Chat";
import Products from "../components/Products";
import Footer from "../components/Footer";
import LongFooter from "../components/LongFooter";

export default function ChatPage() {
  return (
    <>
      <NavigationBar />
      <div className="bgchat">
        <Social />
        <Chat />
        <Products />
      </div>
      <LongFooter />
      <Footer />
    </>
  );
}
