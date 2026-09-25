import React, { useState } from 'react';
import { ESTATES_DATA } from '../data/estates';
import type { Estate } from '../data/estates';
import { ArrowRight, MapPin, Award } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectEstate: (estate: Estate) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectEstate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Lake Keowee', 'The Cliffs', 'Mountain Ridges'];

  const filteredEstates = activeFilter === 'All'
    ? ESTATES_DATA
    : ESTATES_DATA.filter(e => {
        if (activeFilter === 'Lake Keowee') return e.location.includes('Lake Keowee') || e.location.includes('Toxaway');
        if (activeFilter === 'The Cliffs') return e.location.includes('Cliffs');
        if (activeFilter === 'Mountain Ridges') return e.location.includes('Ridge') || e.location.includes('Travelers');
        return true;
      });

  return (
    <section id="estates" className="py-28 bg-[#0e1015] border-t border-[#1f2533]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c49a6c] font-semibold block mb-2">
              Bespoke Residential Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f4efe8]">
              Signature Custom Estates
            </h2>
            <p className="text-sm text-[#94a3b8] mt-2 max-w-xl">
              Each residence represents an uncompromising marriage between site topography, structural integrity, and exquisite custom craftsmanship.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all ${
                  activeFilter === cat
                    ? 'bg-[#c49a6c] text-[#0c0d10] font-bold shadow-md'
                    : 'border border-[#283142] bg-[#141822] text-[#94a3b8] hover:border-[#c49a6c]/40 hover:text-[#f4efe8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Estates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEstates.map((estate) => (
            <div
              key={estate.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-[#262f3f] hover:border-[#c49a6c]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#141822]">
                <img
                  src={estate.image}
                  alt={estate.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent opacity-85" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#0c0d10]/80 backdrop-blur-md text-[#c49a6c] border border-[#c49a6c]/30">
                    {estate.architecture}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-xl font-bold font-display text-[#f4efe8] block">
                      {estate.title}
                    </span>
                    <span className="text-xs text-[#a0aec0] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#c49a6c]" />
                      <span>{estate.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-2">
                    {estate.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#1f2635] text-xs text-[#cbd5e1]">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#738298]">Living Space</span>
                      <span className="font-semibold">{estate.squareFeet}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#738298]">Site Acreage</span>
                      <span className="font-semibold">{estate.acreage}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {estate.features.map(f => (
                      <span
                        key={f}
                        className="px-2.5 py-0.5 rounded text-[10px] text-[#94a3b8] bg-[#141822] border border-[#242c3c]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1f2635] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#c49a6c]">
                    <Award className="w-3.5 h-3.5" />
                    <span>{estate.awards[0]}</span>
                  </div>
                  <button
                    onClick={() => onSelectEstate(estate)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#c49a6c] hover:text-[#dfb88e] transition-colors"
                  >
                    <span>Estate Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
