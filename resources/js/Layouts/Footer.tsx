import React from 'react';
import '@/Style/Footer.css'
import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
    <div className='footercontainer'>
 
      <div className="footer-top">
        <div className="footer-column">
          <h2 className="footer-logo">IDSI</h2>
          <p>INTERNATIONAL DATA SCIENCE INSTITUTE</p>
        </div>
        <div className="footer-column">
          <h3>Liens rapides</h3>
          <ul>
            <li onClick={ () => window.open('/','_self')}>ACCUEIL</li>
            <li onClick={ () => window.open('/formation','_self')}>FORMATION</li>
            
            
          </ul>
        </div>
        {/* <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Our Services</li>
            <li>Our Services V2</li>
            <li>Our Services V3</li>
            <li>Our Services V4</li>
            <li>Services Single</li>
          </ul>
        </div> */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>INP-HB CENTRE, Yamoussoukro, Côte d'Ivoire</p>
          <p><strong>Email:</strong>  datascience@datascience.inphb.ci</p>
          <p><strong>Contact:</strong> +225 27 2349 3509 | +225 05 0004 8569</p>
          {/* <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaYoutube />
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 INP-HB Digital Copyright</p>
        <nav>
          {/* <a href="#">Home</a> */}
          {/* <a href="#">About Us</a> */}
          {/* <a href="#">Our Team</a> */}
          {/* <a href="#">Our Services</a> */}
          {/* <a href="#">Blog</a> */}
        </nav>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
