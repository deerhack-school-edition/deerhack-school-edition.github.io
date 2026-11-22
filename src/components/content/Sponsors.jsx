import React from "react";
import whaleLarge from "../../assets/flair/whale-animated-large.svg";
import whalePhone from "../../assets/flair/whale-animated-phone.svg";

const Sponsors = () => {
  return (
    <div className="content-section cflex" id="sponsors">
      {/* Animated Whale Background: automatically switched by screen size */}
      <picture className="sponsors-whale-bg">
        <source media="(max-width: 768px)" srcSet={whalePhone} />
        <img
          src={whaleLarge}
          alt=""
          className="sponsors-whale-svg"
          aria-hidden="true"
        />
      </picture>

      <h1 className="scroll stg ud" style={{ "--i": 1 }}>
        Sponsors
      </h1>
      <br />
      <p className="scroll stg du" style={{ "--i": 2 }}>
        Coming soon...
      </p>
    </div>
  );
};

export default Sponsors;