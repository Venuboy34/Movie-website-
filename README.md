# Filmzi - Movie Streaming Platform

A modern, Netflix-inspired movie streaming and download platform built with React.js and Tailwind CSS.

## 🚀 Features

- **🎬 Featured Movies Section** - Showcase hero movies
- **🆕 Latest Movies Section** - Display newest releases
- **📱 Responsive Design** - Works on all devices
- **🎥 Video Streaming** - Built-in video player with Plyr.js
- **⬇️ Download Options** - Multiple quality downloads (480p, 720p, 1080p)
- **👨‍💼 Admin Panel** - Manage featured and latest movies
- **🎨 Modern UI** - Dark theme with red accents

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: Context API + useReducer
- **Video Player**: Plyr.js
- **API**: Railway-hosted backend

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd filmzi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🚢 Deployment

This project is ready for Vercel deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy to Vercel:
```bash
vercel --prod
```

The `vercel.json` configuration handles SPA routing automatically.

## 🔧 Admin Access

- **Username**: `Venura`
- **Password**: `Venura`

Navigate to `/admin` to access the admin panel for managing featured and latest movies.

## 📡 API Endpoints

- **Get all movies**: `https://web-production-6321.up.railway.app/movies`
- **Get single movie**: `https://web-production-6321.up.railway.app/movies/:id`
- **Update movie**: `PATCH https://web-production-6321.up.railway.app/movies/:id`

## 🎯 Pages

- **Home (`/`)** - Featured and latest movies
- **Movie Details (`/movie/:id`)** - Movie information and download links
- **Watch (`/watch/:id`)** - Video streaming page
- **Admin (`/admin`)** - Admin panel for movie management
- **About (`/about`)** - About page

## 🎨 Theme

- **Background**: `#000000` (Black)
- **Text**: `#FFFFFF` (White)
- **Accent**: `#FF0000` (Red)
- **Hover**: `#ff4d4d` (Light Red)

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Features

- Ad-free streaming experience
- Multiple video quality options
- Download functionality
- Admin panel for content management
- Modern, intuitive user interface

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License.
