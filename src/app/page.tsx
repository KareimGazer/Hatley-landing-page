import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Featured from '@/components/Featured'
import GrocerySection from '@/components/GrocerySection'
import CraveSection from '@/components/CraveSection'
import NeighborhoodSection from '@/components/NeighborhoodSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Featured />
        <Features />
        <Testimonials />
        <GrocerySection />
        <CraveSection 
          direction="left"
          title="Everything you\ncrave, delivered."
          subtitle="Your favorite local restaurants"
          description="Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try."
          buttonText="Find restaurants"
          imageSrc="/images/enjoy.jpg"
          imageAlt="Person enjoying food at a picnic"
        />
        <CraveSection 
          direction="right"
          title="Deliver with\nDoorDash"
          subtitle="Make money on your schedule"
          description="Earn money by delivering food orders, groceries, and more. Plus, get 100% of your tips, always."
          buttonText="Start earning"
          imageSrc="/images/deliver.jpg"
          imageAlt="Person delivering food"
        />
      </main>
      <Footer />
    </>
  )
} 