'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
export default function NewsletterSectionMotion() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Stay in the Loop
            </h3>
            <p className="text-zinc-400">
              Get notified about new arrivals, exclusive deals, and tech tips.
            </p>
          </div>

          {submitted ? (
            <div className="text-green-400 text-xl font-semibold inline-flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: [0, 15, -15, 15, -15, 15, -15, 10, -10, 0] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="inline-block"
              >
                🎉
              </motion.span>
              <span>Awesome! You’re on the list.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 w-full sm:w-72"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 px-6 py-3 rounded-xl"
              >
                Subscribe
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
