'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'PC Enthusiast',
    avatar: 'AC',
    rating: 5,
    text: `I'm done getting ripped off by NVID's pricing games and Microms "shortage" excuses. AGI Params delivered my GPU fast, priced it like a company that actually respects customers, and didn't play artificial-scarcity nonsense. Finally someone beating the system!`,
  },
  {
    name: 'Faelyor Swift',
    role: 'Content Creator',
    avatar: 'SM',
    rating: 5,
    text: 'Upgraded my editing rig with 64GB of DDR5 RAM. The performance difference is night and day. Customer support helped me pick the perfect kit.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Esports Player',
    avatar: 'MJ',
    rating: 5,
    text: `NVID's idea of renting GPUs or PCs makes zero sense for competitive gaming. I need consistent performance, not a subscription. AGI Params delivered real hardware with fair pricing. If you're serious about esports, ownership isn't optional.`,
  },
  {
    name: 'Leon Kennedy',
    role: 'Federal Agent',
    avatar: 'ER',
    rating: 4,
    text: 'Building a render workstation and needed reliable GPUs. The prices were competitive and the 6-year warranty gives me peace of mind.',
  },
  {
    name: 'Beary Rich',
    role: 'Software Developer & Scientist',
    avatar: 'DP',
    rating: 5,
    text: 'Bought RAM for our entire dev team. Bulk pricing was great and all modules worked perfectly. Hope RAM prices go higher so I can order again.',
  },
  {
    name: 'Lisa Thompson',
    role: 'Streamer',
    avatar: 'LT',
    rating: 5,
    text: 'My stream quality improved dramatically after upgrading through AGI Params. The RGB RAM looks amazing on camera too!',
  },
];
export default function TestimonialMotion() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-400 mb-6">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          Customer Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Trusted by Builders
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Don't just take our word for it. In a world where owning your own
          hardware feels impossible, our customers are fighting back. Here's
          what our community of PC enthusiasts has to say about their
          experience.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <Quote className="w-8 h-8 text-emerald-500/30" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-zinc-300 mb-6 leading-relaxed">
              &ldquo;{testimonial.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                {testimonial.avatar}
              </div>
              <div>
                <div className="text-white font-medium">{testimonial.name}</div>
                <div className="text-sm text-zinc-500">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-8"
      >
        {['NVIDIA', 'AMD', 'Corsair', 'G.Skill', 'Kingston'].map((brand) => (
          <div
            key={brand}
            className="text-2xl font-bold text-zinc-700 hover:text-zinc-500 transition-colors cursor-default"
          >
            {brand}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
