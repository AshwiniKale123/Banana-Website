// src/NavBar.js
import React from "react";

function NavBar() {
  return (
    <nav className="navbar bg-warning p-3 sticky-top">
      <div className="container d-flex justify-content-between">
        <h2 className="m-0">Notary</h2>
        <div className="nav-links">
          <a href="#home-section">Home</a>
          <a href="#practice-section">Practice</a>
          <a href="#testimonials-section">Testimonials</a>
          <a href="#about-section">About</a>

          {/*  Contact scrolls to the form using id */}
          <a href="#contact-section">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
