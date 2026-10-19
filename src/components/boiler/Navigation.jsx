import logo from "../../assets/favicon.svg";
import wordmark from "../../assets/wordmark-straight.svg";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const navbarRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!navbarRef.current) return;
      navbarRef.current.style.top =
        currentScroll > lastScrollTop ? "-100px" : "10px";
      lastScrollTop = Math.max(0, currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navbarRef}
      className="nav-bar cflex ud stg"
      style={{ "--i": 15 }}
    >
      <div className="nav-left cflex">
        <a href="#hero" className="cflex" style={{ gap: "0.3rem" }}>
          <img
            src={logo}
            alt="Logo"
            className="nav-img lr stg"
            style={{ "--i": 17 }}
          />
          <img
            src={wordmark}
            className="nav-mark lr stg"
            style={{ "--i": 18 }}
            alt="Wordmark"
          />
        </a>
      </div>
      <button
        className={`nav-toggle ${open && "open"}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`nav-right cflex ${open && "show"}`}>
        <a
          href="https://forms.gle/6F49urM94XsvT6yy9"
          className="nav-link stg"
          style={{ "--i": 19 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Register now!</h2>
        </a>
      </div>
    </header>
  );
};
export default Navigation;
