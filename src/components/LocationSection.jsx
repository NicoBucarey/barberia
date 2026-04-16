export default function LocationSection() {
  const latitude = "-34.6037"; // Reemplaza con tu latitud
  const longitude = "-58.3816"; // Reemplaza con tu longitud
  const googleMapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
  const location = "Av. Ejemplo 123, Buenos Aires, Argentina"; // Reemplaza con tu dirección

  return (
    <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Encuéntranos
        </h2>
        
        {/* Mapa */}
        <div className="mb-6 rounded-lg overflow-hidden shadow-md">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.867146918818!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s${encodeURIComponent(location)}!5e0!3m2!1ses!2sar!4v1234567890`}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la barbería"
          />
        </div>

        {/* Dirección */}
        <p className="text-gray-600 font-semibold mb-4">
          {location}
        </p>

        {/* Botón a Google Maps */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            bg-blue-500 hover:bg-blue-600
            text-white font-bold py-2 px-4
            rounded-lg transition-colors
          "
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          Ver en Google Maps
        </a>
      </div>
    </section>
  );
}
