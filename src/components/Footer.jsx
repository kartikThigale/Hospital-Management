import { Globe, HeartPulse, Mail, MapPin, Phone, Send, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hospitalData } from '../data/hospitalData';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="footer-brand d-flex align-items-center gap-3 mb-3">
              <div className="brand-mark">+</div>
              <div>
                <div className="brand-name">{hospitalData.name}</div>
              </div>
            </div>
            <p>
              Compassionate, personalized and trusted healthcare for individuals and families.
            </p>
            <div className="social-links">
              <a href="#" aria-label="CarePlus homepage"><Globe size={16} /></a>
              <a href="#" aria-label="Healthcare services"><HeartPulse size={16} /></a>
              <a href="#" aria-label="Doctor support"><Stethoscope size={16} /></a>
              <a href="#" aria-label="Contact us"><Send size={16} /></a>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctor">Doctor</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5>Medical Services</h5>
            <ul className="footer-links">
              {hospitalData.serviceHighlights.map((service) => (
                <li key={service}><a href="#">{service}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5>Contact</h5>
            <ul className="footer-links contact-list">
              <li><Phone size={14} /> {hospitalData.phone}</li>
              <li><Mail size={14} /> {hospitalData.email}</li>
              <li><MapPin size={14} /> {hospitalData.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 {hospitalData.name}. All Rights Reserved.</div>
          <div className="footer-policy">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
