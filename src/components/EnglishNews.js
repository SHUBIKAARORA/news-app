import React, { useState } from "react";
import Navbar from "./Navbar";
import NewsList from "./NewsList";

const EnglishNews = ({isDarkMode}) => {
  const [category, setCategory] = useState("general");

  return (
    <div className={`news ${isDarkMode ? "dark" : ""}`}>
      <Navbar onCategoryChange={setCategory} selectedCategory={category} />
      <NewsList category={category} language="english" />
    </div>
  );
};

export default EnglishNews;
