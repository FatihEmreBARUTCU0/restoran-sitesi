import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
        alt="Lezzet House restoran masası"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-accent font-medium text-sm md:text-base tracking-widest uppercase mb-4">
          İstanbul — Beyoğlu
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight mb-6">
          İstanbul&apos;un
          <br />
          <span className="text-accent italic">En İyi Sofrası</span>
        </h1>
        <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Geleneksel Türk mutfağının en nadide lezzetlerini, modern bir
          atmosferde sizinle buluşturuyoruz. Her lokma, yılların ustalığının
          meyvesidir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base"
          >
            <a href="#rezervasyon">Hemen Rezervasyon Yap</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 rounded-full px-8 py-6 text-base backdrop-blur-sm"
          >
            <a href="#menu">Menüyü İncele</a>
          </Button>
        </div>
      </div>

      <a
        href="#hakkimizda"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ChevronDown className="size-8" />
      </a>
    </section>
  );
}
