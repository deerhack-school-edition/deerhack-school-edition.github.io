import React, { useState, useEffect, useRef } from "react";
import scheduleLarge from "../../assets/flair/schedule.svg";
import schedulePe from "../../assets/flair/schedule-pe.svg";

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
      {/* Responsive Schedule: Only renders animated SVG when section is in view to eliminate performance lag */}
      <picture className="schedule-picture">
        {isInView ? (
          <>
            <source media="(max-width: 768px)" srcSet={schedulePe} />
            <img
              src={scheduleLarge}
              alt="DeerHack Schedule"
              className="schedule-svg"
              loading="eager"
            />
          </>
        ) : (
          <div className="schedule-svg-placeholder" aria-hidden="true" />
        )}
      </picture>
    </section>
  );
};

export default Schedule;
