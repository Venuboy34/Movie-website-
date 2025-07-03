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
    <div className="bg-black min-h-screen text-white px-4 py-6">
      {/* Logo & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-4xl font-extrabold text-filmzi-accent tracking-wide">Filmzi</h1>
        <input
          type="text"
          placeholder="Search here..."
          className="w-full sm:w-80 px-4 py-2 rounded-md text-black outline-none"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Section Title */}
      <div className="bg-gray-800 px-4 py-2 rounded mb-4 border-l-4 border-yellow-400">
        <h2 className="text-xl font-semibold">🎬 Latest Releases</h2>
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">No matching movies found.</p>
        )}
      </div>
    </div>
  )
}

export default Home
