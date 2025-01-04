// src/components/NewsCard.js
import React from 'react';

const NewsCard = ({ article }) => {
  const { urlToImage, title, description, source, publishedAt, url } = article;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>{source.name}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
    