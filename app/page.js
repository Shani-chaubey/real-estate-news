"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "@/components/NewsCard";
import LoadingCard from "@/components/LoadingCard";

const API_KEY = "3dbfd46da35947e797172c4d07741814"; // Replace with your actual API key
const BASE_URL = "https://newsapi.org/v2/everything";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // Start with 12 news
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            q: "real estate",
            language: "en",
            sortBy: "publishedAt",
            domains:
              "economictimes.indiatimes.com,livemint.com,business-standard.com",
            apiKey: API_KEY,
          },
        },{
          headers: {
            'Accept': 'application/json', // Adjust based on API requirements
            'API-Version': '1.0', // If versioning is required
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 12); // Load 12 more news on each click
  };

  return (
    <div>
      <header>
        <h1>Real Estate News</h1>
      </header>
      <main className="container">
        {loading ? (
          <div className="grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid">
              {articles.slice(0, visibleCount).map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
            {visibleCount < articles.length && (
              <div className="show-more-container">
                <button className="show-more-button" onClick={handleShowMore}>
                  Show More
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
