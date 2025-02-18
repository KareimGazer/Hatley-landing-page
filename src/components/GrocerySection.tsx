import Image from 'next/image'

export default function GrocerySection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/grocery-bg.jpg"
          alt="Grocery items"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">
          "احصل على البقالة<br />
          ومستلزمات<br />
          السوبر ماركت"
        </h2>
        <h3 className="text-2xl font-bold mb-4">
          "توصيل البقالة، بالظبط زي ما تحب"
        </h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          "اطلب من البيت واملي سلتك بالخضار الطازجة، والأكل المجمد، والجبن واللحوم وأكتر"
        </p>
        <button className="bg-secondary hover:bg-secondary-hover text-secondary-content px-8 py-3 rounded-full transition-colors text-lg font-medium">
          "تسوق المنتجات"
        </button>
      </div>
    </section>
  )
} 