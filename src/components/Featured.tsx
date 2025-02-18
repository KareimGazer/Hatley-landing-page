import Image from 'next/image'

export default function Featured() {
  const publications = [
    {
      name: "Y Combinator",
      logo: "/images/publications/Y_Combinator_logo.svg",
      width: 70
    },
    {
      name: "X",
      logo: "/images/publications/X.svg",
      width: 70
    },
    {
      name: "Product Hunt",
      logo: "/images/publications/product-hunt.svg",
      width: 70
    },
    {
      name: "Reddit",
      logo: "/images/publications/reddit.svg",
      width: 70
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 text-sm uppercase tracking-wider mb-8">
          Featured in
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {publications.map((pub, index) => (
            <div 
              key={pub.name}
              className="grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: pub.width }}
            >
              <Image
                src={pub.logo}
                alt={pub.name}
                width={pub.width}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 