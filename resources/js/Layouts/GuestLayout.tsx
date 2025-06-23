import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import React, { useEffect, useState } from "react";
import '@/Style/Guest.css';
import logo from '@/Assets/Icon.png';

export default function Guest({ children }: PropsWithChildren) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              {/* <li onClick={ () => window.open('/ecole','_self')}>PRESENTATION</li> */}

            {/* <li>COMPÉTENCES ACQUISES</li> */}
          </ul>
        </div>
      </nav>

      <div className="guestcontainer">
        {/* Ancien menu si tu veux le réintégrer */}
        {/* 
        <div className='menu'>
         
          <div className='firstmenu'>Accueil</div>
          <div className='secondmenu'></div>
          <div className='secondmenu'>Présentation</div>
        </div>
        */}
        <div>{children}</div>
      </div>
    </>
  );
}
