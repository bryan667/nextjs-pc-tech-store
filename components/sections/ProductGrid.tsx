'use client';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const ProductGridMotion = dynamic(
  () => import('@/components/ProductGridMotion'),
);
export function ProductGrid() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="products" className="py-24 bg-zinc-950 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {inView ? <ProductGridMotion /> : null}
      </div>
    </section>
  );
}
