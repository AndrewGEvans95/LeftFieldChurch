import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="border-y-2 border-black py-4">
      <div className="zine-container">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/zine" className="hover:text-gray-600">
              Zine
            </Link>
          </li>
          <li>
            <Link href="/bingo" className="hover:text-gray-600">
              Bingo
            </Link>
          </li>
          <li>
            <Link href="/schedule" className="hover:text-gray-600">
              Schedule
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
} 