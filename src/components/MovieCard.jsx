import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster with gradient overlay */}
      <div className="relative">
        <img
          src={movie.poster || "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.title}
          className="w-full h-[300px] object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80"></div>
        
        {/* Quality badge */}
        {movie.quality && (
          <span className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
            {movie.quality}
          </span>
        )}
      </div>

      {/* Movie info - always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-md font-bold truncate">{movie.title}</h3>
        <div className="flex items-center mt-1">
          <span className="text-xs text-gray-300 mr-2">Free</span>
          <span className="text-xs text-gray-300">•</span>
          <span className="text-xs text-gray-300 ml-2">{movie.year || '2023'}</span>
        </div>
      </div>

      {/* Hover overlay with additional details */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-between p-4 transition-opacity">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">{movie.title}</h3>
            <p className="text-xs text-gray-300 line-clamp-3 mb-3">
              {movie.description || 'No description available'}
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-xs text-white">{movie.rating || '8.0'}/10</span>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-2 rounded-full flex items-center transition-colors">
              Watch
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
