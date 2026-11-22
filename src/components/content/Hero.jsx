import Logo from "../../assets/logo/favicon.svg";
import wordMark from "../../assets/logo/wordmark.svg";
import Content from "../utils/Content";
import wave1 from "../../assets/buffer/wave1.webp";
import wave2 from "../../assets/buffer/wave2.webp";
import foam1 from "../../assets/buffer/foam1.webp";
import foam2 from "../../assets/buffer/foam2.webp";
import bush from "../../assets/buffer/bush.webp";
import umbrella from "../../assets/flair/umbrella.webp";
import crab from "../../assets/flair/crab.webp";
import SET from "../utils/SEtrans";
import stone from "../../assets/flair/stone.webp";

const Hero = () => {
  return (
    <Content id="hero">
      <div className="beach cflex">
        <img
          fetchPriority="high"
          src={bush}
          className="bush stg ud"
          style={{ "--i": 20 }}
          alt=""
          width={1440}
          height={238}
        />
        <div className="hero-cnt">
          <div className="logo-mark cflex">
            <img
              fetchPriority="high"
              src={Logo}
              className="logo stg rl"
              style={{ "--i": 15 }}
              alt="DeerHack Logo"
              width={115}
              height={115}
            />
            <div className="logo-mark-word cflex">
              <img
                src={wordMark}
                className="wordmark stg ud"
                style={{ "--i": 16 }}
                alt="DeerHack"
              />
              <span
                className="hero-logo-mark-indi stg du"
                style={{ "--i": 17 }}
              >
                school edition 2026
              </span>
            </div>
          </div>
        </div>
        <div className="hero-cnt" id="hero-flair">
          <div className="flair-hero">
            <SET className="hero-umb lr" i={18}>
              <img
                fetchPriority="high"
                src={umbrella}
                className="hero-umb-img"
                alt=""
              />
            </SET>
            <SET className="hero-crab lr" i={19}>
              <img
                fetchPriority="high"
                src={crab}
                className="hero-crab-img"
                alt=""
              />
            </SET>
            <SET className="hero-stone lr" i={18}>
              <img
                fetchPriority="high"
                src={stone}
                className="hero-stone-img1"
                alt=""
              />
              <img
                fetchPriority="high"
                src={stone}
                className="hero-stone-img2"
                alt=""
              />
            </SET>
          </div>
        </div>
      </div>
      <div className="waves">
        <img
          src={foam1}
          id="foam1"
          className="wave stg du"
          style={{ "--i": 21 }}
          alt=""
        />
        <img
          src={wave1}
          id="wave1"
          className="wave stg du"
          style={{ "--i": 20 }}
          alt=""
        />
        <img
          src={foam2}
          id="foam2"
          className="wave stg du"
          style={{ "--i": 19 }}
          alt=""
        />
        <img
          src={wave2}
          id="wave2"
          className="wave stg du"
          style={{ "--i": 18 }}
          alt=""
        />
      </div>
    </Content>
  );
};

export default Hero;
