import './App.css';
import Logo from './Logo.js';
import Menu from './Menu/Menu';
import socials from './images/socials.PNG';

const Footer = () => {

  return (
    <div className="footer-area">
      <div className="footer-container">
        <div className="footer-box-one">
          <div className="footer-logo-container">
            <Logo />
          </div>
          <div className="footer-box-one-text-container">
            Audiophile is an all in one stop to fulfill
            your audio needs. We're a small team of music
            lovers and sound specialists who are devoted to
            helping you get the most out of personal audio.
            Come and visit our demo facility
            - we’re open 7 days a week
          </div>
          <div className="footer-box-copyright-container">
            Copyright 2021. All Rights Reserved
          </div>
        </div>

        <div className="footer-box-two">
          <div className="footer-menu-container">
            <Menu />
          </div>
          <div className="footer-socials-container">
            <img className="social-image" src={socials} alt="socials" />
          </div>
        </div>
      </div></div>
  );
};

export default Footer;