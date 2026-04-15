import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { useTheme } from '../context/ThemeContext';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    navLinks.forEach((nav) => {
      const span = document.getElementById(nav.id);
      if (!span) return;
      // The span is inside the <section>; observe the section itself
      const section = span.closest("section") || span.parentElement;
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(nav.title);
        },
        {
          // Fire when section crosses the upper 20% of the viewport
          rootMargin: "-10% 0px -70% 0px",
          threshold: 0,
        }
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-secondary text-[18px] font-bold cursor-pointer flex'>
            Gamitha &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        {/* Desktop nav links + theme toggle */}
        <div className='hidden sm:flex items-center gap-8'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? (isDark ? "text-white" : "text-[#1a1008]") : "text-secondary"} ${isDark ? "hover:text-white" : "hover:text-[#1a1008]"} text-[18px] font-medium cursor-pointer transition-colors`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className='text-secondary hover:text-white transition-colors p-2 rounded-full hover:bg-tertiary'
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className='sm:hidden flex items-center gap-3'>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`transition-colors p-1 ${isDark ? 'text-secondary hover:text-white' : 'text-[#3a2010] hover:text-[#1a1008]'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            style={!isDark ? { filter: 'brightness(0) saturate(100%) invert(13%) sepia(20%) saturate(800%) hue-rotate(10deg) brightness(90%)' } : {}}
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => { setToggle(!toggle); setActive(nav.title); }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
