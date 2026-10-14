import Logo from "../../assets/logo.svg";
import wordMark from "../../assets/wordmark.svg";
import Content from "../utils/Content";

const Hero = () => {
  return (
    <Content id="hero">
      <div className="logo-mark cflex">
        <img src={Logo} className="logo" />
        <div className="logo-mark-word cflex">
          <img src={wordMark} className="wordmark" />
          <span className="hero-logo-mark-indi">school edition 2026</span>
        </div>
      </div>
    </Content>
  );
};

export default Hero;
