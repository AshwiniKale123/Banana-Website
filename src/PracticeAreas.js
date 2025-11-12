// src/PracticeAreas.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function PracticeAreas() {
  const [areas, setAreas] = useState([]);

  // Fetch practice areas (GET)
  const fetchAreas = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/practiceareas");
      setAreas(res.data);
    } catch (err) {
      console.error("Error fetching practice areas:", err);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  return (
    <div className="container my-5 practiceareas-form-wrapper">
      <h2 className="text-center mb-3">
        <span style={{ fontWeight: "bold" }}>Practice</span> Areas
      </h2>
      <p className="text-center text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="row mt-4">
        {areas.map((area) => (
          <div key={area._id} className="col-md-4 mb-4">
            <div className="card shadow-sm text-center p-4">
              <div style={{ fontSize: "2rem" }}>{area.icon}</div>
              <h5 className="mt-3" style={{ fontWeight: "bold" }}>
                {area.title}
              </h5>
              <p className="text-muted">{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PracticeAreas;
