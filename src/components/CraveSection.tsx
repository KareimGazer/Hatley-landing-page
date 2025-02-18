import Image from 'next/image'

interface CraveSectionProps {
  direction?: 'left' | 'right'
  title: string
  subtitle: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
}

export default function CraveSection({
  direction = 'left',
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  imageAlt
}: CraveSectionProps) {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center ${direction === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`lg:w-1/2 mb-10 lg:mb-0 ${direction === 'left' ? 'lg:pr-12' : 'lg:pl-12'} z-10`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">
              {subtitle}
            </h3>
            <p className="text-gray-600 text-base lg:text-lg mb-8 max-w-lg">
              {description}
            </p>
            <button className="bg-secondary hover:bg-secondary-hover text-secondary-content px-6 lg:px-8 py-3 rounded-full transition-colors text-base lg:text-lg font-medium">
              {buttonText}
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className={`w-full lg:absolute ${direction === 'left' ? 'lg:-right-16 xl:-right-24' : 'lg:-left-16 xl:-left-24'} lg:-top-20`}>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 