import React, { useState } from 'react'
import { useMovies } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const { allMovies, loading, error } = useMovies()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-filmzi-accent"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 bg-black">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen px-4 py-8">
      {/* Logo + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-extrabold text-filmzi-accent">Filmzi</h1>
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full md:w-96 px-4 py-2 rounded-md text-black outline-none shadow-md"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Section Title */}
      <div className="bg-gray-800 px-4 py-3 rounded-md shadow mb-6 border-l-4 border-red-500">
        <h2 className="text-2xl font-bold">🎬 Latest Releases</h2>
      </div>

      {/* Movies Grid */}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-12">
          No movies match your search.
        </div>
      )}
    </div>
  )
}

export default Home
