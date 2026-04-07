import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "var(--color-tertiary)",
      color: "var(--color-white-100)",
    }}
    contentArrowStyle={{ borderRight: "7px solid var(--color-tertiary)" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.title}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3
        className='text-[20px] font-semibold'
        style={{
          color: "var(--color-white-100)",
          fontFamily: "'Playfair Display', Georgia, serif",
        }}
      >
        {experience.title}
      </h3>
      {experience.company_name && (
        <p
          className='text-secondary text-[14px] font-medium mt-1'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      )}
    </div>
    <ul className='mt-4 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={index}
          className='text-[13px] pl-1 tracking-wide leading-relaxed'
          style={{ color: "var(--color-secondary)" }}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { isDark } = useTheme();
  const labelColor = isDark ? "text-[#aaa6c3]" : "text-[#8a7a6a]";
  const headingColor = isDark ? "text-white" : "text-[#1a1008]";

  const workExp = experiences.filter((e) => e.type === "work");
  const eduExp  = experiences.filter((e) => e.type === "education");

  return (
    <div className="w-full max-w-7xl mx-auto py-4 px-6 sm:px-16">

      {/* Work Experience */}
      <p
        className={`text-[12px] tracking-[0.2em] uppercase mb-4 ${labelColor}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Work Experience
      </p>
      
      <VerticalTimeline>
        {workExp.map((experience, index) => (
          <ExperienceCard key={`work-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>

      {/* Education */}
      <p
        className={`text-[12px] tracking-[0.2em] uppercase mt-20 mb-4 ${labelColor}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Education
      </p>
      <h2
        className={`text-[28px] sm:text-[32px] font-normal mb-10 ${headingColor}`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Academic background
      </h2>

      <VerticalTimeline>
        {eduExp.map((experience, index) => (
          <ExperienceCard key={`edu-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>

    </div>
  );
};

export default SectionWrapper(Experience, "work");
