import { Mail, MapPin, Phone, SendHorizonal } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-spacing">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <div className="contact-card">
              <p className="eyebrow text-primary">CONTACT US</p>
              <h2>Get in Touch</h2>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={18} /></div>
                <div>
                  <strong>Address</strong>
                  <p>{hospitalData.address}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Phone size={18} /></div>
                <div>
                  <strong>Phone</strong>
                  <p>{hospitalData.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={18} /></div>
                <div>
                  <strong>Email</strong>
                  <p><a href={`mailto:${hospitalData.email}`}>{hospitalData.email}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><SendHorizonal size={18} /></div>
                <div>
                  <strong>Working Hours</strong>
                  <p>{hospitalData.hours.weekday}</p>
                  <p>{hospitalData.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-card">
              <form className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6 form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" type="text" placeholder="Your name" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" placeholder="Your email" />
                  </div>
                  <div className="col-12 form-group">
                    <label htmlFor="contact-phone">Phone</label>
                    <input id="contact-phone" type="tel" placeholder="Your phone" />
                  </div>
                  <div className="col-12 form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" rows="5" placeholder="Write your message" />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="map-placeholder mt-5">
          <div className="map-overlay">Hyderabad, Telangana, India</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
