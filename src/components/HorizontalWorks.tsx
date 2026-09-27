import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface EstateItem {
  id: string;
  category: string;
  title: string;
  location: string;
  description: string;
  scale: string;
  materials: string[];
}

const ESTATES: EstateItem[] = [
  {
    id: 'keowee-peninsula',
    category: 'LAKEFRONT COMPOUND',
    title: 'The Keowee Waterfront Peninsula',
    location: 'Lake Keowee • Salem, SC',
    description: 'An 11,500 sq ft heavy timber sanctuary situated on a private 3.2-acre peninsula. Soaring 28-foot tongue-and-groove cedar ceilings, hand-cut Tennessee stone hearths, and a matching custom timber boathouse.',
    scale: '11,500 SQ FT',
    materials: ['Heavy Douglas Fir Bents', 'Hand-Cut Tennessee Fieldstone', 'Standing Seam Copper Roof'],
  },
  {
    id: 'cliffs-mountain-park',
    category: 'MOUNTAIN ESCARPMENT',
    title: 'The Cliffs at Mountain Park Manor',
    location: 'The Cliffs • Travelers Rest, SC',
    description: 'Perched along a sheer granite ridgeline overlooking the Blue Ridge Mountains. Frameless architectural glass walls, cantilevered outdoor dining pavilions, and integrated geo-thermal radiant stone floors.',
    scale: '8,900 SQ FT',
    materials: ['Reclaimed White Oak Beams', 'Dry-Stack Granite Ashlar', 'Thermally Broken Black Steel'],
  },
  {
    id: 'jocassee-sanctuary',
    category: 'ULTRA-LUXURY WILDERNESS',
    title: 'The Lake Jocassee Retreat',
    location: 'Lake Jocassee • Oconee, SC',
    description: 'A discreet modern wilderness estate accessed by private watercraft. Blends brutalist board-formed concrete foundations with warm hemlock paneling and an expansive infinity lake plunge pool.',
    scale: '7,200 SQ FT',
    materials: ['Board-Formed Architectural Concrete', 'Western Red Cedar', 'Custom Bronze Portals'],
  },
  {
    id: 'timber-mill',
    category: 'IN-HOUSE CRAFTSMANSHIP',
    title: 'The Master Timber Frame Mill',
    location: 'Travelers Rest Studio • SC',
    description: 'Our dedicated timber fabrication facility where master woodworkers hand-hew, chisel, and traditional mortise-and-tenon joint every structural beam using timber sourced from sustainable Pacific forests.',
    scale: 'MASTER MILL',
    materials: ['Heavy Glulam & Solid Timber', 'Mortise & Tenon Joinery', 'Hand-Forged Steel Gussets'],
  },
  {
    id: 'estate-studio',
    category: 'CLIENT SANCTUARY',
    title: 'The Private Design & Build Studio',
    location: '641 N Main St • Travelers Rest, SC',
    description: 'Where clients walk through true-scale physical timber mockups, select rare granite slabs, and experience immersive 3D architectural VR walkthroughs of their future residence with Gus Rubio.',
    scale: 'ATELIER',
    materials: ['Full-Scale Material Galleries', 'Custom Millwork Mockups', 'Architectural Visualization'],
  },
];

interface HorizontalWorksProps {
  onOpenConsultation: () => void;
}

export const HorizontalWorks: React.FC<HorizontalWorksProps> = ({ onOpenConsultation }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0E1012] text-[#EDEAE5]">
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[1600px] mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#C86428] uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C86428]" />
              ESTATE PORTFOLIO / 02
            </div>
            <h2 className="font-['Cinzel',serif] text-[36px] md:text-[56px] leading-[0.95] text-[#EDEAE5]">
              Masterwork Mountain & Lake Estates.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#8A959E] max-w-md font-['Space_Grotesk',sans-serif] leading-relaxed">
            Pan across our private residential compounds, crafted on the severe granite topography and pristine waterfronts of the Carolinas.
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full overflow-visible">
          <motion.div style={{ x }} className="flex gap-8 items-stretch will-change-transform">
            {ESTATES.map((estate, index) => (
              <div
                key={estate.id}
                className="group relative w-[85vw] sm:w-[540px] md:w-[620px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#1C1F24] to-[#121417] border border-[#C86428]/25 p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#C86428]/60 hover:shadow-[#C86428]/10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#C86428]/15 pb-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#C86428] uppercase">
                      [{String(index + 1).padStart(2, '0')}] // {estate.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#C86428]/15 text-[#C86428] text-[11px] font-mono font-medium">
                      {estate.scale}
                    </span>
                  </div>

                  <h3 className="font-['Cinzel',serif] text-[28px] md:text-[34px] leading-tight text-[#EDEAE5] mb-2">
                    {estate.title}
                  </h3>

                  <p className="text-[13px] font-mono text-[#C86428] mb-4">
                    {estate.location}
                  </p>

                  <p className="text-[14px] md:text-[15px] text-[#8A959E] leading-relaxed mb-6 font-['Space_Grotesk',sans-serif]">
                    {estate.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {estate.materials.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-md bg-[#131517] border border-[#C86428]/20 text-[11px] font-mono text-[#EDEAE5]/80"
                      >
                        • {mat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 rounded-xl bg-[#C86428]/15 border border-[#C86428]/40 text-[#C86428] hover:bg-[#C86428] hover:text-white text-[13px] font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-[#C86428]"
                  >
                    <span>Inquire Regarding Build</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at Bottom of Sticky Frame */}
        <div className="max-w-[1600px] mx-auto w-full mt-8">
          <div className="w-full h-1 bg-[#1C1F24] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#C86428]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#8A959E] mt-2">
            <span>ESTATE 01: KEOWEE WATERFRONT</span>
            <span>ESTATE 05: DESIGN ATELIER</span>
          </div>
        </div>
      </div>
    </section>
  );
};
