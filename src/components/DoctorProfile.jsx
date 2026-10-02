import { ArrowRight, BadgeCheck, BriefcaseMedical, Stethoscope } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const DoctorProfile = () => {
  return (
    <section id="doctor" className="doctor-section section-spacing">
      <div className="container">
        <div className="doctor-card">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="doctor-image-wrap">
                <img src={hospitalData.doctor.image} alt={hospitalData.doctor.name} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="doctor-content">
                <p className="eyebrow text-primary">MEET OUR DOCTOR</p>
                <h2>{hospitalData.doctor.name}</h2>
                <p className="doctor-qualification">{hospitalData.doctor.qualification}</p>
                <div className="doctor-meta">
                  <span><BriefcaseMedical size={16} /> {hospitalData.doctor.experience}</span>
                </div>
                <p className="doctor-description">{hospitalData.doctor.description}</p>

                <div className="doctor-grid">
                  <div>
                    <h4>Qualifications</h4>
                    <ul>
                      <li>MBBS</li>
                      <li>MD – General Medicine</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Areas of Expertise</h4>
                    <ul>
                      {hospitalData.doctor.areas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="doctor-actions">
                  <button className="btn btn-primary">
                    View Doctor Profile <ArrowRight size={16} />
                  </button>
                  <button className="btn btn-ghost" data-book-trigger>
                    <BadgeCheck size={16} /> Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
