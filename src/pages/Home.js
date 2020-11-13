import React from "react";

import NavigationBar from "../components/NavBar";
import Main from "../components/Main";
import Notes from "../components/Notes";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Main />
      <Notes />
      <Footer />
    </div>
  );
}
