import React, { useState } from 'react';

const NewsCard = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 m-4">
      <img className="w-full h-48 object-cover" src={news.urlToImage} alt={news.title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{news.title}</h2>
        <p className="text-gray-700">{news.author} - {new Date(news.publishedAt).toLocaleDateString()}</p>
        {expanded ? (
          <>
            <p className="text-gray-700 mt-4">{news.description}</p>
            <p className="text-gray-700 mt-4">{news.content}</p>
            <button
              className="mt-4 text-blue-500"
              onClick={() => setExpanded(false)}
            >
              Mostrar menos información
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-700 mt-4">{news.description.substring(0, 100)}...</p>
            <button
              className="mt-4 text-blue-500"
              onClick={() => setExpanded(true)}
            >
              Mostrar más información
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
