import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';

interface MagneticCTAProps {
  onOpenConsultation: () => void;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({ onOpenConsultation }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      inner.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="consultation-inquiry" className="relative py-28 md:py-40 bg-[#0E1012] text-[#EDEAE5] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C86428]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Massive Fluid Headline (Meta AI Standard) */}
        <div className="text-center mb-16">
          <div className="text-[12px] font-mono tracking-[0.3em] uppercase text-[#C86428] font-semibold mb-4">
            COMMISSION INQUIRY / 05
          </div>
          <h2 className="font-['Cinzel',serif] text-[13vw] md:text-[8.5vw] leading-[0.88] tracking-tight text-[#EDEAE5]">
            CARVED IN STONE.
          </h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-[#8A959E] max-w-2xl mx-auto font-light leading-relaxed font-['Space_Grotesk',sans-serif]">
            Initiate your Lake Keowee or Blue Ridge mountain estate consultation directly with founders Gus and Belinda Rubio.
          </p>

          {/* Dual-Layer Magnetic Button */}
          <div className="mt-12 flex justify-center">
            <button
              ref={buttonRef}
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-[#C86428] text-white text-[16px] md:text-[18px] font-bold tracking-wider uppercase shadow-2xl shadow-[#C86428]/25 transition-transform duration-100 ease-out cursor-pointer hover:bg-[#d97337]"
            >
              <span ref={buttonInnerRef} className="flex items-center gap-3 transition-transform duration-100 ease-out">
                <span>Request Estate Consultation</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Deep Contact Intelligence Grid */}
        <div className="mt-20 pt-12 border-t border-[#C86428]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive & Leadership */}
          <div className="p-6 rounded-xl bg-[#131517] border border-[#C86428]/20">
            <div className="flex items-center gap-2 text-[#C86428] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-[#C86428]" />
              FOUNDERS & PRINCIPALS
            </div>
            <div className="text-[16px] font-semibold text-[#EDEAE5]">Gus & Belinda Rubio</div>
            <div className="text-[12px] text-[#8A959E] mb-3">Founders & Executive Leadership</div>
            <div className="text-[11px] font-mono text-[#C86428]">NAHB Builder of the Year</div>
          </div>

          {/* Phone Hotlines */}
          <div className="p-6 rounded-xl bg-[#131517] border border-[#C86428]/20">
            <div className="flex items-center gap-2 text-[#C86428] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Phone className="w-4 h-4 text-[#C86428]" />
              DIRECT BUILDER CONCIERGE
            </div>
            <a href="tel:8648793035" className="block text-[16px] font-semibold text-[#EDEAE5] hover:text-[#C86428] transition-colors">
              (864) 879-3035
            </a>
            <div className="text-[12px] text-[#8A959E] mt-1">Main Studio & Site Dispatch</div>
            <div className="text-[11px] font-mono text-[#C86428] mt-2">Mon-Fri 8:00 AM - 5:30 PM</div>
          </div>

          {/* Electronic Mail */}
          <div className="p-6 rounded-xl bg-[#131517] border border-[#C86428]/20">
            <div className="flex items-center gap-2 text-[#C86428] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Mail className="w-4 h-4 text-[#C86428]" />
              ELECTRONIC CHANNELS
            </div>
            <a href="mailto:gus@gabrielbuilders.com" className="block text-[13px] font-mono text-[#EDEAE5] hover:text-[#C86428] transition-colors">
              gus@gabrielbuilders.com
            </a>
            <a href="mailto:hello@gabrielbuilders.com" className="block text-[13px] font-mono text-[#C86428] mt-1 hover:underline">
              hello@gabrielbuilders.com
            </a>
            <div className="text-[11px] text-[#8A959E] mt-2">Direct architectural submissions</div>
          </div>

          {/* Physical Headquarters */}
          <div className="p-6 rounded-xl bg-[#131517] border border-[#C86428]/20">
            <div className="flex items-center gap-2 text-[#C86428] text-[11px] font-mono tracking-widest uppercase mb-3">
              <MapPin className="w-4 h-4 text-[#C86428]" />
              HEADQUARTERS & MILL
            </div>
            <div className="text-[14px] text-[#EDEAE5]">641 North Main Street</div>
            <div className="text-[13px] text-[#8A959E]">Travelers Rest, SC 29690</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#C86428]">
              <Clock className="w-3.5 h-3.5" />
              <span>By Appointment Only</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#8A959E] border-t border-[#C86428]/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Licensed SC & NC General Contractor
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              The Cliffs Master Builder Guild Member
            </span>
          </div>
          <div>© {new Date().getFullYear()} Gabriel Builders, Inc. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
};
