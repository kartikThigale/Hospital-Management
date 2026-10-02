import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const Hero = ({ onBookClick }) => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge-pill">
            <ShieldCheck size={15} />
            COMPASSIONATE • PROFESSIONAL • TRUSTED CARE
          </div>
          <h1>Your Health Deserves the Best Care</h1>
          <p>
            Comprehensive medical care from experienced doctors with a patient-first
            approach.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onBookClick}>
              Book an Appointment <ArrowRight size={16} />
            </button>
            <a href="tel:+919000000000" className="btn btn-ghost">
              <Phone size={16} /> Call Hospital
            </a>
          </div>

          <div className="trust-list">
            {['Experienced Doctor', 'Modern Facilities', 'Patient-Centered Care'].map((item) => (
              <div key={item} className="trust-item">
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=1200&q=80"
              alt="Doctor consulting patient"
            />
          </div>
          <div className="floating-card">
            <p className="floating-title">Need Medical Assistance?</p>
            <p className="floating-text">Talk to our doctor today.</p>
            <button className="btn btn-primary btn-small" onClick={onBookClick}>Book Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
