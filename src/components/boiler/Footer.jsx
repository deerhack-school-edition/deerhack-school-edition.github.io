import deerLogo from "../../assets/logo/deer-logo.webp";
import wordmark from "../../assets/logo/wordmark.svg";
import mascot from "../../assets/flair/mascot.webp";
import bottomTrim from "../../assets/flair/footer-bottom-trim.svg";

const Footer = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    let target = document.getElementById(targetId);
    if (!target && targetId === "prizes") {
      target = document.getElementById("audience");
    }
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <footer className="footer-container">
      {/* Background Decorative Ambient Lighting */}
      <div className="footer-ambient-glow" />

      {/* Main Content Area */}
      <div className="footer-content">
        {/* Left Side Group: Brand Info + Pages Navigation aligned to the left */}
        <div className="footer-left-group">
          {/* Brand & Description & Socials & Copyright on Left */}
          <div className="footer-left-col">
            <div className="footer-brand-header">
              <img
                src={deerLogo}
                alt="DeerHack Logo"
                className="footer-deer-logo"
                width={80}
                height={80}
                loading="lazy"
              />
              <div className="footer-brand-text">
                <img
                  src={wordmark}
                  alt="DEER HACK"
                  className="footer-wordmark-img"
                  width={138}
                  height={69}
                />
                <span className="footer-edition-text">school edition 2026</span>
              </div>
            </div>

            <p className="footer-desc">
              A student-led hackathon by the DSS STEM club in Sifal, Kathmandu,
              empowering school-level innovators to collaborate, code, and build
              solutions for real-world challenges.
            </p>

            {/* Clean Black and White Instagram Icon */}
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/dss_stem_club/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-insta-btn"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="footer-insta-svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5.5"
                    className="footer-insta-rect"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    className="footer-insta-circle"
                  />
                  <circle
                    cx="17.2"
                    cy="6.8"
                    r="1.2"
                    className="footer-insta-dot"
                  />
                </svg>
              </a>
            </div>

            {/* Copyright text placed towards the left, underneath the insta logo, above the line */}
            <p className="footer-copyright">
              © Deerwalk School Edition 2026. All rights reserved.
            </p>
          </div>

          {/* Pages Column - Aligned to the left beside the brand info */}
          <div className="footer-nav-col">
            <h3 className="footer-nav-heading">Pages</h3>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="#hero"
                  className="footer-nav-item"
                  onClick={(e) => handleScrollTo(e, "hero")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="footer-nav-item"
                  onClick={(e) => handleScrollTo(e, "about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#audience"
                  className="footer-nav-item"
                  onClick={(e) => handleScrollTo(e, "audience")}
                >
                  Prizes
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="footer-nav-item"
                  onClick={(e) => handleScrollTo(e, "schedule")}
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="footer-nav-item"
                  onClick={(e) => handleScrollTo(e, "sponsors")}
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mascot on the far right */}
        <div className="footer-mascot-col">
          <img
            src={mascot}
            alt="DeerHack Mascot"
            className="footer-mascot-img"
            width={133}
            height={238}
            loading="lazy"
          />
        </div>
      </div>

      {/* Divider Line */}
      <div className="footer-divider-line" />

      {/* Decorative Starry Foam Trim Strip at bottom of footer after the line */}
      <div className="footer-bottom-trim-wrap">
        <img
          src={bottomTrim}
          alt=""
          className="footer-bottom-trim-img"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
