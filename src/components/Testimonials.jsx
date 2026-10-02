import { Star } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section section-spacing">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow text-primary">PATIENT TESTIMONIALS</p>
          <h2>What Patients Say</h2>
        </div>

        <div className="row g-4 mt-4">
          {hospitalData.testimonials.map((testimonial) => (
            <div className="col-md-6 col-xl-3" key={testimonial.author}>
              <div className="testimonial-card h-100">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={`${testimonial.author}-${index}`} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="quote">“{testimonial.quote}”</p>
                <div className="author">— {testimonial.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
