import React, { useEffect, useState } from "react";
import "./NewsList.css";

const API_KEY = "a765b878009219893ee4436ee8d17e55"; 

const NewsList = ({ country="in", category, language }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const lang = language === "hindi" ? "hi" : "en";
      const url = `https://gnews.io/api/v4/top-headlines?lang=${lang}&country=${country}&topic=${category}&apikey=${API_KEY}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setArticles([]);
      }
    };

    fetchNews();
  }, [country, category, language]);

  return (
    <div className="news-list">
      {articles.length === 0 ? (
        <p>No news found.</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.image} alt="news" />
            <div className="news-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;
