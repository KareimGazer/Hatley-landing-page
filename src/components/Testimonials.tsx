import Image from 'next/image'

export default function Testimonials() {
  const brands = [
    {
      name: "McDonald's",
      logo: "/images/brands/Almarai_Logo.svg"
    },
    {
      name: "Burger King",
      logo: "/images/brands/egyfoods.png"
    },
    {
      name: "KFC",
      logo: "/images/brands/bawadi.jpg"
    },
    {
      name: "Subway",
      logo: "/images/brands/domty.png"
    },
    {
      name: "Pizza Hut",
      logo: "/images/brands/pizzahut.svg"
    },
    {
      name: "Domino's",
      logo: "/images/brands/lamar.png"
    },
    {
      name: "Wendy's",
      logo: "/images/brands/halwani.png"
    },
    {
      name: "Taco Bell",
      logo: "/images/brands/tacobell.svg"
    }
  ]

  const BrandRow = ({ direction = 'normal' }: { direction?: 'normal' | 'reverse' }) => (
    <div className="relative">
      <div className={`flex gap-12 ${direction === 'normal' ? 'animate-scroll' : 'animate-scroll-reverse'}`}>
        {/* First set of brands */}
        {brands.map((brand, index) => (
          <div
            key={`brand-1-${index}`}
            className="flex-shrink-0 w-32 h-32 bg-white rounded-full p-6 shadow-sm flex items-center justify-center"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
        
        {/* Duplicate set for infinite scroll */}
        {brands.map((brand, index) => (
          <div
            key={`brand-2-${index}`}
            className="flex-shrink-0 w-32 h-32 bg-white rounded-full p-6 shadow-sm flex items-center justify-center"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          أشهر الماركات على هاتلي
        </h2>
        
        <div className="space-y-12">
          <BrandRow direction="normal" />
          <BrandRow direction="reverse" />
        </div>
      </div>
    </section>
  )
} 