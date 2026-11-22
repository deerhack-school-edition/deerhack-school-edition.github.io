import logo from "../../assets/logo/favicon.svg";
import wordmark from "../../assets/logo/wordmark-straight.svg";
import { useEffect, useRef, useState, useCallback } from "react";

const Navigation = () => {
  const navbarRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Use requestAnimationFrame-throttled scroll handler to avoid forced reflows
  const lastScrollTopRef = useRef(0);
  const ticking = useRef(false);

  const updateNavbar = useCallback(() => {
    const currentScroll = window.scrollY;
    if (!navbarRef.current) return;
    navbarRef.current.style.top =
      currentScroll > lastScrollTopRef.current ? "-100px" : "10px";
    lastScrollTopRef.current = Math.max(0, currentScroll);
    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateNavbar);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateNavbar]);

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
            width={40}
            height={40}
          />
          <img
            src={wordmark}
            className="nav-mark lr stg"
            style={{ "--i": 18 }}
            alt="Wordmark"
            width={120}
            height={20}
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
