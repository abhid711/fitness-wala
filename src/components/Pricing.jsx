import { motion } from "framer-motion";
import { Check } from "lucide-react";
import "../styles/pricing.css";
import React from "react";

const plans = [
  {
    name: "BASIC",
    price: "999",
    desc: "For beginners getting started.",
    features: ["Full Gym Access", "Cardio Area", "Locker Facility", "Fitness Assessment"],
  },
  {
    name: "PRO",
    price: "1,999",
    popular: true,
    desc: "Our most popular plan.",
    features: ["Everything in Basic", "Personal Workout Plan", "Group Classes", "Diet Guidance", "Progress Tracking"],
  },
  {
    name: "ELITE",
    price: "3,499",
    desc: "Maximum support. Maximum results.",
    features: ["Everything in Pro", "Personal Trainer", "Custom Nutrition Plan", "Weekly Review", "Priority Support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-heading center">
          <div className="section-tag">MEMBERSHIP</div>
          <h2>CHOOSE YOUR <span>PLAN.</span></h2>
          <p>Simple plans. No hidden surprises. Cancel anytime.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.article
              className={`price-card ${plan.popular ? "featured" : ""}`}
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.popular && <div className="popular">MOST POPULAR</div>}
              <div className="price-top">
                <span>{plan.name}</span>
                <p>{plan.desc}</p>
              </div>
              <div className="price"><small>₹</small>{plan.price}<b>/month</b></div>
              <div className="price-features">
                {plan.features.map((feature) => (
                  <div key={feature}><Check size={16} />{feature}</div>
                ))}
              </div>
              <a href="#contact" className={`price-btn ${plan.popular ? "solid" : ""}`}>
                Choose Plan
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
