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
          width={1920}
          height={200}
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
                width={200}
                height={40}
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
                width={80}
                height={80}
              />
            </SET>
            <SET className="hero-crab lr" i={19}>
              <img
                fetchPriority="high"
                src={crab}
                className="hero-crab-img"
                alt=""
                width={60}
                height={60}
              />
            </SET>
            <SET className="hero-stone lr" i={18}>
              <img
                fetchPriority="high"
                src={stone}
                className="hero-stone-img1"
                alt=""
                width={30}
                height={30}
              />
              <img
                fetchPriority="high"
                src={stone}
                className="hero-stone-img2"
                alt=""
                width={30}
                height={30}
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
          width={1920}
          height={500}
        />
        <img
          src={wave1}
          id="wave1"
          className="wave stg du"
          style={{ "--i": 20 }}
          alt=""
          width={1920}
          height={375}
        />
        <img
          src={foam2}
          id="foam2"
          className="wave stg du"
          style={{ "--i": 19 }}
          alt=""
          width={1920}
          height={250}
        />
        <img
          src={wave2}
          id="wave2"
          className="wave stg du"
          style={{ "--i": 18 }}
          alt=""
          width={1920}
          height={200}
        />
      </div>
    </Content>
  );
};

export default Hero;
