import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import "../styles/about.css";
import React from "react";

const features = ["Modern Equipment", "Certified Trainers", "Personalized Plans", "Clean Environment"];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
            alt="Modern gym training area"
          />
          <div className="about-number">
            <strong>10</strong><span>YEARS OF<br />EXCELLENCE</span>
          </div>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-tag">WHO WE ARE</div>
          <h2>MORE THAN A GYM.<br /><span>IT'S A LIFESTYLE.</span></h2>
          <p>
            Fitness Wala is built for people who refuse to settle for average.
            Whether you're chasing muscle, fat loss, athletic performance or a
            healthier lifestyle, we'll help you build habits that last.
          </p>
          <p>
            Our coaches combine smart programming, proven training methods and
            real accountability to turn goals into measurable progress.
          </p>

          <div className="feature-list">
            {features.map((item) => (
              <div key={item}><span><Check size={15} /></span>{item}</div>
            ))}
          </div>

          <a className="text-link" href="#programs">Discover More <ArrowUpRight size={18} /></a>
        </motion.div>
      </div>
    </section>
  );
}
