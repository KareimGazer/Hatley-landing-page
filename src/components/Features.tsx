import Image from 'next/image'

export default function Features() {
  const features = [
    {
      title: "Become a Merchant",
      description: "Attract new customers and grow sales, starting with 0% commissions for up to 30 days.",
      image: "/images/features/Storefront.svg",
      cta: {
        text: "Sign up for DoorDash",
        link: "#"
      }
    },
    {
      title: "Get the best DoorDash experience",
      description: "Experience the best your neighborhood has to offer, all in one app.",
      image: "/images/features/iphone.svg",
      cta: {
        text: "Get the app",
        link: "#"
      }
    },
    {
      title: "Become a Partner",
      description: "Grow your business and reach new customers by partnering with Hatley",
      image: "/images/features/ScootScoot.svg",
      cta: {
        text: "Sign up for Hatley",
        link: "#"
      }
    }
  ]

  return (
    <section className="py-20 px-4  bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 bg-[#EEF6FF] rounded-full -z-10" />
              <Image
                src={feature.image}
                alt={feature.title}
                width={200}
                height={200}
                className="object-contain p-4"
              />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{feature.title}</h2>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            <a 
              href={feature.cta.link}
              className="text-secondary hover:text-secondary-hover font-semibold inline-flex items-center hover:opacity-80 transition-opacity"
            >
              {feature.cta.text}
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
} 