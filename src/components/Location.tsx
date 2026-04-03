import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const hours = [
  { day: "Pazartesi – Perşembe", time: "12:00 – 23:00" },
  { day: "Cuma – Cumartesi", time: "12:00 – 00:00" },
  { day: "Pazar", time: "12:00 – 22:00" },
];

export default function Location() {
  return (
    <section id="konum" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Bizi Bulun
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Konum & İletişim
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            İstanbul Beyoğlu&apos;nun kalbinde, her yerden kolayca ulaşabileceğiniz
            bir noktadayız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-4xl overflow-hidden shadow-md ring-1 ring-foreground/5 h-80 lg:h-auto lg:min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48192.0!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zQmV5b8SfbHUvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1680000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lezzet House Konumu"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Card>
              <CardContent className="pt-6 pb-6 flex gap-4 items-start">
                <div className="flex items-center justify-center size-10 rounded-2xl bg-primary/10 shrink-0 mt-0.5">
                  <MapPin className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Adres</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Örnek Mahallesi, Örnek Sokak No: 1/A
                    <br />
                    Beyoğlu, İstanbul
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 pb-6 flex gap-4 items-start">
                <div className="flex items-center justify-center size-10 rounded-2xl bg-primary/10 shrink-0 mt-0.5">
                  <Phone className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Telefon</p>
                  <span className="text-primary text-sm font-medium">
                    +90 (2XX) XXX XX XX
                  </span>
                  <br />
                  <span className="text-muted-foreground text-sm">
                    +90 (5XX) XXX XX XX
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 pb-6 flex gap-4 items-start">
                <div className="flex items-center justify-center size-10 rounded-2xl bg-primary/10 shrink-0 mt-0.5">
                  <Mail className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">E-posta</p>
                  <span className="text-primary text-sm font-medium">
                    info@ornek-restoran.com
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 pb-6 flex gap-4 items-start">
                <div className="flex items-center justify-center size-10 rounded-2xl bg-primary/10 shrink-0 mt-0.5">
                  <Clock className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground mb-3">
                    Çalışma Saatleri
                  </p>
                  <div className="flex flex-col gap-2">
                    {hours.map((h, i) => (
                      <div key={h.day}>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{h.day}</span>
                          <span className="font-medium text-foreground">{h.time}</span>
                        </div>
                        {i < hours.length - 1 && (
                          <Separator className="mt-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
