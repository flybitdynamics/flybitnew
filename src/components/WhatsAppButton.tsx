'use client';

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '919979850863';
  const message = 'Hi, I want the enquiry for the drone show in ';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group md:cursor-none"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulsing Outer Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none pointer-events-none" />

      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.795 1.451 5.485.002 9.948-4.463 9.95-9.954.002-2.66-1.033-5.159-2.915-7.04C16.5 1.77 14.007.788 11.347.788 5.862.788 1.4 5.253 1.398 10.743c-.001 1.684.453 3.327 1.319 4.76l-.999 3.648 3.73-.977zm11.367-7.23c-.31-.155-1.837-.906-2.121-.997-.285-.093-.491-.137-.699.155-.207.293-.802.997-.983 1.205-.18.208-.361.23-.671.077-1.11-.51-2.014-.925-2.793-1.602-.634-.552-.962-1.206-1.066-1.361-.103-.155-.012-.239.066-.316.07-.07.155-.18.232-.27.078-.09.104-.154.156-.258.05-.103.025-.195-.013-.273-.038-.077-.492-1.189-.672-1.62-.176-.426-.37-.367-.508-.374-.13-.007-.28-.008-.429-.008-.15 0-.393.056-.598.28-.205.224-.783.766-.783 1.867 0 1.1 1.002 2.164 1.14 2.35 1.4 1.86 2.49 3.01 4.65 3.86 1.47.58 2.37.59 3.22.46.72-.1 1.838-.75 2.096-1.44.258-.69.258-1.28.18-1.4-.078-.12-.285-.2-.595-.35z" />
      </svg>
    </a>
  );
}
