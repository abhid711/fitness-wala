import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import "../styles/hero.css";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow"><span /> NO EXCUSES. JUST RESULTS.</div>
          <h1>
            BUILD YOUR
            <em>STRONGEST</em>
            SELF.
          </h1>
          <p>
            Train with purpose. Move with confidence. Get stronger every day
            with expert coaching, premium equipment and a community that pushes
            you forward.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#pricing">
              Start Training <ArrowRight size={19} />
            </a>
            <a className="play-link" href="#programs">
              <span><Play size={15} fill="currentColor" /></span>
              Explore Programs
            </a>
          </div>
          <div className="hero-stats">
            <div><strong>10+</strong><span>Years Experience</span></div>
            <div><strong>5K+</strong><span>Members</span></div>
            <div><strong>5+</strong><span>Expert Coaches</span></div>
          </div>
        </motion.div>
      </div>
      <div className="hero-scroll">SCROLL <span>↓</span></div>
    </section>
  );
}
