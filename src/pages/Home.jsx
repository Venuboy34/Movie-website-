import React, { useState } from 'react'
import { useMovies } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const { movies, loading } = useMovies()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Movie</h1>
        <p className="text-md md:text-lg mb-6">Search from 150+ HD movies</p>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full p-3 rounded-lg text-black focus:outline-none"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex justify-center space-x-4 mt-4 text-sm">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">⭐ HD Quality</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">⚡ Instant</span>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-black">All Movies</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading movies...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
