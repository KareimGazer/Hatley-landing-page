import Link from 'next/link'

export default function NeighborhoodSection() {
  const categories = {
    'Top Cities': [
      'Pizza',
      'Lunch',
      'Asian Food'
    ],
    'Top Cuisines': [
      'Chinese Food',
      'Seafood',
      'Italian Food',
      'Sushi',
      'Indian Food',
      'Vegan Food'
    ],
    'Top Chains': [
      'Cafe',
      'Dessert',
      'Sandwiches',
      'Thai Food',
      'Burgers',
      'Restaurants'
    ]
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Get more from your neighborhood
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-6 text-center md:text-left text-gray-900">
                {category}
              </h3>
              <div className="flex flex-col space-y-4">
                {items.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-secondary transition-colors text-center md:text-left"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 