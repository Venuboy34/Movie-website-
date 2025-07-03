import React, { useState } from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const { movies, loading } = useMovies();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Netflix Style */}
      <div className="relative h-[75vh] bg-gradient-to-b from-black/40 to-black">
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
            Unlimited Movies, TV Shows, and More
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Watch anywhere. Stream HD movies instantly.
          </p>
          
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full p-4 pr-12 rounded bg-black/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <svg 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
              <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              HD Quality
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
              <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Instant Streaming
            </span>
          </div>
        </div>
      </div>

      {/* Movie Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 -mt-40 relative z-30">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {searchTerm ? `Results for "${searchTerm}"` : 'Popular on StreamFlix'}
        </h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : filteredMovies.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl mb-2">No movies found</h3>
            <p className="text-gray-400">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
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
