// src/components/LoadingCard.js
import React from 'react';
import '@/css/LoadingCard.css'; // Skeleton loader styles

const LoadingCard = () => {
  return (
    <div className="loading-card">
      <div className="loading-image"></div>
      <div className="loading-content">
        <div className="loading-title"></div>
        <div className="loading-description"></div>
        <div className="loading-description"></div>
        <div className="loading-footer"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
