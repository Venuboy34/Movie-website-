import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-filmzi-bg text-filmzi-text">
      <nav className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-filmzi-accent">
              FILMZI
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`hover:text-filmzi-accent transition-colors ${
                  location.pathname === '/' ? 'text-filmzi-accent' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-filmzi-accent transition-colors ${
                  location.pathname === '/about' ? 'text-filmzi-accent' : ''
                }`}
              >
                About
              </Link>
              <Link 
                to="/admin" 
                className={`hover:text-filmzi-accent transition-colors ${
                  location.pathname === '/admin' ? 'text-filmzi-accent' : ''
                }`}
              >
                Admin
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-filmzi-text hover:text-filmzi-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="bg-black/90 border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Filmzi. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Ad-free streaming & download movie platform</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
