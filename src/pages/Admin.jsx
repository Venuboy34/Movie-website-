import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useMovies } from '../context/MovieContext'

const Admin = () => {
  const { isAuthenticated, login, logout } = useAuth()
  const { movies, updateMovie, loading } = useMovies()
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [updatingMovie, setUpdatingMovie] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    const success = login(credentials.username, credentials.password)
    if (success) {
      setError('')
      setCredentials({ username: '', password: '' })
    } else {
      setError('Invalid credentials')
    }
  }

  const handleToggleHero = async (movie) => {
    setUpdatingMovie(movie.id)
    try {
      await updateMovie(movie.id, { is_hero: !movie.is_hero })
    } catch (err) {
      setError('Failed to update movie')
    } finally {
      setUpdatingMovie(null)
    }
  }

  const handleToggleLatest = async (movie) => {
    setUpdatingMovie(movie.id)
    try {
      await updateMovie(movie.id, { is_latest: !movie.is_latest })
    } catch (err) {
      setError('Failed to update movie')
    } finally {
      setUpdatingMovie(null)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-filmzi-bg">
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-filmzi-accent mb-6 text-center">Admin Login</h1>
          
          {error && (
            <div className="bg-red-600 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-filmzi-text text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-filmzi-text focus:outline-none focus:border-filmzi-accent"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-filmzi-text text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-filmzi-text focus:outline-none focus:border-filmzi-accent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-filmzi-accent hover:bg-filmzi-hover text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Login
            </button>
          </form>
          
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>Default credentials:</p>
            <p>Username: <span className="text-filmzi-accent">Venura</span></p>
            <p>Password: <span className="text-filmzi-accent">Venura</span></p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-filmzi-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-filmzi-accent">Admin Panel</h1>
          <button
            onClick={logout}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
          >
            Logout
          </button>
        </div>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-filmzi-accent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map(movie => (
              <div key={movie.id} className="bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src={movie.thumbnail_url} 
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-filmzi-text font-semibold mb-2 truncate">{movie.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{movie.details}</p>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleToggleHero(movie)}
                      disabled={updatingMovie === movie.id}
                      className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                        movie.is_hero 
                          ? 'bg-filmzi-accent text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      } ${updatingMovie === movie.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {movie.is_hero ? '✅ Hero' : '➕ Hero'}
                    </button>
                    
                    <button
                      onClick={() => handleToggleLatest(movie)}
                      disabled={updatingMovie === movie.id}
                      className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                        movie.is_latest 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      } ${updatingMovie === movie.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {movie.is_latest ? '✅ Latest' : '➕ Latest'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin
