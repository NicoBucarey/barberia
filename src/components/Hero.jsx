export default function Hero() {
  return (
    <section className="relative w-full h-96 md:h-screen overflow-hidden">
      <img
        src="src/assets/portada.webp"
        alt="Portada barbería"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* <div className="relative inset-0 bg-black bg-opacity-40 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbería</h1>
          <p className="text-lg md:text-xl">Descubre nuestros mejores cortes</p>
        </div>
      </div> */}
    </section>
  );
}
