import React from "react";

import NavigationBar from "../components/NavBar";
import FaceRecognition from "../components/FaceRecognition";
import Footer from "../components/Footer";

export default function FaceRecognitionPage() {
  return (
    <div>
      <NavigationBar />
      <FaceRecognition />
      <Footer />
    </div>
  );
}
