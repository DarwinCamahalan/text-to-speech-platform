import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import FaceRecognition from "../components/FaceRecognition";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function FaceRecognitionPage() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <FaceRecognition />
      <Products />
      <Footer />
    </div>
  );
}
