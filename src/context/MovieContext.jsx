import React, { createContext, useContext, useReducer, useEffect } from 'react'

const MovieContext = createContext()

const initialState = {
  movies: [],
  loading: false,
  error: null,
  heroMovies: [],
  latestMovies: []
}

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }

    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
        heroMovies: action.payload.filter(movie => movie.is_hero),
        latestMovies: action.payload.filter(movie => movie.is_latest),
        loading: false
      }

    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false }

    case 'UPDATE_MOVIE':
      const updatedMovies = state.movies.map(movie =>
        movie.id === action.payload.id ? action.payload : movie
      )
      return {
        ...state,
        movies: updatedMovies,
        heroMovies: updatedMovies.filter(movie => movie.is_hero),
        latestMovies: updatedMovies.filter(movie => movie.is_latest)
      }

    default:
      return state
  }
}

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState)

  const fetchMovies = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const response = await fetch('https://web-production-6321.up.railway.app/movies')
      if (!response.ok) throw new Error('Failed to fetch movies')
      const data = await response.json()
      dispatch({ type: 'SET_MOVIES', payload: data })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }

  const fetchMovie = async (id) => {
    try {
      const response = await fetch(`https://web-production-6321.up.railway.app/movies/${id}`)
      if (!response.ok) throw new Error('Failed to fetch movie')
      return await response.json()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const updateMovie = async (id, updates) => {
    try {
      const response = await fetch(`https://web-production-6321.up.railway.app/movies/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })
      if (!response.ok) throw new Error('Failed to update movie')
      const updatedMovie = await response.json()
      dispatch({ type: 'UPDATE_MOVIE', payload: updatedMovie })
      return updatedMovie
    } catch (error) {
      throw new Error(error.message)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <MovieContext.Provider
      value={{
        ...state,
        allMovies: state.movies, // Alias for clarity
        fetchMovies,
        fetchMovie,
        updateMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovies = () => {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error('useMovies must be used within a MovieProvider')
  }
  return context
}
