import React, { useState, useEffect, useRef } from "react";
import whaleLarge from "../../assets/flair/whale-animated-large.svg";
import whalePhone from "../../assets/flair/whale-animated-phone.svg";
import deerwalkLogo from "../../assets/sponsors/deerwalk.webp";
import mediaPartnerLogo from "../../assets/sponsors/media-partner.svg";
import restaurantPartnerLogo from "../../assets/sponsors/restaurant-partner.webp";
import foodsPartnerLogo from "../../assets/sponsors/foods-partner.webp";
import learningPartnerLogo from "../../assets/sponsors/learning-partner.webp";
import domainPartnerLogo from "../../assets/sponsors/domain-partner.webp";

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
      <div className="sponsors-grid scroll stg du" style={{ "--i": 2 }}>
        <img
          src={deerwalkLogo}
          alt="Deerwalk"
          className="sponsor-logo"
          width={449}
          height={100}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
      <div className="partners-row">
        <div className="partner-group">
          <h2 className="sponsors-subheading scroll stg ud" style={{ "--i": 3 }}>
            Media Partner
          </h2>
          <div className="sponsors-grid scroll stg du" style={{ "--i": 4 }}>
            <img
              src={mediaPartnerLogo}
              alt="Media Partner"
              className="sponsor-logo sponsor-logo-square"
              width={513}
              height={513}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
        <div className="partner-group">
          <h2 className="sponsors-subheading scroll stg ud" style={{ "--i": 3 }}>
            Restaurant Partner
          </h2>
          <div className="sponsors-grid scroll stg du" style={{ "--i": 4 }}>
            <img
              src={restaurantPartnerLogo}
              alt="109 Express"
              className="sponsor-logo sponsor-logo-restaurant"
              width={112}
              height={54}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
        <div className="partner-group">
          <h2 className="sponsors-subheading scroll stg ud" style={{ "--i": 3 }}>
            Foods Partner
          </h2>
          <div className="sponsors-grid scroll stg du" style={{ "--i": 4 }}>
            <img
              src={foodsPartnerLogo}
              alt="Deerwalk Foods"
              className="sponsor-logo sponsor-logo-foods"
              width={1024}
              height={346}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
        <div className="partner-group">
          <h2 className="sponsors-subheading scroll stg ud" style={{ "--i": 3 }}>
            Learning Partner
          </h2>
          <div className="sponsors-grid scroll stg du" style={{ "--i": 4 }}>
            <img
              src={learningPartnerLogo}
              alt="Deerwalk Training Center"
              className="sponsor-logo sponsor-logo-learning"
              width={279}
              height={99}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
        <div className="partner-group">
          <h2 className="sponsors-subheading scroll stg ud" style={{ "--i": 3 }}>
            Domain Partner
          </h2>
          <div className="sponsors-grid scroll stg du" style={{ "--i": 4 }}>
            <img
              src={domainPartnerLogo}
              alt=".xyz"
              className="sponsor-logo sponsor-logo-domain"
              width={300}
              height={175}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;