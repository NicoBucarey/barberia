import Hero from './components/Hero'
import HairstyleSection from './components/HairstyleSection'
import ContactSection from './components/ContactSection'
import LocationSection from './components/LocationSection'
import SocialLinks from './components/SocialLinks'
import { hairstyles, categories } from './data/hairstyles'
import './App.css'

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      
      <main className="mx-auto">
        {categories.map(category => (
          <HairstyleSection 
            key={category.id} 
            category={category} 
            hairstyles={hairstyles}
          />
        ))}
      </main>

      <ContactSection />
      <LocationSection />
      <SocialLinks />
    </div>
  )
}

export default App
