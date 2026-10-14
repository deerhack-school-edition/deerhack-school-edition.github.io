import React from "react";
import Hero from "./content/Hero.jsx";
import Navigation from "./boiler/Navigation.jsx";
import Scroll from "./utils/Scroll.jsx";
const Webpage = () => {
  return (
    <>
      <Scroll>
        <Navigation />
        <Hero />
      </Scroll>
    </>
  );
};

export default Webpage;
