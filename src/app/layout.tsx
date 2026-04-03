import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lezzet House — İstanbul'un En İyi Sofrası",
  description:
    "İstanbul'un kalbinde, geleneksel Türk mutfağının en seçkin lezzetlerini modern bir atmosferle sunuyoruz. Online rezervasyon için hemen arayın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={cn("h-full antialiased", inter.variable, playfair.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
