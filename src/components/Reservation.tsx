"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";

type FormData = {
  name: string;
  phone: string;
  date: string;
  guests: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Adınızı giriniz (en az 2 karakter).";
  if (!/^(\+90|0)?[0-9]{10}$/.test(data.phone.replace(/\s/g, "")))
    errors.phone = "Geçerli bir telefon numarası giriniz.";
  if (!data.date) {
    errors.date = "Tarih seçiniz.";
  } else {
    const selected = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) errors.date = "Geçmiş bir tarih seçilemez.";
  }
  const g = parseInt(data.guests, 10);
  if (!data.guests || isNaN(g) || g < 1 || g > 20)
    errors.guests = "Kişi sayısı 1-20 arasında olmalıdır.";
  return errors;
}

const today = new Date().toISOString().split("T")[0];

export default function Reservation() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    guests: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="rezervasyon" className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Rezervasyon
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-5">
              Masanızı
              <br />
              <span className="text-primary italic">Şimdiden Ayırtın</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Özel bir akşam yemeği, doğum günü kutlaması ya da iş yemeği için
              masa ayırtın. Formunu doldurun, ekibimiz en geç 2 saat içinde
              sizi arayarak rezervasyonunuzu onaylasın.
            </p>
            <div className="relative h-72 rounded-4xl overflow-hidden shadow-md ring-1 ring-foreground/5">
              <Image
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80"
                alt="Lezzet House restoran iç mekan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="pt-8">
                {submitted ? (
                  <div className="flex flex-col items-center text-center gap-4 py-8">
                    <CheckCircle className="size-16 text-emerald-500" strokeWidth={1.5} />
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      Talebiniz Alındı!
                    </h3>
                    <p className="text-muted-foreground text-base max-w-xs leading-relaxed">
                      <strong>{form.name}</strong> adına{" "}
                      <strong>{form.guests} kişilik</strong> masa talebiniz
                      alındı. En geç 2 saat içinde{" "}
                      <strong>{form.phone}</strong> numarasından sizi arayacağız.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 rounded-4xl"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", phone: "", date: "", guests: "" });
                      }}
                    >
                      Yeni Rezervasyon
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Ad Soyad
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ahmet Yılmaz"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        className="h-11"
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1.5 text-destructive text-xs mt-0.5">
                          <AlertCircle className="size-3.5 shrink-0" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="05XX XXX XX XX"
                        value={form.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        className="h-11"
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1.5 text-destructive text-xs mt-0.5">
                          <AlertCircle className="size-3.5 shrink-0" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="date" className="text-sm font-medium">
                          Tarih
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={handleChange}
                          aria-invalid={!!errors.date}
                          className="h-11"
                        />
                        {errors.date && (
                          <p className="flex items-center gap-1.5 text-destructive text-xs mt-0.5">
                            <AlertCircle className="size-3.5 shrink-0" />
                            {errors.date}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="guests" className="text-sm font-medium">
                          Kişi Sayısı
                        </Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min={1}
                          max={20}
                          placeholder="2"
                          value={form.guests}
                          onChange={handleChange}
                          aria-invalid={!!errors.guests}
                          className="h-11"
                        />
                        {errors.guests && (
                          <p className="flex items-center gap-1.5 text-destructive text-xs mt-0.5">
                            <AlertCircle className="size-3.5 shrink-0" />
                            {errors.guests}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-4xl h-12 text-base font-medium mt-2"
                    >
                      Rezervasyon Talep Et
                    </Button>
                    <p className="text-muted-foreground text-xs text-center">
                      Formunuz iletildikten sonra ekibimiz sizi arayarak
                      onaylayacaktır.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
