import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Youtube,
  Github,
} from 'lucide-react';
import NewsletterSection from '@/components/NewsletterSectionMotion';

const footerLinks = {
  products: [
    { label: 'Graphics Cards', href: '#products' },
    { label: 'Memory Modules', href: '#products' },
    { label: 'New Arrivals', href: '#products' },
    { label: 'On Sale', href: '#products' },
  ],
  support: [
    { label: 'Contact Us', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Returns', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press Kit', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Warranty', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Github, href: 'https://github.com/bryan667', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AGI Params</span>
            </a>
            <p className="text-zinc-400 mb-6 max-w-sm">
              Your trusted source for premium PC components. Building dreams,
              one rig at a time since 1997.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:support@agiparams.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@agiparams.com</span>
              </a>
              <a
                href="tel:+1-800-TECH-123"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">0917-TECH-1234</span>
              </a>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Imus Cavite, Calabarzon</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-300">
              © 2026 AGI Params. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
