import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import ChatButton from "../components/ChatButton";
import BeingBuilt from "../components/BeingBuilt";
import Products from "../components/Products";
import LongFooter from "../components/LongFooter";
import Footer from "../components/Footer";

export default function PageBuilt() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <ChatButton />
      <BeingBuilt />
      <Products />
      <LongFooter />
      <Footer />
    </div>
  );
}
