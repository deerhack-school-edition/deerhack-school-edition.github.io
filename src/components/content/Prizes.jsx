import React, { useState, useEffect, useRef } from "react";
import coralBg from "../../assets/buffer/coral-bg.webp";
import coralWallLeft from "../../assets/buffer/coral-wall-left.webp";
import coralWallRight from "../../assets/buffer/coral-wall-right.webp";
import frostedOverlay from "../../assets/prizes/08_frosted_glass_overlay.svg";
import chestImg from "../../assets/prizes/chest.webp";
import coin1 from "../../assets/prizes/14_3d_coin_1.svg";
import coin2 from "../../assets/prizes/15_3d_coin_2.svg";
import coin3 from "../../assets/prizes/16_3d_coin_3.svg";
import stickerBranch from "../../assets/prizes/sticker-branch.webp";
import stickerMascot from "../../assets/prizes/sticker-mascot.webp";

const Prizes = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "250px 0px",
        threshold: 0,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="content-section cflex" id="prize" ref={sectionRef}>
      {isInView ? (
        <div className="prizes-stage">
          <img
            src={coralBg}
            alt=""
            className="prize-layer"
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
          <img
            src={frostedOverlay}
            alt=""
            className="prize-layer"
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
          <img
            src={coralWallLeft}
            alt=""
            className="prize-wall prize-wall-left"
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
          <img
            src={coralWallRight}
            alt=""
            className="prize-wall prize-wall-right"
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />

          <div className="prizes-canvas">
            <img
              src={chestImg}
              alt="Grand prize Rs. 50,000 and stickers treasure chest"
              className="prize-chest"
              width={420}
              height={520}
              loading="eager"
              decoding="async"
            />

            <p className="prize-stickers-text">
              &amp;
              <br />
              stickers
            </p>

            {/* Animated floating coins and stickers */}
            <img
              src={coin1}
              alt=""
              className="prize-layer prize-anim prize-coin-1"
              aria-hidden="true"
              loading="eager"
            />
            <img
              src={coin2}
              alt=""
              className="prize-layer prize-anim prize-coin-2"
              aria-hidden="true"
              loading="eager"
            />
            <img
              src={coin3}
              alt=""
              className="prize-layer prize-anim prize-coin-3"
              aria-hidden="true"
              loading="eager"
            />
            <img
              src={stickerMascot}
              alt=""
              className="prize-sticker prize-anim prize-sticker-plane"
              width={139}
              height={115}
              aria-hidden="true"
              loading="eager"
            />
            <img
              src={stickerBranch}
              alt=""
              className="prize-sticker prize-anim prize-sticker-mascot"
              width={143}
              height={96}
              aria-hidden="true"
              loading="eager"
            />
          </div>
          <h1 className="prize-title">Prizes</h1>
        </div>
      ) : (
        <div className="prizes-placeholder" aria-hidden="true" />
      )}
    </section>
  );
};

export default Prizes;
