import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Products from "../components/Products";
import Footer from "../components/Footer";
import LongFooter from "../components/LongFooter";

export default function AboutPage() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <Contact />
      <Products />
      <LongFooter />
      <Footer />
    </div>
  );
}
