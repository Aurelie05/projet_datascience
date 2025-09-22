import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import React, { useEffect, useState } from "react";
import '@/Style/Guest.css';
import logo from '@/Assets/Icon.png';
import { LuMenu } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Guest({ children }: PropsWithChildren) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-content">
            <div className='logo'>
                <img src={logo} alt="oups" />
                IDSI
            </div>
            <ul className="nav-links">
              <li onClick={ () => window.open('/','_self')}>ACCUEIL</li>
              <li onClick={ () => window.open('/formation','_self')}>FORMATION</li>
              <li onClick={ () => window.open('/condition','_self')}>CONDITION D'ENTREE</li>
      
              {/* <li onClick={ () => window.open('/ecole','_self')}>PRESENTATION</li> */}
              {/* <li>COMPÉTENCES ACQUISES</li> */}
            </ul>
            <ul className='nav-links2'>
              <li onClick={toggleMenu}>
              {menuOpen ? <IoMdCloseCircleOutline /> : <LuMenu />}
              </li>
            </ul>
          
        
        </div>
      </nav>
      
    <nav className="navbar2 fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* contenu de la navbar ici */}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="menu2" data-aos="fade-down"
          data-aos-anchor-placement="center-bottom" data-aos-once="false">
            <a onClick={() => window.open('/', '_self')} className="menu-item">ACCUEIL</a>
            <a onClick={() => window.open('/formation', '_self')} className="menu-item">FORMATION</a>
            <a onClick={() => window.open('/condition', '_self')} className="menu-item">CONDITIONS D'ENTREE</a>
      
          </div>
        )}
    </nav>

        <div>{children}</div>
      
    </>
  );
}
