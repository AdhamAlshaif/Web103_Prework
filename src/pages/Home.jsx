import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1>Welcome to Streamer World</h1>
        <p>
          Post about your favorite Twitch streamers, share their social media links, and connect with their fans.
        </p>

        <div className="home-actions">
          <Link to="/add" className="btn primary">Add a streamer</Link>
          <Link to="/streamers" className="btn">View all streamers</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
