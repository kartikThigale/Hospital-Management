import { ArrowUpRight } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const iconMap = {
  HeartPulse: '❤',
  Thermometer: '°',
  Activity: '⚡',
  Heart: '♥',
  TestTubeDiagonal: '🧪',
  ClipboardCheck: '✓',
  UserRoundHeart: '♀',
  Baby: '👶',
};

const Services = () => {
  return (
    <section id="services" className="services-section section-spacing">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow text-primary">OUR MEDICAL SERVICES</p>
          <h2>Our Medical Services</h2>
          <p>Comprehensive healthcare services for you and your family.</p>
        </div>

        <div className="row g-4 mt-4">
          {hospitalData.services.map((service) => (
            <div className="col-12 col-md-6 col-xl-3" key={service.title}>
              <div className="service-card h-100">
                <div className="service-icon">{iconMap[service.icon] || '✚'}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a href="#" className="service-link">
                  Learn More <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
