import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Lex<span>One</span></h3>
        <p className="footer-text">
          © {new Date().getFullYear()} LexOne. All rights reserved.
        </p>
        <div className="footer-socials">
          <a href="https://facebook.com" className="social-link"><FaFacebook /></a>
          <a href="https://twitter.com" className="social-link"><FaTwitter /></a>
          <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
