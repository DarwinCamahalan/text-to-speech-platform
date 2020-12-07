import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import Team from "../components/Team";
import LongFooter from "../components/LongFooter";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <Team />
      <LongFooter />
      <Footer />
    </div>
  );
}
