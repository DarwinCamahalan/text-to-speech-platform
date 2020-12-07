import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import About from "../components/About";
import Products from "../components/Products";
import Footer from "../components/Footer";
import LongFooter from "../components/LongFooter";

export default function AboutPage() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <About />
      <Products />
      <LongFooter />
      <Footer />
    </div>
  );
}
