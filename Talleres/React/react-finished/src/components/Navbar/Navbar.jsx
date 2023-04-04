import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/" className="logo-display">
                <img src="/logo-no-text.svg" alt="logo-image" className="logo-image" />
                <span className="name title"> Spotify </span>
            </NavLink>
            <ul className="navbar-links-container">
                <li className="navbar-element">
                    <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Home
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="about-us" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        About Us
                    </NavLink>
                </li>
                <li className="navbar-element">
                    <NavLink to="playlist" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        My playlist
                    </NavLink>    
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;