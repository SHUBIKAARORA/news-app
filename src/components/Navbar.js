import React from "react";
import "./Navbar.css";

const categories = [
  "general",
  "business",
  "health",
  "technology",
  "entertainment",
  "science",
  "sports",
];

const Navbar = ({ onCategoryChange,selectedCategory }) => {
  return (
    <nav className="navbar">
      {categories.map((cat) => (
        <a
          key={cat}
          href="#"
          className={selectedCategory === cat ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            onCategoryChange(cat);}}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
