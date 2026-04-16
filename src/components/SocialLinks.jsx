export default function SocialLinks() {
  const socials = [
    {
      name: "Instagram",
      url: "https://instagram.com", // Reemplaza con tu Instagram
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://facebook.com", // Reemplaza con tu Facebook
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: "TikTok",
      url: "https://tiktok.com", // Reemplaza con tu TikTok
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.6.75h2.7v11.561c0 1.537-.5 2.766-1.444 2.766-1.009 0-1.795-.969-1.795-2.506V.75h2.944V10.078c0 .438.262.797.623.797.346 0 .616-.359.616-.797V.75z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Síguenos
        </h2>
        
        <div className="flex justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-600 hover:text-blue-500
                transition-colors transform hover:scale-110
              "
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-6">
          Mantente actualizado con nuestros últimos estilos y promociones
        </p>
      </div>
    </section>
  );
}
