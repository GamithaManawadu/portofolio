import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const publications = [
  {
    title: "AI-Enhanced Medicinal Plant Identification using Deep Learning, CNNs, and GIS",
    journal: "International Journal of Innovative Science and Research Technology",
    date: "June 2024",
    link: "https://www.researchgate.net/publication/381390637_AI-Enhanced_Medicinal_Plant_Identification_System_with_Multilingual_Social_Media_Integration",
  },
];

const Publication = () => {
  const { isDark } = useTheme();
  const labelColor = isDark ? "text-[#aaa6c3]" : "text-[#8a7a6a]";
  const cardBg     = isDark ? "bg-tertiary border-[#2a2a4a]" : "bg-[#ede8df] border-[#d0c8b8]";
  const titleColor = isDark ? "text-white" : "text-[#1a1008]";
  const metaColor  = isDark ? "text-[#aaa6c3]" : "text-[#8a7a6a]";
  const bodyColor  = isDark ? "text-[#aaa6c3]" : "text-[#5a4a3a]";
  const badgeBg    = isDark ? "bg-[#2a2a4a] text-[#aaa6c3]" : "bg-[#d8d0c0] text-[#5a4a3a]";

  return (
    <div className="w-full max-w-7xl mx-auto py-4 px-6 sm:px-16">

      <motion.p
        variants={fadeIn("", "", 0.1, 0.6)}
        className={`text-[12px] tracking-[0.2em] uppercase mb-8 ${labelColor}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Publication & Research
      </motion.p>

      {/* Publication card */}
      <div className="flex flex-col gap-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.7)}
            className={`border ${cardBg} rounded-2xl px-8 py-6 transition-colors duration-300 cursor-pointer hover:opacity-80`}
            onClick={() => window.open(pub.link, "_blank")}
          >
            <h3
              className={`text-[18px] sm:text-[20px] font-medium leading-snug ${titleColor}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {pub.title}
            </h3>
            <p
              className={`mt-2 text-[14px] ${metaColor}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {pub.journal} &nbsp;·&nbsp; {pub.date}
            </p>
          </motion.div>
        ))}

        {/* Research description + badges */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.7)}
          className={`border ${cardBg} rounded-2xl px-8 py-6 transition-colors duration-300`}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-[11px] tracking-widest uppercase px-3 py-1 rounded-full ${badgeBg}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}>
              Microsoft Imagine Cup 2022
            </span>
            <span className={`text-[11px] tracking-widest uppercase px-3 py-1 rounded-full ${badgeBg}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}>
              Grade: A−
            </span>
          </div>

          <p
            className={`text-[15px] leading-[1.8] ${bodyColor}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            This research was selected to represent our university at{" "}
            <span className={isDark ? "text-white" : "text-[#1a1008]"}>Microsoft Imagine Cup 2022</span>,
            one of the world's largest student technology competitions. The project
            achieved an <span className={isDark ? "text-white" : "text-[#1a1008]"}>A−</span> grade
            in the university research module, recognising its contribution to
            AI-driven solutions for medicinal plant identification using deep learning,
            CNNs, and GIS-based multilingual integration.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.7)}
          className={`border ${cardBg} rounded-2xl overflow-hidden transition-colors duration-300`}
        >
          <video
            className="w-full max-h-[500px] object-contain"
            controls
            preload="metadata"
          >
            <source src="/research_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

      </div>
    </div>
  );
};

export default SectionWrapper(Publication, "publication");
