import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105">
        <img 
          src={movie.thumbnail_url} 
          alt={movie.title}
          className="w-full h-72 object-cover group-hover:opacity-75 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg mb-2">{movie.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2">{movie.details}</p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-white font-semibold truncate">{movie.title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
