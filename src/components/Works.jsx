import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { useTheme } from "../context/ThemeContext";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ProjectCard = ({ name, description, tags, image, source_code_link, isDark }) => {
  const cardBg    = isDark ? "bg-tertiary border-[#2a2a4a]" : "bg-[#f0ebe0] border-[#d8d0c0]";
  const titleColor = isDark ? "text-white" : "text-[#1a1008]";
  const bodyColor  = isDark ? "text-[#aaa6c3]" : "text-[#5a4a3a]";
  const tagBg      = isDark ? "bg-[#1a1836] text-[#aaa6c3]" : "bg-[#e0d8c8] text-[#5a4a3a]";
  const btnColor   = isDark
    ? "border border-[#aaa6c3] text-[#aaa6c3] hover:bg-[#aaa6c3]/10"
    : "border border-[#5a4a3a] text-[#5a4a3a] hover:bg-[#5a4a3a]/10";

  return (
    <div className={`border ${cardBg} rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col`}>
      <div
        className="w-full h-[220px] overflow-hidden cursor-pointer"
        onClick={() => window.open(source_code_link, "_blank")}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3
          className={`text-[20px] font-semibold leading-snug ${titleColor}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {name}
        </h3>
        <p
          className={`text-[13px] leading-[1.75] flex-1 ${bodyColor}`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[11px] px-3 py-1 rounded-full tracking-wide ${tagBg}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <button
          onClick={() => window.open(source_code_link, "_blank")}
          className={`mt-1 flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 ${btnColor}`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <GitHubIcon />
          Code
        </button>
      </div>
    </div>
  );
};

const Works = () => {
  const { isDark } = useTheme();
  const labelColor   = isDark ? "text-[#aaa6c3]" : "text-[#8a7a6a]";
  const headingColor = isDark ? "text-white" : "text-[#1a1008]";
  const bodyColor    = isDark ? "text-[#aaa6c3]" : "text-[#5a4a3a]";

  return (
    <div className="w-full max-w-7xl mx-auto py-4 px-6 sm:px-16">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className={`text-[12px] tracking-[0.2em] uppercase mb-6 ${labelColor}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Selected Projects
      </motion.p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <ProjectCard isDark={isDark} {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
