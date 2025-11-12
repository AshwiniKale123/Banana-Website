// src/About.js
import React from "react";
import "./styles.css";

function About() {
  return (
    <section id="about-section" className="py-5">
      <div className="container">
        <h2 className="text-center mb-3">
          <span style={{ fontWeight: "bold" }}>About Us</span>
        </h2>
        <p className="text-center text-muted mb-5">
          Learn more about who we are and what we do
        </p>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80"
              alt="About Notary"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p>
              We are dedicated professionals committed to providing fast,
              reliable, and trustworthy notary services. With years of
              experience, we simplify the documentation process, ensuring peace
              of mind for our clients.
            </p>
            <p>
              Our mission is to serve individuals and businesses with integrity,
              efficiency, and professionalism. From legal documents to business
              contracts, we’ve got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
