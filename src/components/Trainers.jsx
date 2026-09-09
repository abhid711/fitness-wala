import { motion } from "framer-motion";
import "../styles/trainers.css";
import React from "react";

import trainer1 from "../../src/image/trainer1.png";

import trainer3 from "../../src/image/trainer3.png";
import trainer2 from "../../src/image/trainer2.png";

const trainers = [
  ["Dr . Vikas Bhargava", "Head Coach", trainer1],

  ["Shubhank Verma", "Fitness Coach", trainer3],
    ["Gaurav Dabgar", "Strength Coach", trainer2],
];



export default function Trainers() {
  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <div className="section-heading trainer-heading">
          <div>
            <div className="section-tag">THE TEAM</div>
            <h2>MEET YOUR <span>COACHES.</span></h2>
          </div>
          <p>Experienced professionals who care about your progress.</p>
        </div>

        <div className="trainer-grid">
          {trainers.map(([name, role, image], i) => (
            <motion.article
              className="trainer-card"
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="trainer-image">
                <img src={image} alt={name} loading="lazy" />
              </div>
              <div className="trainer-info">
                <div><h3>{name}</h3><p>{role}</p></div>
                <span>0{i + 1}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
