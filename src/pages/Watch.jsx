import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMovies } from '../context/MovieContext'
import VideoPlayer from '../components/VideoPlayer'

const Watch = () => {
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
    <div className="min-h-screen bg-filmzi-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to={`/movie/${movie.id}`}
            className="inline-flex items-center text-filmzi-accent hover:text-filmzi-hover transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Movie Details
          </Link>
        </div>

        {/* Movie Title */}
        <h1 className="text-3xl font-bold text-filmzi-text mb-8">{movie.title}</h1>

        {/* Video Player */}
        <div className="mb-8">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <VideoPlayer 
              src={movie.video_link_720p || movie.video_link_1080p || movie.video_link_480p}
              poster={movie.thumbnail_url}
            />
          </div>
        </div>

        {/* Movie Info */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-filmzi-text mb-4">About This Movie</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{movie.details}</p>
          
          <div className="flex items-center space-x-4">
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
        </div>

        {/* Quality Options */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-filmzi-text mb-4">Available Quality Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {movie.video_link_480p && (
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h4 className="text-filmzi-text font-semibold mb-2">480p</h4>
                <p className="text-gray-400 text-sm">Standard Quality</p>
              </div>
            )}
            {movie.video_link_720p && (
              <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-filmzi-accent">
                <h4 className="text-filmzi-accent font-semibold mb-2">720p</h4>
                <p className="text-gray-400 text-sm">HD Quality (Currently Playing)</p>
              </div>
            )}
            {movie.video_link_1080p && (
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h4 className="text-filmzi-text font-semibold mb-2">1080p</h4>
                <p className="text-gray-400 text-sm">Full HD Quality</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch
