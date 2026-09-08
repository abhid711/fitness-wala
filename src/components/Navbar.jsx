import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";
import React from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Trainers", "#trainers"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          FITNESS<span>WALA</span>
        </a>

        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#pricing">JOIN NOW</a>

        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="mobile-cta" href="#pricing" onClick={() => setOpen(false)}>
              JOIN NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
