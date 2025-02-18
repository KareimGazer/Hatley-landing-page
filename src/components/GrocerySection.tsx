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
          Get grocery and<br />
          convenience store<br />
          essentials
        </h2>
        <h3 className="text-2xl font-bold mb-4">
          Grocery delivery, exactly how you want it.
        </h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.
        </p>
        <button className="bg-secondary hover:bg-secondary-hover text-secondary-content px-8 py-3 rounded-full transition-colors text-lg font-medium">
          Shop Groceries
        </button>
      </div>
    </section>
  )
} 