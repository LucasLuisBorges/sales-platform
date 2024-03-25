import { Footer } from "@/components/footer";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Products } from "@/components/home/products";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Features />
        <Products />
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
