export default function ImageModal({ hairstyle, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg max-w-2xl w-full max-h-96 md:max-h-screen overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 text-xl"
        >
          ✕
        </button>

        {/* Imagen expandida */}
        <img
          src={hairstyle.image}
          alt={hairstyle.title}
          className="w-full h-auto object-cover"
        />

        {/* Info */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {hairstyle.title}
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            {hairstyle.description}
          </p>
          <button
            onClick={onClose}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
