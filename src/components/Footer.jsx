import { Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
import "../styles/footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <a className="brand footer-brand" href="#home">FITNESS<span>WALA</span></a>
          <p>The Complete Family Gym</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#pricing">Membership</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="socials">
          <a href="https://www.instagram.com/fitnesswala_gym?stkn=ZHFiZGR6bGYxc3Nt&utm_source=qr" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Fitness Wala Gym. All rights reserved.</span>
        <a href="#home">Back to top <ArrowUpRight size={15} /></a>
      </div>
    </footer>
  );
}
