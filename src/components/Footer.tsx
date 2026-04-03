import { UtensilsCrossed, Globe, Share2, Rss, Code2, Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Menü", href: "#menu" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Rezervasyon", href: "#rezervasyon" },
  { label: "Konum", href: "#konum" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Web Sitesi" },
  { icon: Share2, href: "#", label: "Sosyal Medya" },
  { icon: Rss, href: "#", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="size-6 text-accent" strokeWidth={1.5} />
              <span className="font-heading text-xl font-semibold text-background">
                Lezzet House
              </span>
            </a>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              2008&apos;den beri İstanbul&apos;un kalbinde, geleneksel Türk
              mutfağının en seçkin lezzetlerini modern bir atmosferle sunuyoruz.
            </p>
          </div>

          <div>
            <p className="font-medium text-background mb-4">Sayfalar</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-background mb-4">İletişim</p>
            <address className="not-italic text-background/60 text-sm leading-relaxed flex flex-col gap-1.5 mb-6">
              <span>Örnek Mahallesi, Örnek Sokak No: 1/A</span>
              <span>Beyoğlu, İstanbul</span>
              <span className="mt-1">+90 (2XX) XXX XX XX</span>
              <span>info@ornek-restoran.com</span>
            </address>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center size-9 rounded-2xl bg-background/10 hover:bg-background/20 text-background/70 hover:text-background transition-colors"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-background/10 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-background/50 text-xs">
          <p>© {new Date().getFullYear()} Lezzet House. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2">
            <span>Built by Fatih Emre Barutcu</span>
            <a
              href="https://www.linkedin.com/in/fatih-emre-barut%C3%A7u-415457365/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center size-6 rounded-lg bg-background/10 hover:bg-background/20 text-background/60 hover:text-background transition-colors"
            >
              <Briefcase className="size-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/FatihEmreBARUTCU0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center size-6 rounded-lg bg-background/10 hover:bg-background/20 text-background/60 hover:text-background transition-colors"
            >
              <Code2 className="size-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
