import FeaturesMotion from '@/components/FeaturesMotion';
export function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -translate-y-1/2" />
      </div>

      <FeaturesMotion />
    </section>
  );
}
