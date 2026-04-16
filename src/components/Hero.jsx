export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="/portada.webp"
        alt="Portada barbería"
        className="w-full h-full object-cover"
      />
      {/* Gradiente difuminado en el borde inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  );
}
