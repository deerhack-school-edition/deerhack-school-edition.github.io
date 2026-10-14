import React from "react";
import Hero from "./content/Hero.jsx";
import Scroll from "./utils/Scroll.jsx";
const Webpage = () => {
  return (
    <>
      <Scroll>
        <Hero />
      </Scroll>
    </>
  );
};

export default Webpage;
