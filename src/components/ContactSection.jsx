import { FaWhatsapp } from 'react-icons/fa'

export default function ContactSection() {
  const phoneNumber = "5492996265789"; // Reemplaza con tu número de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola%2C%20me%20gustaría%20agendar%20un%20corte`;

  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold !text-black mb-4">
          ¿Listo para tu nuevo corte?
        </h2>
        <p className="!text-gray-600 mb-6">
          Contáctanos por WhatsApp para agendar tu cita
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            bg-green-500 hover:bg-green-600
            text-white font-bold py-3 px-6
            rounded-lg transition-colors
            text-center justify-center
          "
        >
          <FaWhatsapp className="w-5 h-5" />
          Agendar por WhatsApp
        </a>
      </div>
    </section>
  );
}
