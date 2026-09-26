import React from 'react';
import { Hammer, Trees, ShieldCheck, MapPin, Clock } from 'lucide-react';

export const CraftSection: React.FC = () => {
  return (
    <section id="craft" className="py-28 bg-[#0c0d10] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c49a6c]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c49a6c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a6c] font-semibold block mb-2">
            The Gabriel Guild Standard
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f4efe8]">
            Generational Craftsmanship in Stone & Timber.
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] mt-4 leading-relaxed">
            Recognized by the National Association of Home Builders as Custom Builder of the Year. We maintain our own permanent architectural millwork studio, timber framers, and master stonemasons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl border border-[#242b3a] relative group hover:border-[#c49a6c]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#141822] border border-[#c49a6c]/30 flex items-center justify-center mb-6 text-[#c49a6c]">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f4efe8] mb-3">
              Heavy Timber Framing
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Hand-hewn Douglas fir and southern white pine timbers, fitted with precision mortise-and-tenon joints, oak pegs, and structural steel reinforcement designed to endure for centuries.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-[#242b3a] relative group hover:border-[#c49a6c]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#141822] border border-[#c49a6c]/30 flex items-center justify-center mb-6 text-[#c49a6c]">
              <Hammer className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f4efe8] mb-3">
              In-House Custom Cabinetry
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Our dedicated cabinetmakers build bespoke furniture-grade cabinetry, walnut paneled libraries, sculleries, and climate-controlled wine cellars crafted specifically for each estate.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-[#242b3a] relative group hover:border-[#c49a6c]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#141822] border border-[#c49a6c]/30 flex items-center justify-center mb-6 text-[#c49a6c]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f4efe8] mb-3">
              Lifelong Home Care
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Our relationship begins at groundbreaking and continues for the lifetime of your home. Our dedicated estate maintenance division preserves your property through all Carolina seasons.
            </p>
          </div>
        </div>

        {/* Location & Studio Banner */}
        <div className="mt-16 glass-panel-bronze p-8 sm:p-12 rounded-3xl border border-[#c49a6c]/35 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c49a6c] font-semibold">
              Travelers Rest Design Studio
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f4efe8]">
              Private Site & Architectural Consultations
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              Meet with founder Dale Gabriel and our architectural team. We review homesite orientation, elevation grading, and design blueprints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs text-[#a0aec0]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c49a6c]" />
                <span>641 Garden Market Drive, Travelers Rest, SC 29690</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c49a6c]" />
                <span>Monday – Friday: By Appointment</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="tel:+18648793035"
              className="px-8 py-3.5 rounded-full border border-[#c49a6c] text-xs uppercase tracking-widest font-semibold text-[#f4efe8] hover:bg-[#c49a6c]/10 transition-colors inline-block"
            >
              Call (864) 879-3035
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
