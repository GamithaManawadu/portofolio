import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { mail, facebook, twitter, github, logo, menu, close } from '../assets'

const Footer = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false); // mobile menu
  return (
    <nav 
      className={'${styles.paddingX} w-full flex items-center py-5  bottom-0 z-20 bg-foot'}
    >
      <div className='w-full flex justify-between items-center max-w-3xl mx-auto'>
      <Link
          
          className='flex items-center '
          onClick={() => {
            setActive("");
            window.open('https://github.com/GamithaManawadu'); // scroll to top of page
            
          }}
          >
            <img src={github} alt='logo' className='w-11 h-11 object-contain' />
            
          </Link>

          <Link
         
          className='flex items-center '
          onClick={() => {
            setActive("");
            window.open('https://twitter.com/Gamitha98_'); // scroll to top of page
            
          }}
          >
            <img src={twitter} alt='logo' className='w-9 h-9 object-contain' />
            
          </Link>

          <Link
          
          className='flex items-center '
          onClick={() => {
            setActive("");
            window.open('https://www.facebook.com/gamitha.manawadu.7/'); // scroll to top of page
            
          }}
          >
            <img src={facebook} alt='logo' className='w-9 h-9 object-contain' />
           
          </Link>

          <Link
          
          className='flex items-center '
          onClick={() => {
            setActive("");
            window.open('mailto:gamithamanawadu26@gmail.com'); // scroll to top of page
            
          }}
          >
            <img src={mail} alt='logo' className='w-9 h-9 object-contain' />
            
          </Link>
       
                 
            
      </div>
      </nav>
  )
}

export default Footer