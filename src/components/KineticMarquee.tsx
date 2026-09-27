import React from 'react';
import { Home, Sparkles, Award, ShieldCheck, Compass } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { text: 'ESTABLISHED 1984 • TRAVELERS REST, SC', icon: Award },
    { text: 'LAKE KEOWEE WATERFRONT ESTATES', icon: Home },
    { text: 'NAHB BUILDER OF THE YEAR', icon: Sparkles },
    { text: 'HAND-HEWN TIMBER JOINERY', icon: Compass },
    { text: 'THE CLIFFS PREFERRED BUILDER', icon: ShieldCheck },
    { text: 'TENNESSEE FIELDSTONE & COPPER', icon: Sparkles },
    { text: 'CAROLINA BLUE RIDGE ESCARPMENT', icon: Home },
  ];

  return (
    <div className="relative py-8 bg-[#0E1012] border-y border-[#C86428]/25 overflow-hidden">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0E1012] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0E1012] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 pr-12">
            {items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <div key={itemIdx} className="flex items-center gap-4 text-nowrap">
                  <Icon className="w-4 h-4 text-[#C86428]" />
                  <span className="font-['Cinzel',serif] text-[20px] md:text-[24px] tracking-wider text-[#EDEAE5]">
                    {item.text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C86428]/50 mx-2" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
