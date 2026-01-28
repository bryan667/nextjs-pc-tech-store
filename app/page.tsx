import { CartProvider } from '@/hooks/useCart';
import { Navigation } from '@/app/sections/Navigation';
import { Hero } from '@/app/sections/Hero';
import { ProductGrid } from '@/app/sections/ProductGrid';
import { Features } from '@/app/sections/Features';
import { Testimonials } from '@/app/sections/Testimonials';
import { Footer } from '@/app/sections/Footer';

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
