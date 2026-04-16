import { useState } from 'react'
import ImageModal from './ImageModal'

export default function HairstyleCard({ hairstyle }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={hairstyle.image}
            alt={hairstyle.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {hairstyle.title}
          </h3>
          <p className="text-sm text-gray-600">
            {hairstyle.description}
          </p>
        </div>
      </div>

      <ImageModal 
        hairstyle={hairstyle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
