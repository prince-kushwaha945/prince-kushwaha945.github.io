import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import MyPortfolio from "./components/MyPortfolio";
import SkillsExp from "./components/SkillsExp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <SkillsExp />
      <Hireme />
      <MyPortfolio />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
