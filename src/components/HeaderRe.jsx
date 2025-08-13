import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hpic from '../pics/9865735.jpg';
import '../App.css';

function HeaderRe() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // TODO: Add actual authentication logic here if needed
    console.log("Login submitted");

    setShowLogin(false); // Close sidebar
    navigate("/TutorialList"); // Navigate after closing
  };

  return (
    <header className="header-container">
      {/* Left section */}
      <div className="header-left">
        <img className="header-logo" src={hpic} alt="React Logo" />
        <h2 className="logo">ReactHub Learning</h2>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="https://newzen.in/" target="_blank" rel="noopener noreferrer">About Us</a>
        <a href="#">Blog</a>
        <button
          className="login-btn"
          onClick={() => {
            setShowLogin(true);
            setMenuOpen(false);
          }}
        >
          Login
        </button>
      </nav>

      {/* Login Sidebar */}
      <div className={`login-sidebar ${showLogin ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setShowLogin(false)}>
          &times;
        </button>
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <h3 className="text-black">*Student Login*</h3>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" className="mt-3 btn btn-danger rounded-5">
            Submit
          </button>
        </form>
      </div>

      {/* Overlay for sidebar */}
      {showLogin && (
        <div className="overlay" onClick={() => setShowLogin(false)} />
      )}
    </header>
  );
}

export default HeaderRe;
  