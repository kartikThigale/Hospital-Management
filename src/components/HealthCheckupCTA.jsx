import { ArrowRight } from 'lucide-react';

const HealthCheckupCTA = () => {
  return (
    <section className="checkup-cta section-spacing">
      <div className="container">
        <div className="checkup-banner">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <p className="eyebrow text-primary">PREVENTIVE CARE</p>
              <h2>Take the First Step Towards Better Health</h2>
              <p>Regular health checkups can help identify potential health concerns early.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button className="btn btn-primary btn-lg">
                Schedule a Health Checkup <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCheckupCTA;
