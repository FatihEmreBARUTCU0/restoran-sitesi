# Lezzet House - Restoran Web Sitesi

## Ürün
İstanbul'da konumlanan modern Türk mutfağı restoranı.
Müşterilere online rezervasyon, menü ve restoran hakkında
bilgi sunan kurumsal web sitesi.

## Teknoloji
- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- shadcn/ui (Nova preset)
- Vercel (deploy)

## Sayfalar
Tek sayfa (/) — Landing page

## Sections Sırası
1. Navbar (logo + Rezervasyon yap butonu)
2. Hero (büyük yemek görseli, "İstanbul'un En İyi Sofrası" başlık)
3. Hakkımızda (kısa hikaye, 3 istatistik: kuruluş yılı, mutlu misafir, şef sayısı)
4. Öne Çıkan Yemekler (6 yemek kartı, isim + fiyat + açıklama)
5. Neden Biz (4 özellik: taze malzeme, usta şefler, özel atmosfer, hızlı servis)
6. Rezervasyon Formu (isim, tarih, kişi sayısı, telefon)
7. Konum & İletişim (adres, telefon, çalışma saatleri)
8. Footer

## Tasarım
- Tema: Sıcak, davetkar — krem/kahve/altın tonları
- Açık tema (CV Analyzer'dan farklı olsun)
- Büyük yemek fotoğrafı alanları (Unsplash URL kullan)
- Lüks ama erişilebilir his
- Font: Playfair Display (başlıklar) + Inter (gövde)

## Teknik Detaylar
- Unsplash'tan gerçek yemek fotoğrafları kullan (URL ile)
- Rezervasyon formu: client-side validation olsun
- Mobil uyumlu (responsive)
- Smooth scroll navigasyon

## Güvenlik
- API key yok, .env gerekmez
- Form sadece frontend validation (backend yok)
- Console.log olmasın
- Kullanılmayan import olmasın

## Hedef
CV Analyzer'dan görsel olarak tamamen farklı —
açık tema, sıcak renkler, yemek odaklı KOBİ sitesi.
Upwork portföyü için production-ready görünüm.