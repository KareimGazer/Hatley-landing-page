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
          title="كل اللي نفسك فيه هيوصل لحد عندك"
          subtitle="محلاتك المفضلة"
          description="اطلب بيتزا سلايس او البيتزا كاملة، او جرب الأكل الصيني اللي كنت عايز تجربه"
          buttonText="ابحث عن المطاعم"
          imageSrc="/images/enjoy.jpg"
          imageAlt="شخص يستمتع بالطعام"
        />
        <CraveSection 
          direction="right"
          title="وصل مع هاتلي"
          subtitle="اكسب فلوس على مزاجك"
          description="اكسب فلوس بتوصيل طلبات الأكل والبقالة و البضاعة وغيرها. وخد 100% من التيبس"
          buttonText="ابدأ الكسب"
          imageSrc="/images/deliver.jpg"
          imageAlt="شخص يقوم بالتوصيل"
        />
      </main>
      <Footer />
    </>
  )
} 