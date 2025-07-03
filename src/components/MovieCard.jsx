import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group block bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {/* Poster */}
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Title */}
      <div className="px-2 py-3">
        <h3 className="text-sm font-medium text-white truncate group-hover:text-filmzi-accent transition">
          {movie.title}
        </h3>
      </div>
    </Link>
  )
}

export default MovieCard
