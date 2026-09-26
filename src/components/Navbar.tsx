import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0c0d10]/92 backdrop-blur-md py-4 border-b border-[#c49a6c]/20 shadow-2xl'
          : 'bg-gradient-to-b from-[#0c0d10]/85 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#c49a6c]/40 bg-[#161922] flex items-center justify-center group-hover:border-[#c49a6c] transition-all">
            <span className="text-[#c49a6c] font-display font-bold text-lg">G</span>
          </div>
          <div>
            <span className="font-display font-bold tracking-widest text-lg md:text-xl text-[#f4efe8] block group-hover:text-[#c49a6c] transition-colors">
              GABRIEL BUILDERS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#a5b2c6] uppercase block">
              National Custom Builder of the Year
            </span>
          </div>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#estates"
            className="text-xs tracking-[0.2em] uppercase text-[#d5dde8] hover:text-[#c49a6c] transition-colors"
          >
            Estates
          </a>
          <a
            href="#craft"
            className="text-xs tracking-[0.2em] uppercase text-[#d5dde8] hover:text-[#c49a6c] transition-colors"
          >
            Architectural Craft
          </a>
          <a
            href="#stories"
            className="text-xs tracking-[0.2em] uppercase text-[#d5dde8] hover:text-[#c49a6c] transition-colors"
          >
            Homeowner Stories
          </a>
          <a
            href="#contact"
            className="text-xs tracking-[0.2em] uppercase text-[#d5dde8] hover:text-[#c49a6c] transition-colors"
          >
            Studio
          </a>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18648793035"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2b3342] bg-[#141822]/70 text-[#f4efe8] hover:border-[#c49a6c]/50 text-xs tracking-wider transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#c49a6c]" />
            <span>(864) 879-3035</span>
          </a>
          <button
            onClick={onOpenConsultation}
            className="glass-button px-6 py-2.5 rounded-full text-xs tracking-[0.18em] uppercase font-semibold text-[#f4efe8] flex items-center gap-2 shadow-lg"
          >
            <span>Consult With Builder</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c49a6c]" />
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#c49a6c] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1015] border-b border-[#c49a6c]/30 px-6 py-6 flex flex-col gap-4">
          <a
            href="#estates"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f4efe8] py-2 border-b border-[#1f2430]"
          >
            Featured Estates
          </a>
          <a
            href="#craft"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f4efe8] py-2 border-b border-[#1f2430]"
          >
            Architectural Craft & Millwork
          </a>
          <a
            href="#stories"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f4efe8] py-2 border-b border-[#1f2430]"
          >
            Client Reviews
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f4efe8] py-2 border-b border-[#1f2430]"
          >
            Travelers Rest Studio
          </a>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+18648793035"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#c49a6c]/30 bg-[#161a24] text-[#f4efe8] text-sm"
            >
              <Phone className="w-4 h-4 text-[#c49a6c]" />
              <span>(864) 879-3035</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="glass-button py-3 rounded-xl text-center text-xs tracking-widest uppercase font-semibold text-[#f4efe8]"
            >
              Consult With Master Builder
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
