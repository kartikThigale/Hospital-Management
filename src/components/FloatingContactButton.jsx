import { MessageCircleMore, CalendarPlus2 } from 'lucide-react';

const FloatingContactButton = () => {
  return (
    <>
      <a href="https://wa.me/919000000000" className="floating-whatsapp" aria-label="WhatsApp contact">
        <MessageCircleMore size={26} />
      </a>
      <button className="floating-book btn btn-primary d-md-none" data-book-trigger>
        <CalendarPlus2 size={18} />
        Book
      </button>
    </>
  );
};

export default FloatingContactButton;
