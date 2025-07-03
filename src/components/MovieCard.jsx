import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="bg-zinc-900 hover:bg-zinc-800 transition rounded-xl overflow-hidden shadow-md">
      <img
        src={movie.poster || 'https://via.placeholder.com/300x450?text=No+Poster'}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3 space-y-1">
        <h3 className="text-lg font-semibold text-white truncate">{movie.title}</h3>
        <div className="text-sm text-gray-400 flex flex-wrap gap-2">
          {movie.quality_480p && <span className="bg-red-600 px-2 py-0.5 rounded text-white text-xs">480p</span>}
          {movie.quality_720p && <span className="bg-red-600 px-2 py-0.5 rounded text-white text-xs">720p</span>}
          {movie.quality_1080p && <span className="bg-red-600 px-2 py-0.5 rounded text-white text-xs">1080p</span>}
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
