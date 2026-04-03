import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "2008", label: "Kuruluş Yılı" },
  { value: "48K+", label: "Mutlu Misafir" },
  { value: "12", label: "Uzman Şef" },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=85"
                alt="Lezzet House mutfak ve şefler"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=85"
                alt="Şef yemek hazırlıyor"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>

          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Hikayemiz
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Sofradan Kalbe,
              <br />
              <span className="text-primary italic">Kalpten Sofraya</span>
            </h2>
            <Separator className="w-16 h-0.5 bg-primary mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              2008 yılında İstanbul Beyoğlu&apos;nda kapılarını açan Lezzet
              House, kuruluşundan bu yana tek bir ilkeyle yol alıyor: Her
              misafire ev sıcaklığında, kaliteyle harmanlanmış bir sofra
              deneyimi sunmak.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Anadolu&apos;nun dört bir yanından getirilen taze malzemeler ve
              ustalardan öğrenilmiş tariflerle hazırladığımız her yemek,
              geçmişten gelen bir anıyı bugüne taşır. Ailenizle, sevdiklerinizle
              ya da iş ortaklarınızla… Her özel anınıza layık bir mekânız.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
