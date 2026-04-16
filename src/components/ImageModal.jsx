export default function ImageModal({ hairstyle, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg max-w-2xl w-full"
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
          className="w-full h-auto object-cover rounded-t-lg"
        />

        {/* Título */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800" translate="no">
            {hairstyle.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
