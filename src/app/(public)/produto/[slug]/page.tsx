import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/produto/about";
import { Hero } from "@/components/produto/hero";
import { products } from "@/utils/products";

export default function Produto({ params }: { params: { slug: string } }) {
  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return;
  }

  return (
    <main>
      <Hero item={product} />
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <About item={product} />
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
