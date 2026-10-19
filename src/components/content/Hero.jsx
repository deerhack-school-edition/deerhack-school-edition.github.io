import Logo from "../../assets/logo.svg";
import wordMark from "../../assets/wordmark.svg";
import Content from "../utils/Content";
import wave1 from "../../assets/wave1.png";
import foam1 from "../../assets/foam1.png";

const Hero = () => {
  return (
    <Content id="hero">
      <div className="logo-mark cflex">
        <img src={Logo} className="logo stg rl" style={{ "--i": 15 }} />
        <div className="logo-mark-word cflex">
          <img
            src={wordMark}
            className="wordmark stg ud"
            style={{ "--i": 16 }}
          />
          <span className="hero-logo-mark-indi stg du" style={{ "--i": 17 }}>
            school edition 2026
          </span>
        </div>
      </div>
      <div className="stg du login-box cflex" style={{ "--i": 18 }}>
        <h1> Register Now!</h1>
        <button className="btn-alt">
          <a href="https://forms.gle/6F49urM94XsvT6yy9">Click Here!</a>
        </button>
      </div>
    </Content>
  );
};

export default Hero;
