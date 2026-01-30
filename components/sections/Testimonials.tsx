import TestimonialMotion from '@/components/TestimonialMotion';
export function Testimonials() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>
      <TestimonialMotion />
    </section>
  );
}
