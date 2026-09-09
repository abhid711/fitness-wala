import { motion } from "framer-motion";
import { ArrowUpRight, Dumbbell, Flame, Target, HeartPulse, Zap, UserRound, IdCardIcon, HeartHandshake } from "lucide-react";
import "../styles/programs.css";
import React from "react";

const programs = [
  ["Strength Training", "Build strength, muscle and confidence with progressive training.", Dumbbell],
  ["Fat Loss", "Smart workouts and sustainable habits designed for real results.", Flame],
  ["Cardio Training", "Improve stamina, endurance and overall cardiovascular fitness.", HeartHandshake],
  ["Mobility", "Move better, recover faster and improve flexibility.", HeartPulse],
  ["HIIT", "Short, intense sessions that challenge your entire body.", Zap],
  ["Personal Training", "One-to-one coaching built around your exact goals.", UserRound],
];

export default function Programs() {
  return (
    <section id="programs" className="section programs">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">WHAT WE DO</div>
          <h2>TRAIN WITH <span>PURPOSE.</span></h2>
          <p>Choose your goal. We'll help you build the plan to reach it.</p>
        </motion.div>

        <div className="program-grid">
          {programs.map(([title, description, Icon], i) => (
            <motion.article
              className="program-card"
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -8 }}
            >
              <div className="program-icon"><Icon size={27} /></div>
              <div className="program-no">0{i + 1}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact"><ArrowUpRight size={20} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
