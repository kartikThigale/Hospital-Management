import { X, CalendarCheck2, Clock3, Phone, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  service: 'General Consultation',
  date: '',
  time: '',
};

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialState);
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.phone.trim()) nextErrors.phone = 'Phone is required.';
    if (!formData.date) nextErrors.date = 'Please select a date.';
    if (!formData.time) nextErrors.time = 'Please select a time.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="appointment-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header d-flex justify-content-between align-items-center">
          <div>
            <p className="eyebrow text-primary mb-1">Quick Booking</p>
            <h3>Request Appointment</h3>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close booking form">
            <X size={18} />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label htmlFor="modal-name">
                <User size={15} /> Name
              </label>
              <input
                id="modal-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="modal-phone">
                <Phone size={15} /> Phone
              </label>
              <input
                id="modal-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="modal-service">Service</label>
              <select id="modal-service" name="service" value={formData.service} onChange={handleChange}>
                <option>General Consultation</option>
                <option>Fever & Infections</option>
                <option>Diabetes Management</option>
                <option>Blood Pressure Management</option>
                <option>Preventive Healthcare</option>
              </select>
            </div>

            <div className="row g-3">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="modal-date">
                    <CalendarCheck2 size={15} /> Date
                  </label>
                  <input id="modal-date" name="date" type="date" value={formData.date} onChange={handleChange} />
                  {errors.date && <span className="error-text">{errors.date}</span>}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="modal-time">
                    <Clock3 size={15} /> Time
                  </label>
                  <input id="modal-time" name="time" type="time" value={formData.time} onChange={handleChange} />
                  {errors.time && <span className="error-text">{errors.time}</span>}
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Request Appointment
            </button>
          </form>
        ) : (
          <div className="success-box">
            <div className="success-icon">✓</div>
            <h4>Appointment Request Submitted</h4>
            <p>Our team will contact you shortly to confirm your appointment.</p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
