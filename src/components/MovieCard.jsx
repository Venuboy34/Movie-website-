import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-2 py-2">
        <h3 className="text-sm text-white font-semibold truncate group-hover:text-filmzi-accent transition">
          {movie.title}
        </h3>
      </div>
    </Link>
  )
}

export default MovieCard
