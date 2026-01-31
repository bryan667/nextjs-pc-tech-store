'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { Cart } from './Cart';

interface NavigationProps {}

export function Navigation({}: NavigationProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#products', label: 'Products' },
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <img
                  src="/images/agi-params-39.webp"
                  alt="agi-params-39"
                  className="w-39px h-33px"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                AGI Params
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-5 h-5 text-zinc-300" />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-xs font-bold flex items-center justify-center"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <Button className="hidden md:flex bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0">
                Contact Us
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-zinc-900/50 border border-zinc-800"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-zinc-300" />
                ) : (
                  <Menu className="w-5 h-5 text-zinc-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="mt-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0">
                  Contact Us
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(!isCartOpen)} />
    </>
  );
}
