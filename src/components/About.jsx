import { ArrowRight, Check } from 'lucide-react';

const items = [
  'Experienced medical professionals',
  'Personalized treatment plans',
  'Preventive healthcare',
  'Modern diagnostic support',
  'Clean and comfortable environment',
  'Patient-focused service',
];

const About = () => {
  return (
    <section id="about" className="about-section section-spacing">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                alt="Healthcare team in hospital"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <p className="eyebrow text-primary">ABOUT CAREPLUS</p>
            <h2>Comprehensive Healthcare With a Personal Touch</h2>
            <p className="about-text">
              CarePlus General Hospital provides reliable and compassionate medical care for
              individuals and families. Our focus is on accurate diagnosis, preventive
              healthcare and personalized treatment.
            </p>

            <ul className="feature-list">
              {items.map((item) => (
                <li key={item}>
                  <span className="check-badge">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn btn-primary mt-3">
              Learn More About Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
