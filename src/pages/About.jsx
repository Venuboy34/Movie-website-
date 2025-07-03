import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-filmzi-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-filmzi-accent mb-8 text-center">About Filmzi</h1>
          
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Welcome to <span className="text-filmzi-accent font-semibold">Filmzi</span>, your ultimate destination for 
              ad-free movie streaming and downloads. We believe that entertainment should be accessible, 
              high-quality, and completely free from interruptions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our platform offers a carefully curated collection of movies in multiple qualities, 
              from standard 480p to crisp 1080p HD. Whether you prefer streaming online or downloading 
              for offline viewing, Filmzi has you covered.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience cinema the way it was meant to be – without ads, without interruptions, 
              and without compromise. Join thousands of movie lovers who have made Filmzi their 
              go-to platform for entertainment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold text-filmzi-text mb-2">High Quality</h3>
              <p className="text-gray-400">
                Enjoy movies in stunning quality with options ranging from 480p to 1080p HD.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-semibold text-filmzi-text mb-2">Ad-Free Experience</h3>
              <p className="text-gray-400">
                Watch your favorite movies without any interruptions or annoying advertisements.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⬇️</div>
              <h3 className="text-xl font-semibold text-filmzi-text mb-2">Download Options</h3>
              <p className="text-gray-400">
                Download movies in your preferred quality for offline viewing anytime, anywhere.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-filmzi-accent mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              At Filmzi, we're passionate about bringing you the best movie-watching experience possible. 
              Our mission is to provide a platform where movie enthusiasts can discover, stream, and 
              download their favorite films without the hassle of advertisements or quality compromises.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              We continuously work to expand our library and improve our platform, ensuring that 
              you always have access to the latest and greatest in cinema entertainment.
            </p>
          </div>
          
          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold text-filmzi-accent mb-4">Ready to Start Watching?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Explore our collection of featured and latest movies today!
            </p>
            <a 
              href="/" 
              className="inline-block bg-filmzi-accent hover:bg-filmzi-hover text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Browse Movies
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
