import { motion } from "framer-motion";
import "../styles/trainers.css";
import React from "react";

const trainers = [
  ["Vikash Bhargav", "Head Coach", "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85"],
  ["Gaurav Dabgar", "Strength Coach", "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=85"],
  ["Shubhank Verma", "Fitness Coach", "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=85"],
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
