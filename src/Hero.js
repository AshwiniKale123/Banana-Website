import React from "react";

function Hero() {
  return (
    <header className="hero-section d-flex align-items-center">
      <div className="container text-white d-flex flex-column flex-lg-row justify-content-between align-items-start">
        <div className="hero-text">
          <h1>Notary Public & Legal Solutions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi
            odio aliquid, accusamus.
          </p>
        </div>

        <form className="appointment-form bg-white p-4 rounded shadow">
          <h4 className="mb-3">Book an Appointment</h4>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="date" required />
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </header>
  );
}

export default Hero;
