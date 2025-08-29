import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import About from './pages/about'
import Events from './pages/Events'
import Login from './pages/login'
import Signup from './pages/signup'

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-purple-700 text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">EveNexus</h1>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}
