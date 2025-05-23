import React from "react";
import "./Header.css";

const Header = ({ onLanguageSelect, onToggleDarkMode, isDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? "dark" : ""}`}>
      <div className="logo">📰 News Portal</div>
      <div className="header-controls">
        <button onClick={() => onLanguageSelect("english")}>English</button>
        <button onClick={() => onLanguageSelect("hindi")}>हिन्दी</button>
        <button className="dark-toggle" onClick={onToggleDarkMode}>
          {isDarkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;
