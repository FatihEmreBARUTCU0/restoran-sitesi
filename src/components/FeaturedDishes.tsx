import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dishes = [
  {
    name: "Kuzu İncik Haşlama",
    description:
      "Saatlerce kısık ateşte pişirilmiş, kemiğinden düşen kuzu incik. Kavurulmuş sebzeler ve ev yapımı ekmekle servis edilir.",
    price: "₺385",
    tag: "Şef Önerisi",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    name: "Levrek Izgara",
    description:
      "Ege'den günlük gelen levrek, limon-kapari sosuyla servis edilir. Taze roka ve domates salatası eşliğinde.",
    price: "₺295",
    tag: "Taze",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
  },
  {
    name: "İmam Bayıldı",
    description:
      "Zeytinyağlı patlıcan dolması, domates-soğan ile fırında yavaş pişirilmiş. Mevsim sebzeleriyle hazırlanır.",
    price: "₺185",
    tag: "Vejetaryen",
    image:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80",
  },
  {
    name: "Osmanlı Kebabı",
    description:
      "Kıyma, kuzu eti ve seçkin baharatların buluşmasıyla oluşan özel karışım. Közde pişirilir, yoğurtlu sos ile.",
    price: "₺325",
    tag: "En Çok Satan",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  {
    name: "Tavuklu Güveç",
    description:
      "Serbest dolaşan köy tavuğu, taze domates, biber ve bahçe otlarıyla toprak güveçte pişirilir.",
    price: "₺245",
    tag: "Geleneksel",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    name: "Künefe",
    description:
      "Hatay usulü tel kadayıf arasında taze peynir, gül şerbeti ve dövülmüş Antep fıstığı ile hazırlanır.",
    price: "₺135",
    tag: "Tatlı",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
  },
];

const tagColors: Record<string, string> = {
  "Şef Önerisi": "bg-primary text-primary-foreground",
  Taze: "bg-emerald-100 text-emerald-800",
  Vejetaryen: "bg-green-100 text-green-800",
  "En Çok Satan": "bg-amber-100 text-amber-800",
  Geleneksel: "bg-orange-100 text-orange-800",
  Tatlı: "bg-pink-100 text-pink-800",
};

export default function FeaturedDishes() {
  return (
    <section id="menu" className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Lezzetlerimiz
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Öne Çıkan Yemekler
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Şeflerimizin özenle hazırladığı, misafirlerimizin en çok sevdiği
            seçkin lezzetler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <Card key={dish.name} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex h-5 items-center rounded-3xl px-2.5 py-0.5 text-xs font-medium ${tagColors[dish.tag] ?? "bg-secondary text-secondary-foreground"}`}
                  >
                    {dish.tag}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-heading text-lg font-semibold text-foreground">
                    {dish.name}
                  </CardTitle>
                  <span className="font-heading text-lg font-bold text-primary shrink-0">
                    {dish.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {dish.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
