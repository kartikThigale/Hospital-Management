import { Activity, Building2, CalendarCheck2, ShieldAlert } from 'lucide-react';

const iconMap = {
  ShieldAlert,
  Stethoscope: Activity,
  Building2,
  CalendarCheck2,
};

const QuickInfo = () => {
  const items = [
    { title: 'Emergency Care', text: '24/7 emergency assistance', icon: 'ShieldAlert' },
    { title: 'Qualified Doctors', text: 'Experienced medical professionals', icon: 'Stethoscope' },
    { title: 'Modern Facilities', text: 'Comfortable and hygienic environment', icon: 'Building2' },
    { title: 'Easy Appointments', text: 'Book your visit in minutes', icon: 'CalendarCheck2' },
  ];

  return (
    <section className="quick-info section-spacing">
      <div className="container">
        <div className="row g-4">
          {items.map(({ title, text, icon }) => {
            const Icon = iconMap[icon];
            return (
              <div className="col-12 col-md-6 col-xl-3" key={title}>
                <div className="info-card h-100">
                  <div className="info-icon">
                    <Icon size={25} />
                  </div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
