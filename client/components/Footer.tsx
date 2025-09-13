import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t">
      <div className="mx-auto max-w-7xl px-4 lg:px-40 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src="/images/logo.png"
              alt="3DPLANET"
              className="h-14 w-auto"
            />
            <p className="text-sm text-gray-500">
              Powering everyday life with technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              RESOURCES
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/store" className="hover:text-gray-900">
                  Store
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              CONTACT US
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>+37410520508</li>
              <li>info@3dplanet.am</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">LEGAL</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="#" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t pt-6 text-xs text-gray-500">
          <p>© 2025 3DPLANET.AM All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
