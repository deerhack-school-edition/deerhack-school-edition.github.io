import React, { useState, useEffect, useRef } from "react";
import whaleLarge from "../../assets/flair/whale-animated-large.svg";
import whalePhone from "../../assets/flair/whale-animated-phone.svg";

const Sponsors = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "250px 0px", // Preload 250px before entering viewport
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="content-section cflex" id="sponsors" ref={sectionRef}>
      {/* Animated Whale Background: only runs animation when section is in view to eliminate performance lag */}
      <picture className="sponsors-whale-bg">
        {isInView && (
          <>
            <source media="(max-width: 768px)" srcSet={whalePhone} />
            <img
              src={whaleLarge}
              alt=""
              className="sponsors-whale-svg"
              aria-hidden="true"
              loading="eager"
            />
          </>
        )}
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