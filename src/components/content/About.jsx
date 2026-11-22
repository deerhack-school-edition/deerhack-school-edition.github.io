import React from "react";
import Wave2Dep from "../../assets/buffer/wave2dep.webp";
import SET from "../utils/SEtrans";
import star from "../../assets/flair/starfish.webp";

const About = () => {
  return (
    <div className="content-section cflex" id="about">
      <img src={Wave2Dep} className="wave2dep" />
      <div className="about-cnt cflex" id="abt-cnt-1">
        <h1 className="scroll stg ud about-h1" style={{ "--i": 1 }}>
          What Is <br /> DeerHack
        </h1>
        <p className="scroll stg lr about-p" style={{ "--i": 2 }}>
          Deerhack is an intense 8-hour hackathon where participants challenge
          themselves to innovate and develop projects within a concentrated
          timeframe. It’s an exciting opportunity for creators to bring their
          ideas to life, collaborate, and push the boundaries of their skills
          over the course of two days.
        </p>
      </div>
      <div className="about-cnt" id="abt-cnt-2">
        <SET className="scroll stg sc1 ud" i={3}>
          <img src={star} className="star-pos star-1" />
        </SET>
        <SET className="scroll stg sc2 ud" i={4}>
          <img src={star} className="star-pos star-2" />
        </SET>
        <SET className="scroll stg sc3 lr" i={5}>
          <img src={star} className="star-pos star-3" />
        </SET>
        {/**/}
        <SET className="scroll stg bi visual-board" i={2}>
          <div className="vb-img"></div>
        </SET>
        {/**/}
        <SET className="scroll stg sc4 du" i={3}>
          <img src={star} className="star-pos star-4" />
        </SET>
        <SET className="scroll stg sc5 rl" i={4}>
          <img src={star} className="star-pos star-5" />
        </SET>
        <SET className="scroll stg sc6 lr" i={5}>
          <img src={star} className="star-pos star-6" />
        </SET>
      </div>
    </div>
  );
};

export default About;
