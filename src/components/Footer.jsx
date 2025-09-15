import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-green-200/60 backdrop-blur-md relative shadow-lg">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex justify-between md:grid-cols-3 gap-8 relative z-10">
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li>📍 Medicaps University</li>
            <li>Indore, Madhya Pradesh</li>
            <li>✉️ en22cs301104@medicaps.ac.in</li>
            <li>📞 +91 1234567890</li>
          </ul>
        </div>

        {/* Support & Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Main Pages */}
          <div>
            <h3 className="font-semibold mb-3 text-green-900">Explore AgroPal</h3>
            <ul className="text-gray-800 text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-green-700 transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-700 transition">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-700 transition">Contact</a>
              </li>
            </ul>
          </div>

        {/* Right Column - Services */}
        <div>
          <h3 className="font-semibold text-green-900">Our Services</h3>
          <ul className="text-gray-800 text-sm space-y-2">
            <li>
              <a href="/predict" className="hover:text-green-700 transition">Smart Irrigation</a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-700 transition">Adaptive Inventory Control</a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-700 transition">Farm-to-Trade Network</a>
            </li>
            {/* Add more services as needed */}
          </ul>
        </div>
      </div>


        {/* Social & Branding */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-green-600">
              <Facebook />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              <Twitter />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              <Instagram />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-700 border-t border-green-300/50 py-4">
        © {new Date().getFullYear()} AgroPal. All rights reserved.
      </div>
    </footer>
  );
}
