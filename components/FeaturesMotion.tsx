'use client';
import { motion } from 'framer-motion';

import {
  Zap,
  Shield,
  Truck,
  Headphones,
  RefreshCw,
  Award,
  Cpu,
  Gauge,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Latest Technology',
    description:
      'Get access to the newest GPUs and RAM modules as soon as they hit the market.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Shield,
    title: 'Genuine Products',
    description:
      '100% authentic components with full manufacturer warranty and support.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description:
      'Free express delivery on orders over $500. Same-day dispatch available.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Our tech specialists are available 24/7 to help with your build questions.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description:
      "30-day hassle-free returns. Not satisfied? We'll make it right.",
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Award,
    title: 'Price Match',
    description:
      "Found it cheaper elsewhere? We'll match any verified competitor price.",
    color: 'from-rose-500 to-rose-600',
  },
];

const stats = [
  { icon: Cpu, value: '50,000+', label: 'Components Sold' },
  { icon: Gauge, value: '4.9/5', label: 'Customer Rating' },
  { icon: Shield, value: '100%', label: 'Authentic' },
  { icon: Truck, value: '24h', label: 'Avg. Delivery' },
];
export default function FeaturesMotion() {
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
          <Zap className="w-4 h-4 text-emerald-400" />
          Why Choose Us
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Built for Performance
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          We understand what enthusiasts need. That&apos;s why we go above and
          beyond to deliver the best PC component shopping experience.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center"
          >
            <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-zinc-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
