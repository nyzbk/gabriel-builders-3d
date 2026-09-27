import React, { useState } from 'react';
import { Award, Compass, Sparkles, Sliders, CheckCircle2, Home } from 'lucide-react';

interface InteractiveBentoProps {
  onOpenConsultation: () => void;
}

export const InteractiveBento: React.FC<InteractiveBentoProps> = ({ onOpenConsultation }) => {
  const [topography, setTopography] = useState<'keowee' | 'cliffs' | 'plateau'>('keowee');
  const [framing, setFraming] = useState<'douglas' | 'oak' | 'hybrid'>('douglas');
  const [masonry, setMasonry] = useState<'fieldstone' | 'granite' | 'limestone'>('fieldstone');

  return (
    <section id="engineering-capabilities" className="relative py-28 md:py-36 bg-[#131517] text-[#EDEAE5] overflow-hidden border-t border-[#C86428]/15">
      {/* Ambient Radial Glow (Meta AI Standard) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C86428]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#24221F]/80 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#C86428] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C86428]" />
              ESTATE ENGINEERING & PROVENANCE / 03
            </div>
            <h2 className="font-['Cinzel',serif] text-[40px] md:text-[56px] leading-[0.95] text-[#EDEAE5]">
              Subtractive Strength & Heavy Craft.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#8A959E] max-w-md font-['Space_Grotesk',sans-serif] leading-relaxed">
            Every residence is engineered with deep-anchored structural caissons, massive hand-cut timber bents, and heirloom stone masonry.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Interactive Estate Configurator (Col Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#1C1F24]/80 border border-[#C86428]/30 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#C86428]/20 pb-4 mb-6">
                <span className="text-[11px] font-mono text-[#C86428] tracking-widest uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#C86428]" />
                  PRIVATE RESIDENCE CONSULTATION
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#C86428]/20 text-[#C86428] text-[10px] font-mono font-bold">
                  INTERACTIVE LAB
                </span>
              </div>

              <h3 className="font-['Cinzel',serif] text-[24px] md:text-[30px] text-[#EDEAE5] mb-2">
                Simulate your mountain compound.
              </h3>
              <p className="text-[13px] text-[#8A959E] mb-6">
                Test site topography, timber joinery tiers, and exterior fieldstone masonry options.
              </p>

              {/* Topography Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#8A959E] block mb-2 uppercase">1. Site & Topography:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['keowee', 'cliffs', 'plateau'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTopography(t)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        topography === t
                          ? 'bg-[#C86428] text-white font-bold shadow-md shadow-[#C86428]/20'
                          : 'bg-[#131517]/80 text-[#EDEAE5] border border-[#C86428]/20 hover:border-[#C86428]/50'
                      }`}
                    >
                      {t === 'keowee' ? 'Lake Keowee' : t === 'cliffs' ? 'The Cliffs' : 'High Plateau'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Framing Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#8A959E] block mb-2 uppercase">2. Structural Timber System:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['douglas', 'oak', 'hybrid'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFraming(f)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        framing === f
                          ? 'bg-[#C86428] text-white font-bold shadow-md shadow-[#C86428]/20'
                          : 'bg-[#131517]/80 text-[#EDEAE5] border border-[#C86428]/20 hover:border-[#C86428]/50'
                      }`}
                    >
                      {f === 'douglas' ? 'Douglas Fir' : f === 'oak' ? 'Reclaimed Oak' : 'Steel & Timber'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Masonry Selection */}
              <div>
                <span className="text-[11px] font-mono text-[#8A959E] block mb-2 uppercase">3. Exterior Masonry Ashlar:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['fieldstone', 'granite', 'limestone'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMasonry(m)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        masonry === m
                          ? 'bg-[#C86428] text-white font-bold shadow-md shadow-[#C86428]/20'
                          : 'bg-[#131517]/80 text-[#EDEAE5] border border-[#C86428]/20 hover:border-[#C86428]/50'
                      }`}
                    >
                      {m === 'fieldstone' ? 'Tennessee Stone' : m === 'granite' ? 'Blue Ridge Granite' : 'Cut Limestone'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#C86428]/20 flex items-center justify-between">
              <div className="text-[11px] font-mono text-[#C86428]">
                ESTATE SPECIFICATION: {topography.toUpperCase()} • {framing.toUpperCase()}
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-lg bg-[#C86428] text-white font-mono text-[11px] font-bold uppercase hover:bg-[#d97337] transition-colors"
              >
                Inquire With Specifications
              </button>
            </div>
          </div>

          {/* Card 2: 40+ Years Tenure */}
          <div className="rounded-2xl bg-[#1C1F24]/80 border border-[#C86428]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C86428] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Award className="w-4 h-4 text-[#C86428]" />
                TENURE & ACCREDITATION
              </div>
              <div className="font-['Cinzel',serif] text-[54px] font-bold text-[#EDEAE5] leading-none mb-2">
                40+
              </div>
              <div className="text-[13px] text-[#C86428] font-medium mb-3">
                Years of Bespoke Carolinas Construction
              </div>
              <p className="text-[13px] text-[#8A959E] font-['Space_Grotesk',sans-serif] leading-relaxed">
                Founded in 1984 by Gus Rubio. Honored as the NAHB National Custom Home Builder of the Year, the nation's highest residential building accolade.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C86428]/15 flex items-center gap-2 text-[11px] font-mono text-[#8A959E]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              NAHB National Gold Winner
            </div>
          </div>

          {/* Card 3: $500M+ Estate Value */}
          <div className="rounded-2xl bg-[#1C1F24]/80 border border-[#C86428]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C86428] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Home className="w-4 h-4 text-[#C86428]" />
                PORTFOLIO VALUATION
              </div>
              <div className="font-['Cinzel',serif] text-[54px] font-bold text-[#EDEAE5] leading-none mb-2">
                $500M+
              </div>
              <div className="text-[13px] text-[#C86428] font-medium mb-3">
                Carolinas Real Estate Constructed
              </div>
              <p className="text-[13px] text-[#8A959E] font-['Space_Grotesk',sans-serif] leading-relaxed">
                Our legacy homes set historical resale benchmarks across Lake Keowee, The Cliffs communities, and Greenville’s private corridors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C86428]/15 flex items-center gap-2 text-[11px] font-mono text-[#8A959E]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Engineered Equity
            </div>
          </div>

          {/* Card 4: 100% In-House Master Timber Joinery */}
          <div className="md:col-span-2 rounded-2xl bg-[#1C1F24]/80 border border-[#C86428]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C86428] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Compass className="w-4 h-4 text-[#C86428]" />
                IN-HOUSE ARTISAN ADVANTAGE
              </div>
              <div className="font-['Cinzel',serif] text-[36px] md:text-[44px] text-[#EDEAE5] leading-tight mb-2">
                Total Control from Mill to Mortise.
              </div>
              <p className="text-[14px] text-[#8A959E] font-['Space_Grotesk',sans-serif] leading-relaxed mb-6">
                Unlike builders who subcontract core carpentry, our in-house master timber division hand-crafts every beam, truss, and custom copper detail, guaranteeing lifelong structural integrity.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#C86428]/15">
              <div>
                <div className="text-[20px] font-mono font-bold text-[#EDEAE5]">100%</div>
                <div className="text-[11px] font-mono text-[#8A959E]">In-House Artisans</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#EDEAE5]">Zero</div>
                <div className="text-[11px] font-mono text-[#8A959E]">Structural Tolerances</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#EDEAE5]">Life</div>
                <div className="text-[11px] font-mono text-[#8A959E]">Warranty Coverage</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#EDEAE5]">VR Studio</div>
                <div className="text-[11px] font-mono text-[#8A959E]">True 3D Walkthrough</div>
              </div>
            </div>
          </div>

          {/* Card 5: Direct Leadership Inquiries */}
          <div className="md:col-span-2 rounded-2xl bg-[#1C1F24]/80 border border-[#C86428]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C86428] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Award className="w-4 h-4 text-[#C86428]" />
                DIRECT EXECUTIVE OVERSIGHT
              </div>
              <div className="font-['Cinzel',serif] text-[36px] md:text-[44px] text-[#EDEAE5] leading-tight mb-2">
                Every Jobsite Visited by the Rubios.
              </div>
              <p className="text-[14px] text-[#8A959E] font-['Space_Grotesk',sans-serif] leading-relaxed mb-4">
                Gus and Belinda Rubio actively review foundation pours, timber raisings, and finish trim on every single build, ensuring our hallmark zero-compromise standard.
              </p>
            </div>
            <div className="pt-4 border-t border-[#C86428]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#C86428]">gus@gabrielbuilders.com</span>
              <span className="text-[11px] font-mono text-[#8A959E]">Personal Principal Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
