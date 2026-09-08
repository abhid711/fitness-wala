import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Programs/>
        <Trainers/>
        <Pricing/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
