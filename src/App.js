import React, { useState } from "react";
import Header from "./components/Header";
import EnglishNews from "./components/EnglishNews";
import HindiNews from "./components/HindiNews";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("english");

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = !isDarkMode ? "#121212" : "#ffffff";
    document.body.style.color = !isDarkMode ? "#ffffff" : "#000000";
  };

  const renderNewsComponent = () => {
    if (language === "english") return <EnglishNews isDarkMode={isDarkMode}/>;
    if (language === "hindi") return <HindiNews isDarkMode={isDarkMode}/>;
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : ""}`}>
      <Header
        onLanguageSelect={setLanguage}
        onToggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
      />
      {renderNewsComponent()}
      <Footer/>
    </div>
  );
}

export default App;
