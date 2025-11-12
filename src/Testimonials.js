// src/Testimonials.js
import React from "react";
import "./styles.css";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "The notary services were quick, reliable, and hassle-free. Highly recommend!",
    },
    {
      id: 2,
      name: "Sarah Williams",
      feedback:
        "Professional team, explained everything clearly, and made the process smooth.",
    },
    {
      id: 3,
      name: "Michael Smith",
      feedback:
        "Excellent service! Will definitely come back again for future needs.",
    },
  ];

  return (
    <section id="testimonials-section" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-3">
          <span style={{ fontWeight: "bold" }}>Testimonials</span>
        </h2>
        <p className="text-center text-muted mb-5">
          Hear from our satisfied clients
        </p>

        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 p-4">
                <p className="text-muted">"{item.feedback}"</p>
                <h6 className="mt-3 text-end">- {item.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
