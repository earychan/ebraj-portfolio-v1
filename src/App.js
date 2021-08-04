import React from "react";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Home from "./components/Home";
import Intro from "./components/Intro";
// import Projects from "./components/Projects";
import Projectss from "./components/Projectss";

// Importing the Components

const App = () => {
  return (
    <>
      <Home />
      <Projectss />
      <Intro />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default App;
