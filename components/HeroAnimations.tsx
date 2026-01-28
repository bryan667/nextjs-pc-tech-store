'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroAnimations() {
  return (
    <>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-zinc-300">
              AGI Params Premium PC Components
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Unleash</span>{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Ultimate Power
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            Discover cutting-edge GPUs and high-performance RAM for your
            ultimate gaming and professional workstation builds. AI powered!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 px-8 py-6 text-lg rounded-xl group"
              asChild
            >
              <a href="#products">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white px-8 py-6 text-lg rounded-xl"
            >
              View Deals
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '53K+', label: 'Happy Customers' },
              { value: '99%', label: 'Satisfaction Rate' },
              { value: '24h', label: 'Fast Shipping' },
              { value: '6yr', label: 'Warranty' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-[10%] hidden lg:block"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center backdrop-blur-sm">
          <Cpu className="w-10 h-10 text-emerald-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/3 left-[10%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center backdrop-blur-sm">
          <svg
            className="w-8 h-8 text-cyan-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 9h6v6H9z" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-zinc-500"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
