import Image from "next/image";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/logo.jpg"
              alt="Ghar Real Estate"
              width={150}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Make It Happen 🏡✨
              <br />
              Trusted Real Estate Agents in Melbourne
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#listings" className="text-gray-400 hover:text-primary transition-colors">
                  Listings
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Property Buying</li>
              <li>Property Selling</li>
              <li>Investment Guidance</li>
              <li>Market Analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMail className="text-primary" />
                <a href="mailto:admin@ghar.au" className="hover:text-primary transition-colors">
                  admin@ghar.au
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiPhone className="text-primary" />
                <a href="tel:0435006666" className="hover:text-primary transition-colors">
                  0435 006 666
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMapPin className="text-primary" />
                <span>Melbourne, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ghar Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
