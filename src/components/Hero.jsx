import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useTheme } from '../context/ThemeContext';
import roomBackground from '../assets/back_Image.png';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Hero = () => {
  const { isDark } = useTheme();
  const headingColor = isDark ? 'text-white' : 'text-[#1a1008]';
  const subColor     = isDark ? 'text-[#f3f3f3]' : 'text-[#3a2a1a]';
  const accentColor  = 'text-secondary';
  const metaColor    = isDark ? 'text-[#aaa6c3]' : 'text-[#8a7a6a]';
  const iconColor    = isDark ? 'text-[#aaa6c3] hover:text-white' : 'text-[#8a7a6a] hover:text-[#1a1008]';

  const socialLinks = [
    { href: 'https://github.com/GamithaManawadu', icon: <GitHubIcon />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/gamitha-manawadu/', icon: <LinkedInIcon />, label: 'LinkedIn' },
    { href: 'mailto:gamithamanawadu26@gmail.com', icon: <MailIcon />, label: 'Mail' },
  ];

  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-NZ', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Pacific/Auckland',
      }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const TextBlock = () => (
    <div>
      {/* Meta line */}
      <p
        className={`text-[12px] font-medium tracking-[0.2em] uppercase mb-6 ${metaColor}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Software Engineer &nbsp;·&nbsp; ML Engineer &nbsp;·&nbsp; AI Researcher &nbsp;·&nbsp; Auckland, NZ &nbsp;·&nbsp; {time}
      </p>

      {/* Name */}
      <h1
        className={`text-[36px] sm:text-[42px] lg:text-[48px] font-semibold leading-tight mb-3 ${headingColor}`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Hi, I'm <span className={accentColor}>Gamitha</span>
      </h1>

      {/* Serif heading */}
      <h2
        className={`text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.15] font-bold mb-6 ${headingColor}`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Building intelligent <br />
        systems with{' '}
        <span
          className={accentColor}
          style={{ fontStyle: 'italic', fontWeight: 300 }}
        >
          purpose
        </span>
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <a
          href="#contact"
          className={`flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium transition-colors duration-200 ${
            isDark
              ? 'bg-white text-[#050816] hover:bg-[#aaa6c3]'
              : 'bg-[#1a1008] text-[#faf7f2] hover:bg-[#3a2a1a]'
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get In Touch
        </a>
        <a
          href="https://drive.google.com/file/d/1ynr4jo_T9x0Jv1qpU0tWbzxn1bjlpTXC/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium transition-colors duration-200 border ${
            isDark
              ? 'border-[#aaa6c3] text-[#aaa6c3] hover:bg-[#aaa6c3]/10'
              : 'border-[#5a4a3a] text-[#5a4a3a] hover:bg-[#5a4a3a]/10'
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Get My Resume
        </a>
      </div>

      {/* Body */}
      <p
        className={`text-[17px] leading-[1.8] max-w-lg ${subColor}`}
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
      >
        Software engineer turned ML practitioner. I bring production
        engineering discipline to machine learning, from experiment
        tracking to deployed inference endpoints.
      </p>

      {/* Social icons — horizontal bar with decorative lines */}
      <div className="flex items-center gap-4 mt-6">
        <div className={`flex-1 h-0.5 ${isDark ? 'bg-[#aaa6c3]/40' : 'bg-[#8a7a6a]/40'}`} />
        <div className="flex items-center gap-5">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              aria-label={s.label}
              className={`transition-colors duration-200 ${iconColor}`}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <div className={`flex-1 h-0.5 ${isDark ? 'bg-[#aaa6c3]/40' : 'bg-[#8a7a6a]/40'}`} />
      </div>
    </div>
  );

  const ScrollArrow = () => (
    <a href='#about'>
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className='w-3 h-3 rounded-full bg-secondary mb-1'
        />
      </div>
    </a>
  );

  return (
    <section
      className='relative w-full mx-auto'
      style={{
        backgroundImage: `url(${roomBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Overlay — dark in night mode, subtle cream in day mode */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
          isDark ? 'bg-[#050816]/[0.93]' : 'bg-[#faf7f2]/60'
        }`}
      />

      {/* Desktop */}
      <div className='relative z-10 hidden lg:flex w-full h-screen items-center max-w-7xl mx-auto px-16 gap-10'>
        <div className='flex flex-row items-start gap-5 w-1/2'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-secondary' />
            <div className='w-1 h-80 violet-gradient' />
          </div>
          <TextBlock />
        </div>
        <div className='w-1/2 h-full'>
          <ComputersCanvas />
        </div>
      </div>

      {/* Tablet */}
      <div className='relative z-10 hidden sm:flex lg:hidden w-full h-screen items-center max-w-7xl mx-auto px-8 gap-5'>
        <div className='flex flex-row items-start gap-5 w-1/2'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-secondary' />
            <div className='w-1 h-60 violet-gradient' />
          </div>
          <TextBlock />
        </div>
        <div className='w-1/2 h-full'>
          <ComputersCanvas />
        </div>
      </div>

      {/* Mobile */}
      <div className='relative z-10 sm:hidden flex flex-col w-full'>
        <div className={`pt-[90px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-secondary' />
            <div className='w-1 h-32 violet-gradient' />
          </div>
          <TextBlock />
        </div>
        <div className='w-full h-[320px]'>
          <ComputersCanvas />
        </div>
        <div className='w-full flex justify-center items-center py-4'>
          <ScrollArrow />
        </div>
      </div>

      {/* Scroll arrow desktop/tablet */}
      <div className='hidden sm:flex absolute bottom-10 z-10 w-full justify-center items-center'>
        <ScrollArrow />
      </div>

    </section>
  );
};

export default Hero;
