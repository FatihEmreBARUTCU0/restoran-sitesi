"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Menü", href: "#menu" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Konum", href: "#konum" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <UtensilsCrossed
              className="text-primary size-6"
              strokeWidth={1.5}
            />
            <span
              className={cn(
                "font-heading text-xl font-semibold transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              Lezzet House
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  scrolled ? "text-foreground/80" : "text-white/90"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <a href="#rezervasyon">Rezervasyon Yap</a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-md transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Menüyü aç"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 text-sm font-medium hover:text-primary transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full mt-2">
              <a href="#rezervasyon" onClick={() => setIsOpen(false)}>
                Rezervasyon Yap
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
