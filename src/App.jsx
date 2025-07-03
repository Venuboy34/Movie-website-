import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Watch from './pages/Watch'
import Admin from './pages/Admin'
import About from './pages/About'

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </Router>
      </MovieProvider>
    </AuthProvider>
  )
}

export default App
