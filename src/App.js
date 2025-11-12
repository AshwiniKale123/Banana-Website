import React from "react";
import "./styles.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import PracticeAreas from "./PracticeAreas";
import Testimonials from "./Testimonials";
import About from "./About";
import ContactForm from "./ContactForm";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <PracticeAreas />
      <Testimonials />
      <About />
      <ContactForm />
    </>
  );
}

export default App;
