import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#FF3008] to-[#FF5733] min-h-[600px] px-4 py-16">
      {/* Background food images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute">
          <Image
            src="/ramadan-bg.png"
            width={1600}
            height={900}
            className="hidden lg:block"
            alt="ramadanian background"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-white text-5xl font-bold mb-4">
          "اكتشف المحلات والمزيد جمبك"
        </h1>
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
          "خد اكلك اللي بتحبه والبقالة و البضاعة واكتر كمان يوصل لحد بابك مع هاتلي"
        </p>
        
        {/* Search input */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="ادخل عنوان التوصيل"
              className="w-full px-12 py-4 rounded-full text-lg focus:outline-none"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary-hover text-secondary-content px-8 py-3 rounded-full transition-colors">
              <svg
                className="w-6 h-6"
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
            </button>
          </div>
          
          <button className="mt-4 text-white flex items-center gap-2 mx-auto">
            "سجل دخول لحفظ العنوان"
          </button>
        </div>
      </div>
    </section>
  )
} 