import React from "react";
import "./Footer.css";

const Footer = ({isDarkMode}) => {
  return (
    <footer className={`footer ${isDarkMode ? "dark" : ""}`}>
      <p>© {new Date().getFullYear()} NewsPulse. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
