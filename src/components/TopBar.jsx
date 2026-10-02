import { Phone, Clock3, Siren } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const TopBar = () => {
  return (
    <div className="topbar d-none d-lg-flex align-items-center justify-content-center">
      <div className="container d-flex justify-content-between align-items-center gap-3 py-2 small-text">
        <div className="d-flex align-items-center gap-2">
          <Siren size={14} />
          <span>Emergency: {hospitalData.emergencyPhone}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Clock3 size={14} />
          <span>{hospitalData.hours.weekday}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Phone size={14} />
          <span>{hospitalData.hours.sunday}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
