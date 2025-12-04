import React from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();
  const labelColor  = isDark ? "text-[#aaa6c3]" : "text-[#8a7a6a]";
  const headingColor = isDark ? "text-white" : "text-[#1a1008]";
  const accentColor  = isDark ? "text-[#aaa6c3]" : "text-[#7a6a5a]";
  const bodyColor    = isDark ? "text-[#aaa6c3]" : "text-[#5a4a3a]";
  const btnPrimary   = isDark
    ? "bg-white text-[#050816] hover:bg-[#aaa6c3]"
    : "bg-[#1a1008] text-[#faf7f2] hover:bg-[#3a2a1a]";
  const btnSecondary = isDark
    ? "border border-[#aaa6c3] text-[#aaa6c3] hover:bg-[#aaa6c3]/10"
    : "border border-[#5a4a3a] text-[#5a4a3a] hover:bg-[#5a4a3a]/10";

  return (
    <div className="w-full max-w-7xl mx-auto py-4 px-6 sm:px-16 relative">

      {/* Two-column layout */}
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center">

        {/* Left: CTA text */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="xl:w-1/2 flex flex-col gap-8"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 0.6)}
            className={`text-[12px] tracking-[0.2em] uppercase ${labelColor}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Contact
          </motion.p>

          <h2
            className={`text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.15] font-normal ${headingColor}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's build something{" "}
            <span className={accentColor} style={{ fontStyle: "italic", fontWeight: 300 }}>
              together
            </span>
          </h2>

          <p
            className={`text-[16px] leading-[1.8] max-w-md ${bodyColor}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Open to ML Engineer, AI Engineer, Research Assistant, and related
            roles. Always happy to connect.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:gamithamanawadu26@gmail.com"
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-medium transition-colors duration-200 ${btnPrimary}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an email
            </a>
            <a
              href="https://www.linkedin.com/in/gamitha-manawadu/"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-medium transition-colors duration-200 ${btnSecondary}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/GamithaManawadu"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-medium transition-colors duration-200 ${btnSecondary}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right: 3D Earth */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:w-1/2 w-full h-[400px] xl:h-[500px]"
        >
          <EarthCanvas />
        </motion.div>

      </div>

     

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
