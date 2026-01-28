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
    <CartProvider>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navigation />
        <main>
          <Hero />
          <ProductGrid />
          <Features />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
