import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const SignatureWidget: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [terrain, setTerrain] = useState<'keowee-waterfront' | 'mountain-ridge' | 'rolling-estate'>('keowee-waterfront');
  const [sqft, setSqft] = useState<number>(7500);

  return (
    <section id="estate-feasibility" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#131517] text-[#EAECEE] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-['Space_Mono'] uppercase tracking-widest text-[#C86428] block mb-3 font-semibold">
            NAHB National Custom Home Builder of the Year
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Cinzel'] font-bold text-[#EAECEE] tracking-tight">
            Lake & Mountain Estate Feasibility Engine
          </h2>
          <p className="mt-4 text-[#8A959E] text-sm sm:text-base max-w-2xl mx-auto font-['Space_Grotesk'] font-light">
            Crafting 5,000 to 15,000+ sq ft custom timber and granite sanctuaries across The Cliffs and Lake Keowee for four decades.
          </p>
        </div>

        <div className="bg-[#24221F] rounded-2xl p-6 sm:p-12 border border-[#C86428]/30 shadow-2xl">
          <div className="space-y-8">
            {/* Terrain Selector */}
            <div>
              <label className="block text-xs font-['Space_Mono'] uppercase tracking-wider text-[#C86428] mb-3">
                1. Topography & Waterfront Setting
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'keowee-waterfront', label: 'Lake Keowee Deepwater Shoreline' },
                  { id: 'mountain-ridge', label: 'Blue Ridge High-Elevation Ridge' },
                  { id: 'rolling-estate', label: 'The Cliffs Golf & Equestrian Estate' }
                ].map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTerrain(t.id as any)}
                    className={`p-4 rounded-xl text-xs font-['Space_Grotesk'] font-semibold transition-all text-left ${
                      terrain === t.id
                        ? 'bg-[#C86428] text-white shadow-lg'
                        : 'bg-[#131517] text-[#8A959E] border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sq Ft Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-['Space_Mono'] uppercase tracking-wider text-[#C86428]">
                  2. Targeted Living Square Footage
                </label>
                <span className="font-['Space_Mono'] text-sm text-[#C86428] font-bold">
                  {sqft.toLocaleString()} SQ FT
                </span>
              </div>
              <input
                type="range"
                min="4500"
                max="14000"
                step="500"
                value={sqft}
                onChange={(e) => setSqft(parseInt(e.target.value))}
                className="w-full h-2 bg-[#131517] rounded-lg appearance-none cursor-pointer accent-[#C86428]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#8A959E] mt-2">
                <span>4,500 SQ FT</span>
                <span>8,000 SQ FT</span>
                <span>14,000+ SQ FT</span>
              </div>
            </div>

            {/* Architectural Deliverables */}
            <div className="bg-[#131517] p-6 rounded-xl border border-white/10">
              <h4 className="text-sm font-['Cinzel'] font-bold text-white mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C86428]" />
                Gabriel Builders Turnkey Craft Contract Includes:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-['Space_Grotesk'] text-[#8A959E]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C86428]" />
                  <span>In-House Architectural Drafting & 3D Clay Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C86428]" />
                  <span>Master Timber & Stone Masonry by Hand Craftsmen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C86428]" />
                  <span>Dedicated Full-Time Project Superintendent on Site</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C86428]" />
                  <span>Lifetime Structural Warranty & Estate Maintenance Division</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-['Space_Mono'] text-[#8A959E]">
                  Greenville & Travelers Rest, SC · Call (864) 879-3035
                </span>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#C86428] text-white font-['Space_Grotesk'] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-orange-600 transition-all btn-spring flex items-center justify-center gap-2"
                >
                  <span>Request Confidential Lot Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
