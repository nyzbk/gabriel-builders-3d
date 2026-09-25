import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#08090c] border-t border-[#1a1f2b] pt-20 pb-12 text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#c49a6c]/40 bg-[#141822] flex items-center justify-center">
                <span className="text-[#c49a6c] font-display font-bold text-base">G</span>
              </div>
              <span className="font-display font-bold tracking-widest text-xl text-[#f4efe8]">
                GABRIEL BUILDERS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8a99ae] max-w-md leading-relaxed">
              NAHB National Custom Home Builder of the Year. Crafting legacy timber and stone residential sanctuaries across Lake Keowee, The Cliffs, and Western North Carolina for over 40 years.
            </p>
            <div className="text-xs text-[#a0aec0] space-y-1 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c49a6c]" />
                <span>641 Garden Market Drive, Travelers Rest, SC 29690</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c49a6c]" />
                <a href="tel:+18648793035" className="hover:text-[#c49a6c] transition-colors">
                  (864) 879-3035
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe8] mb-4">
              Featured Enclaves
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#estates" className="hover:text-[#c49a6c] transition-colors">Lake Keowee Waterfront</a></li>
              <li><a href="#estates" className="hover:text-[#c49a6c] transition-colors">The Cliffs at Mountain Park</a></li>
              <li><a href="#estates" className="hover:text-[#c49a6c] transition-colors">The Cliffs at Glassy</a></li>
              <li><a href="#estates" className="hover:text-[#c49a6c] transition-colors">The Cliffs at Walnut Cove</a></li>
              <li><a href="#estates" className="hover:text-[#c49a6c] transition-colors">Lake Toxaway Peninsula</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe8] mb-4">
              Studio & Guild
            </h4>
            <ul className="space-y-2 text-xs text-[#8a99ae]">
              <li>Monday – Friday: By Appointment</li>
              <li>In-House Millwork & Joinery</li>
              <li>Permanent Artisan Stonemasons</li>
              <li className="pt-2 text-[#c49a6c]">NAHB National Builder of the Year</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#151924] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#606f84]">
          <p>© {new Date().getFullYear()} Gabriel Builders, Inc. All Rights Reserved. Travelers Rest, South Carolina.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#8a99ae] hover:text-[#c49a6c] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
