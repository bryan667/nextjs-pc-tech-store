import { CartProvider } from '@/hooks/useCart';
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';

export const dynamic = 'force-static';
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <main>
        <Hero />
        <CartProvider>
          <Navigation />
          <ProductGrid />
        </CartProvider>
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
