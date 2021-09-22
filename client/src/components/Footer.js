import React from "react";
import { Button } from "./Button.js";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          <i class="fas fa-copyright"></i>-2021 || Petfinder
          <i class="fas fa-envelope"></i>
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
          </p>

          <div className="footer-social -subscription-heading">
            <i class="fab fa-instagram"></i> &nbsp;&nbsp;
            <i class="fab fa-facebook"></i> &nbsp;&nbsp;
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
