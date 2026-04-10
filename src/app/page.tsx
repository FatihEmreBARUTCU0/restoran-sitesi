import { connection } from "next/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import WhyUs from "@/components/WhyUs";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default async function Home() {
  await connection();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <WhyUs />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </>
  );
}
