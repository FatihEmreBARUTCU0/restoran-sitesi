import { Leaf, ChefHat, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "Taze & Doğal Malzeme",
    description:
      "Her sabah yerel üreticilerden teslim alınan taze sebze, meyve ve etler kullanıyoruz. Katkı maddesi veya hazır ürün asla kullanmıyoruz.",
  },
  {
    icon: ChefHat,
    title: "Usta Şefler",
    description:
      "12 uzman şefimiz yıllarca Türkiye'nin önde gelen restoranlarında çalışmış, geleneksel tarifleri modern tekniklerle harmanlıyor.",
  },
  {
    icon: Sparkles,
    title: "Özel Atmosfer",
    description:
      "Her masanın kendine ait bir hikayesi var. Tasarladığımız sıcak, davetkar ortam özel anlarınızı unutulmaz kılmak için var.",
  },
  {
    icon: Zap,
    title: "Hızlı & Güler Yüzlü Servis",
    description:
      "Siparişten masaya ortalama 20 dakika. Güler yüzlü servis ekibimiz her ihtiyacınızda yanınızda, asla beklemeye bırakmadan.",
  },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Farkımız
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Neden Lezzet House?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Binlerce misafirimizin bizi tekrar tekrar tercih etmesinin arkasında
            dört temel değer yatıyor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center size-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="size-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
