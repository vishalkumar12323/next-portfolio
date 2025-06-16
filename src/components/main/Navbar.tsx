"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience/Skills", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-md bg-background/40 border-b shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand / Logo (optional) */}
          <div className="text-xl font-semibold">MySite</div>

          {/* Desktop Nav */}
          <div className="flex gap-4">
            <div className="hidden md:flex md:justify-end space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-white dark:text-black"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right controls (theme toggle + menu icon) */}
            <div className="flex items-center space-x-2">
              {mounted && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="cursor-pointer"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </Button>
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={toggleMenu}
                className="md:hidden"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="flex flex-col space-y-2 mt-2 pb-4 md:hidden animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`block text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-white dark:text-black"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
