import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Joelrtharakan' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joel-r-tharakan/' },
    { label: 'Email', href: 'mailto:joelrtharakan@gmail.com' }
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="https://res.cloudinary.com/dnd5jmhjf/image/upload/v1750759221/Navy_and_Gray_Logo_with_Geometric_Icon_vqknfb.png"
                  alt="Joel R Tharakan Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    // Show fallback gradient background
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback gradient background (hidden by default) */}
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg items-center justify-center text-white font-bold text-sm hidden">
                  JT
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Joel R Tharakan
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI & Full-Stack Developer passionate about creating intelligent solutions 
                that make a meaningful impact through innovative technology.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Connect</h3>
              <div className="flex flex-col space-y-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>© {currentYear} Joel R Tharakan. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-slate-600/50"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
