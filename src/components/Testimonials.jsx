import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import "../styles/testimonials.css";
import React from "react";

const testimonials = [
  ["Abhi Dubey", "Member", "Fitness Wala completely changed the way I approach fitness. The trainers are excellent and the atmosphere is amazing."],
  ["Priya Singh", "Member", "I lost 12kg and became much stronger. The personalized guidance and accountability made a huge difference."],
  ["Rohit Gupta", "Member", "Best gym experience I've had. Great equipment, professional trainers and a seriously motivating community."],
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-heading center">
          <div className="section-tag">MEMBER STORIES</div>
          <h2>REAL PEOPLE. <span>REAL RESULTS.</span></h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map(([name, role, text], i) => (
            <motion.article
              className="testimonial-card"
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="quote" size={36} />
              <div className="stars">{[1,2,3,4,5].map((x) => <Star key={x} size={15} fill="currentColor" />)}</div>
              <p>"{text}"</p>
              <div className="member"><span>{name.charAt(0)}</span><div><strong>{name}</strong><small>{role}</small></div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
