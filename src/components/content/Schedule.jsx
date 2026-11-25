import React, { useState, useEffect, useRef } from "react";
// Desktop Layers
import scheduleBg from "../../assets/flair/schedule-bg.svg";
import scheduleFx from "../../assets/flair/schedule-fx.svg";
import scheduleNotes from "../../assets/flair/schedule-notes.svg";
// Mobile (PE) Layers
import schedulePeBg from "../../assets/flair/schedule-pe-bg.svg";
import schedulePeFx from "../../assets/flair/schedule-pe-fx.svg";
import schedulePeNotes from "../../assets/flair/schedule-pe-notes.svg";

const Schedule = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "250px 0px", // Preload 250px before entering viewport for smooth scrolling
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="content-section cflex" id="schedule" ref={sectionRef}>
      {isInView ? (
        <div className="schedule-container">
          {/*
           * Desktop Multi-Layer Stack:
           * Separates static background paper from animating notes and bubble FX.
           * Each layer is independently rendered on its own GPU composited surface.
           */}
          <div className="schedule-desktop-stack">
            {/* Layer 1: 100% Static Background Paper (Cached in GPU, 0 calculations per frame) */}
            <img
              src={scheduleBg}
              alt=""
              className="schedule-layer schedule-layer-bg"
              aria-hidden="true"
              loading="eager"
            />

            {/* Layer 2: Ambient Bubbles & Particles (Lightweight FX layer) */}
            <img
              src={scheduleFx}
              alt=""
              className="schedule-layer schedule-layer-fx"
              aria-hidden="true"
              loading="eager"
            />

            {/* Layer 3: Floating Schedule Notes & Title */}
            <img
              src={scheduleNotes}
              alt="DeerHack Schedule"
              className="schedule-layer schedule-layer-notes"
              draggable={false}
              loading="eager"
            />
          </div>

          {/*
           * Mobile Multi-Layer Stack (PE):
           * Same decoupled multi-layer architecture for mobile phones:
           * Static paper is cached in GPU memory; FX & notes animate on separate surfaces.
           */}
          <div className="schedule-mobile-stack">
            {/* Layer 1: Static Background Paper for Mobile */}
            <img
              src={schedulePeBg}
              alt=""
              className="schedule-pe-layer schedule-pe-layer-bg"
              aria-hidden="true"
              loading="eager"
            />

            {/* Layer 2: Ambient Bubbles & Particles for Mobile */}
            <img
              src={schedulePeFx}
              alt=""
              className="schedule-pe-layer schedule-pe-layer-fx"
              aria-hidden="true"
              loading="eager"
            />

            {/* Layer 3: Floating Schedule Notes & Title for Mobile */}
            <img
              src={schedulePeNotes}
              alt="DeerHack Schedule"
              className="schedule-pe-layer schedule-pe-layer-notes"
              draggable={false}
              loading="eager"
            />
          </div>
        </div>
      ) : (
        <div className="schedule-svg-placeholder" aria-hidden="true" />
      )}
    </section>
  );
};

export default Schedule;
