export const hairstyles = [
  // Cortes con Fade
  {
    id: 1,
    title: "Low Fade",
    description: "Degradado que comienza cerca de la oreja y se mezcla suavemente hacia arriba.",
    image: "src/assets/images/lowFade.webp",
    category: "cortes-fade"
  },
  {
    id: 2,
    title: "Mid Fade",
    description: "El degradado empieza a mitad del lateral de la cabeza con una transición marcada.",
    image: "src/assets/images/midFace.webp",
    category: "cortes-fade"
  },
  {
    id: 3,
    title: "High Fade",
    description: "Degradado alto que deja los laterales muy cortos y resalta la parte superior.",
    image: "src/assets/images/highFade.webp",
    category: "cortes-fade"
  },
  {
    id: 4,
    title: "Taper Fade",
    description: "Desvanecido suave en patillas y nuca manteniendo más largo el resto del cabello.",
    image: "src/assets/images/taperFade.webp",
    category: "cortes-fade"
  },

  // Cortes modernos
  {
    id: 5,
    title: "Undercut",
    description: "Laterales muy cortos o rapados y la parte superior larga y marcada.",
    image: "src/assets/images/Undercut.webp",
    category: "cortes-modernos"
  },
  {
    id: 6,
    title: "Pompadour",
    description: "Cabello largo arriba peinado hacia atrás con volumen.",
    image: "src/assets/images/pompadour.webp",
    category: "cortes-modernos"
  },
  {
    id: 7,
    title: "Quiff",
    description: "Similar al pompadour pero con un estilo más natural y moderno.",
    image: "src/assets/images/quiff.webp",
    category: "cortes-modernos"
  },
  {
    id: 8,
    title: "French Crop",
    description: "Cabello corto con flequillo hacia adelante y laterales degradados.",
    image: "src/assets/images/frenchCrop.webp",
    category: "cortes-modernos"
  },
  // Cortes clásicos
  {
    id: 9,
    title: "Buzz Cut",
    description: "Cabello muy corto y uniforme en toda la cabeza.",
    image: "src/assets/images/buzzCut.webp",
    category: "cortes-clasicos"
  },
  {
    id: 10,
    title: "Crew Cut",
    description: "Laterales cortos y parte superior ligeramente más larga.",
    image: "src/assets/images/crewCut.webp",
    category: "cortes-clasicos"
  },
  {
    id: 11,
    title: "Side Part",
    description: "Corte clásico con raya marcada a un costado.",
    image: "src/assets/images/sidePart.webp",
    category: "cortes-clasicos"
  },

  // Cortes tendencia
  {
    id: 12,
    title: "Modern Mullet",
    description: "Cabello corto adelante y en los laterales, más largo en la parte trasera.",
    image: "src/assets/images/modernMullet.webp",
    category: "cortes-tendencia"
  },
  {
    id: 13,
    title: "Spiky Hair",
    description: "Cabello corto peinado hacia arriba en forma de picos.",
    image: "src/assets/images/spikyHair.webp",
    category: "cortes-tendencia"
  }
];

export const categories = [
  { id: "cortes-fade", name: "Cortes con Fade" },
  { id: "cortes-modernos", name: "Cortes Modernos" },
  { id: "cortes-clasicos", name: "Cortes Clásicos" },
  { id: "cortes-tendencia", name: "Cortes Tendencia" }
];