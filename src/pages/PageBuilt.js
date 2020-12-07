import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import BeingBuilt from "../components/BeingBuilt";
import Products from "../components/Products";
import LongFooter from "../components/LongFooter";
import Footer from "../components/Footer";

export default function PageBuilt() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <BeingBuilt />
      <Products />
      <LongFooter />
      <Footer />
    </div>
  );
}
