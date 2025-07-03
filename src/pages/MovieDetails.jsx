import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMovies } from '../context/MovieContext'

const MovieDetails = () => {
  const { id } = useParams()
  const { fetchMovie } = useMovies()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true)
        const movieData = await fetchMovie(id)
        setMovie(movieData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadMovie()
  }, [id, fetchMovie])

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

  if (!movie) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-filmzi-accent mb-4">Movie Not Found</h2>
          <Link to="/" className="text-filmzi-accent hover:text-filmzi-hover">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Movie Poster */}
        <div className="lg:col-span-1">
          <img 
            src={movie.thumbnail_url} 
            alt={movie.title}
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        {/* Movie Details */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-filmzi-text mb-4">{movie.title}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            {movie.is_hero && (
              <span className="bg-filmzi-accent text-white px-3 py-1 rounded-full text-sm">
                Featured
              </span>
            )}
            {movie.is_latest && (
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                Latest
              </span>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-filmzi-text mb-4">Description</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{movie.details}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              to={`/watch/${movie.id}`}
              className="flex items-center justify-center bg-filmzi-accent hover:bg-filmzi-hover text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <span className="mr-2">▶</span>
              Watch Online
            </Link>
            <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              <span className="mr-2">⬇</span>
              Download
            </button>
          </div>

          {/* Download Options */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-filmzi-text mb-4">Download Options</h3>
            <div className="space-y-3">
              {movie.video_link_480p && (
                <a 
                  href={movie.video_link_480p}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors"
                >
                  <span className="text-filmzi-text">480p Quality</span>
                  <span className="text-filmzi-accent">⬇ Download</span>
                </a>
              )}
              {movie.video_link_720p && (
                <a 
                  href={movie.video_link_720p}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors"
                >
                  <span className="text-filmzi-text">720p Quality</span>
                  <span className="text-filmzi-accent">⬇ Download</span>
                </a>
              )}
              {movie.video_link_1080p && (
                <a 
                  href={movie.video_link_1080p}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors"
                >
                  <span className="text-filmzi-text">1080p Quality</span>
                  <span className="text-filmzi-accent">⬇ Download</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
