import React from "react";

import NavigationBar from "../components/NavBar";
import Main from "../components/Main";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
export default () => {
  return (
    <div>
      <NavigationBar />
      <Main />
      <ComingSoon />
      <Footer />
    </div>
  );
};
