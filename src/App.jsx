import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import AppointmentModal from './components/AppointmentModal';
import AppointmentSection from './components/AppointmentSection';
import Contact from './components/Contact';
import DoctorProfile from './components/DoctorProfile';
import Facilities from './components/Facilities';
import FAQ from './components/FAQ';
import FloatingContactButton from './components/FloatingContactButton';
import Footer from './components/Footer';
import HealthCheckupCTA from './components/HealthCheckupCTA';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TopBar from './components/TopBar';
import WhyChooseUs from './components/WhyChooseUs';
import BackToTop from './components/BackToTop';

const PageBanner = ({ title, description }) => (
  <section className="page-banner">
    <div className="container">
      <p className="eyebrow text-primary">CAREPLUS</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </section>
);

const HomePage = ({ onBookClick }) => (
  <>
    <Hero onBookClick={onBookClick} />
    <QuickInfo />
    <About />
    <Services />
    <WhyChooseUs />
    <DoctorProfile />
    <AppointmentSection />
    <Facilities />
    <HealthCheckupCTA />
    <Testimonials />
    <FAQ />
    <Contact />
  </>
);

const AboutPage = () => (
  <>
    <PageBanner 
      title="About CarePlus"
      description="Compassionate, preventive and patient-centered healthcare for every stage of life."
    />
    <About />
    <WhyChooseUs />
    <HealthCheckupCTA />
  </>
);

const ServicesPage = () => (
  <>
    <PageBanner 
      title="Our Medical Services"
      description="Trustworthy general physician care and personalized treatment support for your everyday health needs."
    />
    <Services />
    <HealthCheckupCTA />
  </>
);

const DoctorPage = () => (
  <>
    <PageBanner 
      title="Meet Our Doctor"
      description="Focused on preventive care, diagnosis and long-term health guidance for adults and families."
    />
    <DoctorProfile />
    <WhyChooseUs />
  </>
);

const ContactPage = () => (
  <>
    <PageBanner 
      title="Contact Us"
      description="We are here to help with appointments, questions and personalized care support."
    />
    <Contact />
  </>
);

const AppointmentPage = () => (
  <>
    <PageBanner 
      title="Book Consultation"
      description="Schedule a visit with our general physician at a time that works for you."
    />
    <AppointmentSection />
  </>
);

const AppLayout = ({ onBookClick }) => (
  <>
    <TopBar />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage onBookClick={onBookClick} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
    </main>
    <Footer />
    <FloatingContactButton />
    <BackToTop />
  </>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setIsModalOpen(true);
    const buttons = document.querySelectorAll('[data-book-trigger]');

    buttons.forEach((button) => {
      button.addEventListener('click', openModal);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', openModal);
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AppLayout onBookClick={() => setIsModalOpen(true)} />
    </BrowserRouter>
  );
}

export default App;
