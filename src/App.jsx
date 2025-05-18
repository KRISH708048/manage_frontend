// import { useState } from "react";
import "./App.css";
import CTA from "./components/CTA";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="background-container max-w-7xl h-screen flex flex-col items-center mx-auto">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}


export default App;
