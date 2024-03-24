import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/produto/hero";
import { products } from "@/utils/products";

export default function Produto({ params }: { params: { slug: string } }) {
  const product = products.find((product) => product.slug === params.slug);

  return (
    <main>
      <Hero title={product!.title} description={product!.content.description} />
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      <Footer />
    </main>
  );
}
