import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

export default function SocialLinks() {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/davincibarber?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // Reemplaza con tu Instagram
      icon: <FaInstagram className="w-6 h-6" />
    },
    {
      name: "Facebook",
      url: "https://facebook.com", // Reemplaza con tu Facebook
      icon: <FaFacebook className="w-6 h-6" />
    },
    {
      name: "TikTok",
      url: "https://tiktok.com", // Reemplaza con tu TikTok
      icon: <FaTiktok className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold !text-black mb-6">
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

        
      </div>
    </section>
  );
}
