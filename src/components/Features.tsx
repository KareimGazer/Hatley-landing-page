import Image from 'next/image'

export default function Features() {
  const features = [
    {
      title: "كن تاجراً",
      description: "اجذب عملاء جدد وزود مبيعاتك، ابدأ مع 0% عمولة لمدة 30 يوم",
      image: "/images/features/Storefront.svg",
      cta: {
        text: "سجل مع هاتلي",
        link: "#"
      }
    },
    {
      title: "احصل على أفضل تجربة مع هاتلي",
      description: "استمتع بأفضل ما يقدمه حيك، كله في تطبيق واحد",
      image: "/images/features/iphone.svg",
      cta: {
        text: "حمل التطبيق",
        link: "#"
      }
    },
    {
      title: "كن شريكاً",
      description: "نمي مشروعك واوصل لعملاء جدد بالشراكة مع هاتلي",
      image: "/images/features/ScootScoot.svg",
      cta: {
        text: "سجل كشريك",
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