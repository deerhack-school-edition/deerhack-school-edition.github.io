import React from "react";
import Hero from "./content/Hero.jsx";
import Navigation from "./boiler/Navigation.jsx";
import Scroll from "./utils/Scroll.jsx";
import About from "./content/About.jsx";
import Audience from "./content/Audience.jsx";
import Schedule from "./content/Schedule.jsx";
import Sponsors from "./content/Sponsors.jsx";
import Footer from "./boiler/Footer.jsx";
const Webpage = () => {
  return (
    <>
      <Scroll>
        <Navigation />
        <Hero />
        <About />
        <Audience />
        <Schedule />
        <Sponsors />
        <Footer />
      </Scroll>
    </>
  );
};

export default Webpage;
