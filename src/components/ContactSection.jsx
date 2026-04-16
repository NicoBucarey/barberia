export default function ContactSection() {
  const phoneNumber = "541234567890"; // Reemplaza con tu número de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola%2C%20me%20gustaría%20agendar%20un%20corte`;

  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Listo para tu nuevo corte?
        </h2>
        <p className="text-gray-600 mb-6">
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
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-5.041 5.697-5.041 9.677 0 3.584 1.232 6.965 3.506 9.672l-.25 1.697 1.799-.545c2.681 1.468 5.802 2.241 9.015 2.241 9.855 0 17.845-8.029 17.845-17.916 0-4.767-1.948-9.26-5.488-12.637-3.539-3.378-8.245-5.238-13.236-5.238" />
          </svg>
          Agendar por WhatsApp
        </a>
      </div>
    </section>
  );
}
