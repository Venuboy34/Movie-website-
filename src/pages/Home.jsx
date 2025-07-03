import React from 'react'
import { useMovies } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const { allMovies, loading, error } = useMovies()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-filmzi-accent"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-filmzi-accent mb-4">Error</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* All Movies Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className="text-2xl mr-3">🎬</span>
          <h2 className="text-3xl font-bold text-filmzi-text">All Movies</h2>
        </div>
        {allMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No movies available</p>
          </div>
        )}
      </section>

      {/* Welcome Section */}
      <section className="text-center py-16 bg-gray-900 rounded-lg">
        <h1 className="text-4xl font-bold text-filmzi-accent mb-4">Welcome to Filmzi</h1>
        <p className="text-xl text-gray-300 mb-8">
          Your ultimate destination for ad-free movie streaming and downloads
        </p>
        <div className="flex justify-center space-x-8 text-gray-400">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🎥</span>
            <span>High Quality</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🚫</span>
            <span>No Ads</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">⬇️</span>
            <span>Download</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
