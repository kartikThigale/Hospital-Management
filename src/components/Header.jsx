import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CalendarPlus2, Menu, Phone, X } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Doctor', path: '/doctor' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container d-flex align-items-center justify-content-between py-3">
          <Link to="/" className="brand d-flex align-items-center gap-3" aria-label="CarePlus home">
            <div className="brand-mark">+</div>
            <div>
              <div className="brand-name">{hospitalData.name}</div>
            </div>
          </Link>

          <nav className="main-nav d-none d-lg-flex align-items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions d-flex align-items-center gap-3">
            <a href="tel:+919000000000" className="btn btn-outline-primary d-none d-md-inline-flex align-items-center gap-2">
              <Phone size={16} />
              Emergency
            </a>
            <button className="btn btn-primary btn-book" data-book-trigger>
              <CalendarPlus2 size={16} />
              Book Appointment
            </button>
            <button
              type="button"
              className="btn btn-menu d-lg-none"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''} d-lg-none`}>
        <div className="mobile-menu-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <button className="btn btn-primary w-100 mt-3" data-book-trigger onClick={closeMenu}>
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
