import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Service Marketplace Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <h1 className="text-xl font-bold text-gray-900">Service Marketplace</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Browse Services</Link></li>
            <li><Link href="/offer" className="text-gray-600 hover:text-gray-900">Offer a Service</Link></li>
            <li><Link href="auth/login" className="text-gray-600 hover:text-gray-900">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}