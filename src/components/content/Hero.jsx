import Logo from "../../assets/logo/favicon.svg";
import wordMark from "../../assets/logo/wordmark.svg";
import Content from "../utils/Content";
import wave1 from "../../assets/buffer/wave1.png";
import wave2 from "../../assets/buffer/wave2.png";
import foam1 from "../../assets/buffer/foam1.png";
import foam2 from "../../assets/buffer/foam2.png";
import bush from "../../assets/buffer/bush.png";
import umbrella from "../../assets/flair/umbrella.png";

const Hero = () => {
  return (
    <Content id="hero">
      <div className="beach cflex">
        <img src={bush} className="bush stg ud" style={{ "--i": 20 }} alt="" />
        <div className="hero-cnt">
          <div className="logo-mark cflex">
            <img src={Logo} className="logo stg rl" style={{ "--i": 15 }} />
            <div className="logo-mark-word cflex">
              <img
                src={wordMark}
                className="wordmark stg ud"
                style={{ "--i": 16 }}
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
        <div className="hero-cnt">
          {" "}
          <div className="flair-hero">
            <img
              src={umbrella}
              className="hero-umb stg lr"
              style={{ "--i": 18 }}
            />
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
