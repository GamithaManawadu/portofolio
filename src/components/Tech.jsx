import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "C#", "JavaScript", "SQL"],
  },
  {
    category: "ML / Deep Learning",
    skills: ["TensorFlow / Keras", "scikit-learn", "XGBoost", "LightGBM", "Optuna"],
  },
  {
    category: "NLP / GenAI",
    skills: ["LangChain", "ChromaDB", "RAG", "Transformers", "BERT", "RoBERTa", "Gemini"],
  },
  {
    category: "Computer Vision",
    skills: ["OpenCV", "MobileNetV2", "Grad-CAM", "YOLOv8", "Transfer Learning", "CNNs"],
  },
  {
    category: "MLOps / Deployment",
    skills: ["MLflow", "FastAPI", "Streamlit", "Gradio", "HuggingFace Spaces", "Docker"],
  },
  {
    category: "Data & Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Feature Engineering"],
  },
  {
    category: "Frameworks & Tools",
    skills: [".NET", "React", "Three.js", "Tailwind", "Vite"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Anaconda", "REST APIs", "Agile"],
  },
];

const Tech = () => {
  const { isDark } = useTheme();
  const labelColor   = isDark ? "text-[#aaa6c3]" : "text-[#8a7a6a]";
  const headingColor = isDark ? "text-white" : "text-[#1a1008]";
  const cardBg       = isDark ? "bg-tertiary border-[#2a2a4a]" : "bg-[#f0ebe0] border-[#d8d0c0]";
  const tagBg        = isDark ? "bg-[#1a1836] text-[#aaa6c3]" : "bg-[#e0d8c8] text-[#5a4a3a]";
  const catColor     = isDark ? "text-[#aaa6c3]" : "text-[#8a7a6a]";

  return (
    <div className="w-full max-w-7xl mx-auto py-4 px-6 sm:px-16">

      <motion.p
        variants={fadeIn("", "", 0.1, 0.6)}
        className={`text-[12px] tracking-[0.2em] uppercase mb-6 ${labelColor}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Skills & Technologies
      </motion.p>

      <motion.h2
        variants={fadeIn("", "", 0.15, 0.6)}
        className={`text-[28px] sm:text-[32px] font-normal mb-12 ${headingColor}`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        What I work with
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            variants={fadeIn("up", "spring", i * 0.1, 0.6)}
            className={`border ${cardBg} rounded-2xl p-5 flex flex-col gap-3 transition-colors duration-300`}
          >
            <p
              className={`text-[11px] tracking-[0.18em] uppercase font-medium ${catColor}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`text-[12px] px-3 py-1 rounded-full ${tagBg} transition-colors duration-300`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "");
