// src/App.js
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '@/components/NewsCard';

const API_KEY = '3dbfd46da35947e797172c4d07741814';
const BASE_URL = 'https://newsapi.org/v2/everything';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            q: 'real estate',
            language: 'en',
            sortBy: 'publishedAt',
            domains: 'economictimes.indiatimes.com,livemint.com,business-standard.com',
            apiKey: API_KEY,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <h1 className="text-center text-3xl font-bold">Real Estate News</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700 text-lg">
            Loading news, please wait...
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
