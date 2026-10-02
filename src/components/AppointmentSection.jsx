import { useState } from 'react';
import { SendHorizonal, Stethoscope } from 'lucide-react';

const initialForm = {
  patientName: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

const AppointmentSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.patientName.trim()) nextErrors.patientName = 'Patient name is required.';
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email address is required.';
    if (!formData.service) nextErrors.service = 'Please select a service.';
    if (!formData.date) nextErrors.date = 'Preferred date is required.';
    if (!formData.time) nextErrors.time = 'Preferred time is required.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setFormData(initialForm);
    setErrors({});
  };

  return (
    <section id="appointment" className="appointment-section section-spacing">
      <div className="container">
        <div className="appointment-shell">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="appointment-copy">
                <p className="eyebrow text-primary">BOOK APPOINTMENT</p>
                <h2>Book Your Appointment</h2>
                <p>Schedule a consultation with our doctor at a time convenient for you.</p>
                <div className="mini-cta">
                  <div className="mini-icon">
                    <Stethoscope size={22} />
                  </div>
                  <div>
                    <strong>General Physician Consultation</strong>
                    <span>Quick and compassionate care</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              {!success ? (
                <form className="appointment-form" onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6 form-group">
                      <label htmlFor="patientName">Patient Name</label>
                      <input id="patientName" name="patientName" type="text" value={formData.patientName} onChange={handleChange} />
                      {errors.patientName && <span className="error-text">{errors.patientName}</span>}
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="service">Select Service</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Choose service</option>
                        <option>General Consultation</option>
                        <option>Fever & Infections</option>
                        <option>Diabetes Management</option>
                        <option>Blood Pressure Management</option>
                        <option>Preventive Healthcare</option>
                      </select>
                      {errors.service && <span className="error-text">{errors.service}</span>}
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="date">Preferred Date</label>
                      <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
                      {errors.date && <span className="error-text">{errors.date}</span>}
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="time">Preferred Time</label>
                      <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} />
                      {errors.time && <span className="error-text">{errors.time}</span>}
                    </div>
                    <div className="col-12 form-group">
                      <label htmlFor="message">Message / Symptoms</label>
                      <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Briefly describe your symptoms or concern" />
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Book Appointment <SendHorizonal size={16} />
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="success-panel">
                  <div className="success-mark">✓</div>
                  <h4>Appointment Request Submitted</h4>
                  <p>Our team will contact you shortly to confirm your appointment.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
