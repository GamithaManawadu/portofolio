import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../assets";

const About = () => {
  const { isDark } = useTheme();
  const headingColor = isDark ? "text-white" : "text-[#1a1008]";
  const bodyColor    = isDark ? "text-[#aaa6c3]" : "text-[#5a4a3a]";
  const labelColor   = isDark ? "text-[#aaa6c3]" : "text-[#8a7a6a]";
  const accentColor  = isDark ? "text-[#aaa6c3]" : "text-[#7a6a5a]";

  return (
    <div className="w-full max-w-7xl mx-auto py-4 px-6 sm:px-16">

      {/* Label */}
      <motion.p
        variants={fadeIn("", "", 0.1, 0.6)}
        className={`text-[12px] tracking-[0.2em] uppercase mb-10 ${labelColor}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        About
      </motion.p>

      {/* Three-column: photo | statement | detail */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Photo */}
        <motion.div
          variants={fadeIn("right", "spring", 0.15, 0.9)}
          className="flex-shrink-0 flex flex-col items-center gap-4"
        >
          <div className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden">
            <img
              src={profile}
              alt="Gamitha Manawadu"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Left — large serif statement */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.9)}
          className="lg:flex-1"
        >
          <p
            className={`text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.9] font-normal ${headingColor}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            I spent 2 years shipping full-stack products before pivoting into
            machine learning. That background shapes how I build ML systems {" "}
            <span
              className={accentColor}
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              always with deployment in mind.
            </span>
          </p>
        </motion.div>

        {/* Right — detail paragraphs */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.9)}
          className={`lg:flex-1 flex flex-col gap-6 text-[15px] leading-[1.8] ${bodyColor}`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <p>
            My work spans computer vision, NLP, and MLOps. I've trained CNNs
            for medical imaging classification, built RAG pipelines over
            domain-specific corpora, and designed end-to-end MLOps workflows
            with experiment tracking and automated hyperparameter optimization.
          </p>
          <p>
            I also have a published research paper on AI-enhanced medicinal
            plant identification using deep learning, CNNs, and GIS. Published
            in the International Journal of Innovative Science and Research
            Technology (June 2024).
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
