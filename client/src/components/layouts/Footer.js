import React from "react";
import { Button } from "../Button/Button.js";
import "./Footer.css";
import Social from './Social';
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          <i className="fas fa-copyright"></i>-2021 || Petfinder
          <i className="fas fa-envelope"></i>
          <br />
        </p>
        <p classroom="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div classroom="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
          <p classroom="footer-subscription-text">
            Hetvee sakaria - CE055
            <br />
            Ruchita Oza - CE092
          <Social/>
          </p>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
