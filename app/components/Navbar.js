import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-[#101010] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex gap-6">
          <Link href="/Home" className="hover:text-lime-300 transition">
            Home
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/portfolio" className="hover:text-lime-300 transition">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-lime-300 transition">
              About
            </Link>
            <Link href="/blog" className="hover:text-lime-300 transition">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-lime-300 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md border border-gray-700 px-3 py-2 text-sm hover:bg-gray-800"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
