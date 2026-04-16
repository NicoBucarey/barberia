import HairstyleCard from './HairstyleCard';

export default function HairstyleSection({ category, hairstyles }) {
  const sectionHairstyles = hairstyles.filter(cut => cut.category === category.id);

  return (
    <section className="py-8 px-4 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 pb-4">
        {category.name}
      </h2>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {sectionHairstyles.map(hairstyle => (
          <HairstyleCard key={hairstyle.id} hairstyle={hairstyle} />
        ))}
      </div>
    </section>
  );
}
