import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/hatley.png"
                alt="Hatley Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Center Text - Hidden on mobile */}
          <div className="hidden md:block">
            <h2 className="text-3xl font-bold text-secondary">
              Hatley
            </h2>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <button className="text-secondary hover:text-secondary-hover transition-colors px-4 py-2">
              "تسجيل دخول"
            </button>
            <button className="px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary-hover transition-colors">
              "إنشاء حساب"
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 