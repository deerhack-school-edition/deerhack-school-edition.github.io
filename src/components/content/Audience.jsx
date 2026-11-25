import React from "react";
import aboutPaper from "../../assets/buffer/about-paper.webp";

const Audience = () => {
  return (
    <div className="content-section cflex" id="audience">
      <img
        src={aboutPaper}
        className="audience-top-edge"
        decoding="async"
        alt=""
        width={860}
        height={90}
        aria-hidden="true"
      />
      <h1 className="scroll stg ud" style={{ "--i": 1 }}>
        Who is <br /> DeerHack for
      </h1>
      <p className="scroll stg du" style={{ "--i": 2 }}>
        Deerhack is an intense 8-hour hackathon where participants challenge
        themselves to innovate and develop projects within a concentrated
        timeframe. It’s an exciting opportunity for creators to bring their
        ideas to life, collaborate, and push the boundaries of their skills over
        the course of two days.
      </p>
    </div>
  );
};

export default Audience;
