
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    message: "",
  });

  const [isOpening, setIsOpening] = useState(false);

  // ============================
  // INPUT CHANGE
  // ============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ============================
  // WHATSAPP SUBMIT
  // ============================

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsOpening(true);

    // YOUR WHATSAPP NUMBER
    // India country code = 91
    const whatsappNumber = "918269330675";

    const whatsappMessage = `
 NEW FITNESS WALA QUERY

━━━━━━━━━━━━━━━━━━

 Name: ${formData.name}

Phone: ${formData.phone}

 Goal: ${formData.goal}

 Message:
${formData.message || "No additional message"}

━━━━━━━━━━━━━━━━━━

I want to book a consultation with Fitness Wala Gym.
    `.trim();

    const encodedMessage = encodeURIComponent(
      whatsappMessage
    );

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setIsOpening(false);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">

      {/* Background */}
      <div className="contact-bg" />

      <div className="container contact-inner">

        {/* ============================
            LEFT SIDE
        ============================ */}

        <motion.div
          className="contact-copy"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <span className="section-label">
            START YOUR JOURNEY
          </span>

          <h2>
            READY TO
            <span> GET STRONGER?</span>
          </h2>

          <p>
            Have questions about our membership, personal
            training, or workout programs? Fill out the form
            and we'll contact you directly on WhatsApp.
          </p>

<div className="contact-details">

  {/* ADDRESS */}
  <div>
    <MapPin size={18} />

    <a
      href="https://share.google/8qboDPkl1DNAgIqJm"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      Infront Of Karunadham Maha Laxmi Temple,
      BM 53, Bhadbhada Road, Nehru Nagar
    </a>
  </div>


  {/* PHONE */}
  <div>
    <Phone size={18} />

    <a
      href="tel:+918269330675"
      className="contact-link"
    >
      +91 82693 30675
    </a>
  </div>


  {/* OPENING HOURS */}
  <div>
    <Clock size={18} />

    <span>
      Monday - Saturday
      <br />
      6:00 AM - 10:00 AM &nbsp; | &nbsp; 5:00 PM - 10:00 PM
      <br />
      <strong className="closed-day">
        Sunday - Closed
      </strong>
    </span>
  </div>

</div>


        </motion.div>


        {/* ============================
            RIGHT SIDE FORM
        ============================ */}

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}

          initial={{
            opacity: 0,
            x: 40,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}
        >

          {/* NAME */}

          <div className="form-group">

            <label htmlFor="name">
              Your Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          {/* PHONE */}

          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>


          {/* GOAL */}

          <div className="form-group">

            <label htmlFor="goal">
              Your Goal
            </label>

            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
            >

              <option value="" disabled>
                Choose your goal
              </option>

              <option value="Build Muscle">
                Build Muscle
              </option>

              <option value="Lose Fat">
                Lose Fat
              </option>

              <option value="Improve Fitness">
                Improve Fitness
              </option>

              <option value="Personal Training">
                Personal Training
              </option>

              <option value="Strength Training">
                Strength Training
              </option>

            </select>

          </div>


          {/* MESSAGE */}

          <div className="form-group">

            <label htmlFor="message">
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us about your goal..."
              value={formData.message}
              onChange={handleChange}
            />

          </div>


          {/* SUBMIT */}

          <button
            className="btn btn-primary contact-submit"
            type="submit"
            disabled={isOpening}
          >

            {isOpening ? (
              "OPENING WHATSAPP..."
            ) : (
              <>
                Book Free Consultation
                <ArrowRight size={18} />
              </>
            )}

          </button>


          <p className="whatsapp-note">
            Your information will open in WhatsApp as a
            pre-filled message.
          </p>

        </motion.form>

      </div>

    </section>
  );
}
