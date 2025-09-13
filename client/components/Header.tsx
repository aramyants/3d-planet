import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  Search,
  Menu,
  Phone,
  Monitor,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-base font-medium transition-colors",
    isActive ? "text-blue-600" : "text-black/30 hover:text-black",
  );

export default function Header() {
  const languages = [
    { code: "en", label: "EN", flagUrl: "https://flagcdn.com/w80/gb.png" },
    { code: "hy", label: "HY", flagUrl: "https://flagcdn.com/w80/am.png" },
  ];
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "en";
    } catch {
      return "en";
    }
  });
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!switcherRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!switcherRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      {/* Main Header */}
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-0.5 lg:px-16">
          <div className="flex h-16 items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="3DPLANET"
                className="h-14 w-auto"
              />
            </Link>

            {/* Search */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-96">
              <Search className="h-6 w-6 text-gray-400 mr-2" />
              <input
                placeholder="Search"
                className="bg-transparent flex-1 text-sm text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/store" className={navLinkClass}>
                Store
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <button aria-label="Compare">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M21.6667 13L25.6667 9M25.6667 9L21.6667 5M25.6667 9L7 9V13M11 18.3333L7 22.3333M7 22.3333L11 26.3333M7 22.3333L25.6667 22.3333V18.3333"
                    stroke="#111928"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button aria-label="Wishlist">
                <Heart className="h-8 w-8 text-gray-700" />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative" ref={switcherRef}>
                  <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    className="flex items-center gap-2 px-2 py-1 rounded text-sm"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md overflow-hidden shadow-sm bg-white">
                      <img
                        src={languages.find((l) => l.code === lang)?.flagUrl}
                        alt={languages.find((l) => l.code === lang)?.label}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1 text-gray-500"
                    >
                      <path
                        d="M5 7l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {open && (
                    <ul className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-50">
                      {languages.map((l) => (
                        <li key={l.code}>
                          <button
                            type="button"
                            onClick={() => {
                              setLang(l.code);
                              setOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center gap-3"
                          >
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md overflow-hidden bg-white">
                              <img
                                src={l.flagUrl}
                                alt={l.label}
                                className="w-full h-full object-cover"
                              />
                            </span>
                            <span className="font-medium">{l.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-0.5 lg:px-16">
          <div className="flex h-12 items-center justify-around">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
              <Menu className="h-4 w-4" />
              Browse Categories
            </button>

            <div className="flex items-center justify-beetween gap-8 text-white/50">
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <Phone className="h-6 w-6" />
                <span className="text-base font-medium">Phones</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <Monitor className="h-6 w-6" />
                <span className="text-base font-medium">Computers</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <Camera className="h-6 w-6" />
                <span className="text-base font-medium">Cameras</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <Headphones className="h-6 w-6" />
                <span className="text-base font-medium">Headphones</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-6 w-6" />
                <span className="text-base font-medium">Gaming</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="lg:hidden border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded text-sm">
            <Menu className="h-4 w-4" />
            Browse Categories
          </button>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input
              placeholder="Search"
              className="bg-transparent flex-1 text-sm text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
