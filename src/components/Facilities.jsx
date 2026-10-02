import { hospitalData } from '../data/hospitalData';

const Facilities = () => {
  return (
    <section id="facilities" className="facilities-section section-spacing">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow text-primary">OUR FACILITIES</p>
          <h2>Comfortable Care, Modern Amenities</h2>
        </div>

        <div className="facility-grid">
          {hospitalData.facilities.map((facility) => (
            <div className="facility-card" key={facility.title}>
              <img src={facility.image} alt={facility.title} />
              <div className="facility-overlay">
                <span>{facility.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
