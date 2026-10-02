import { CheckCircle2 } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const WhyChooseUs = () => {
  return (
    <section className="why-section section-spacing">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="section-header mb-4">
              <p className="eyebrow text-primary">WHY CHOOSE US</p>
              <h2>Why Patients Choose CarePlus</h2>
            </div>

            <div className="features-grid">
              {hospitalData.whyChooseUs.map((feature) => (
                <div className="feature-item" key={feature}>
                  <div className="feature-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="stats-grid mt-4">
              {hospitalData.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                alt="Doctor in consultation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
