import React from "react";
import { Link } from "react-router-dom";
import './landing.css'

function LandingPage() {
  return (
    <main className="content">
        <div className="bg-container"></div>
        <div className="content">
            <h1>Welcome to <span className="name">Spotify</span></h1>
            <Link className="play-button" to="/playlist">
                Play some music!
            </Link>
        </div>
    </main>
  )
}

export default LandingPage;