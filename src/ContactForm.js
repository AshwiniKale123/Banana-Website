// src/ContactForm.js
import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  });
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8000/api/contactwebsite", form);
//       alert("Message submitted successfully!");
//       setForm({ firstName: "", lastName: "", email: "", subject: "" });
//     } catch (err) {
//       console.error("Error submitting contact form:", err);
//       alert("Something went wrong, please try again.");
//     }
//   };

  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8000/api/contactwebsite", form);
    console.log("Contact submitted:", response.data);

    alert("Message submitted successfully!");

    // Clear form after submit
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: ""
    });

    
  } catch (error) {
    console.error("Contact submission failed:", error.response?.data || error.message);
    alert("Something went wrong, please try again.");
  }
};


  return (
    <div id="contact-section" className="contact-form-wrapper">
      <div className="container my-5">
        <h2 className="text-center mb-3">
          <span style={{ fontWeight: "bold" }}>Contact Us</span> 
        </h2>
        <form
          onSubmit={handleSubmit}
          className="contact-form bg-white p-4 rounded shadow mx-auto"
        >
          <div className="row mb-3">
            
            <div className="col-md-6">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-control"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="subject"
            placeholder="Subject"
            rows="4"
            className="form-control mb-3"
            value={form.subject}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn btn-warning w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
