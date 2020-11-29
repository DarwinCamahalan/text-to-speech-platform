import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import Chat from "../components/Chat";
import Footer from "../components/Footer";

export default function ChatPage() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <Chat />
      <Footer />
    </div>
  );
}
