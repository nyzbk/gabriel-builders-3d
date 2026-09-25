import React, { useEffect, useRef, useState } from 'react';
import { Award, ChevronRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  totalFrames?: number;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalFrames = 180,
  onOpenConsultation
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const [, setCurrentFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapter, setActiveChapter] = useState<string>('Lake Keowee Shoreline & Stone Arrival');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameStr = String(i).padStart(4, '0');
      img.src = `/frames/frame_${frameStr}.jpg?v=gabriel-motion-v1`;
      img.onload = () => {
        loaded++;
        if (loaded >= Math.min(25, totalFrames)) {
          setIsLoaded(true);
        }
        if (i === 1) {
          renderFrame(1);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [totalFrames]);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex - 1];
    if (img && img.complete) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      const naturalW = img.naturalWidth || 1920;
      const naturalH = img.naturalHeight || 1080;
      const imgRatio = naturalW / naturalH;
      const canvasRatio = w / h;

      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      if (canvasRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        drawX = 0;
        drawY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgRatio;
        drawX = (w - drawW) / 2;
        drawY = 0;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    }

    if (frameIndex <= 60) {
      setActiveChapter('Lake Keowee Shoreline & Stone Arrival');
    } else if (frameIndex <= 120) {
      setActiveChapter('Cathedral Timber Trusses & Great Room');
    } else {
      setActiveChapter('Cantilevered Sunset Infinity Terrace');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      setScrollProgress(progress);

      const targetFrame = Math.min(
        totalFrames,
        Math.max(1, Math.floor(progress * (totalFrames - 1)) + 1)
      );

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        setCurrentFrame(targetFrame);
        renderFrame(targetFrame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => renderFrame(currentFrameRef.current), { passive: true });
    renderFrame(1);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [totalFrames]);

  return (
    <section ref={containerRef} className="relative h-[450vh] w-full bg-[#0c0d10] overflow-x-clip">
      {/* Sticky Fullscreen Canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isLoaded ? 1 : 0.4 }}
        />

        {/* Ambient Darkened Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-[#0c0d10]/75 pointer-events-none" />

        {/* Narrative Layers */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-24 md:py-28 pointer-events-none">
          {/* Top Status */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c49a6c]/35 bg-[#12151e]/85 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c49a6c] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#f4efe8] font-medium">
                {activeChapter}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-6 text-xs tracking-wider text-[#a5b2c6]">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#c49a6c]" />
                <span>NAHB National Builder of the Year</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#3e4859]" />
              <span>The Cliffs & Lake Keowee Preferred Master Craftsman</span>
            </div>
          </div>

          {/* Central Narrative */}
          <div className="my-auto max-w-3xl">
            {scrollProgress < 0.35 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <div className="inline-block">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#c49a6c] font-semibold border-b border-[#c49a6c]/40 pb-1">
                    Generational Waterfront & Mountain Estates
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4efe8] leading-[1.08]">
                  Handcrafted Architecture. <br />
                  <span className="bronze-gradient-text">Generational</span> Heritage.
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#d0d7e4] font-light max-w-2xl leading-relaxed">
                  For over forty years, Gabriel Builders has shaped the most distinguished private lake and mountain sanctuaries across the Carolinas. Built without compromise, designed for legacy.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="glass-button px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold text-[#0c0d10] bg-[#c49a6c] hover:bg-[#dfb88e] transition-all flex items-center gap-2 shadow-xl"
                  >
                    <span>Begin Architectural Dialogue</span>
                    <ChevronRight className="w-4 h-4 text-[#0c0d10]" />
                  </button>
                  <a
                    href="#estates"
                    className="px-6 py-3.5 rounded-full border border-[#374052] bg-[#141822]/60 backdrop-blur-md text-xs tracking-[0.18em] uppercase text-[#f4efe8] hover:border-[#c49a6c]/60 transition-all"
                  >
                    View Estate Portfolio
                  </a>
                </div>
              </div>
            )}

            {scrollProgress >= 0.35 && scrollProgress < 0.70 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c49a6c] font-semibold border-b border-[#c49a6c]/40 pb-1">
                  Artisanal Joinery & Monumental Masonry
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4efe8] leading-tight">
                  Hand-Hewn Timber. <br />
                  <span className="bronze-gradient-text">Indigenous</span> Fieldstone.
                </h2>
                <p className="text-sm sm:text-base text-[#d0d7e4] max-w-xl leading-relaxed">
                  Every Douglas fir timber, mortise-and-tenon truss, and natural dry-stacked fireplace is executed by our permanent master craftsmen and dedicated site managers.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2 max-w-md">
                  <div className="border border-[#283142] bg-[#121620]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8e9daf]">Legacy</span>
                    <span className="text-lg font-bold text-[#f4efe8]">40+ Years</span>
                  </div>
                  <div className="border border-[#283142] bg-[#121620]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8e9daf]">Millwork</span>
                    <span className="text-lg font-bold text-[#f4efe8]">In-House</span>
                  </div>
                  <div className="border border-[#283142] bg-[#121620]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8e9daf]">Houzz Rating</span>
                    <span className="text-lg font-bold text-[#c49a6c]">5.0 Perfect</span>
                  </div>
                </div>
              </div>
            )}

            {scrollProgress >= 0.70 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c49a6c] font-semibold border-b border-[#c49a6c]/40 pb-1">
                  Private Lake Keowee Shoreline
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4efe8] leading-tight">
                  Where Natural Topography <br />
                  <span className="bronze-gradient-text">Meets Architectural Mastery.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#d0d7e4] max-w-xl leading-relaxed">
                  From deepwater docks on Lake Keowee to 3,000-foot ridge-lines at The Cliffs, we seamlessly weave panoramic vistas into every interior living space.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="glass-button px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold text-[#f4efe8] border border-[#c49a6c] flex items-center gap-2"
                  >
                    <span>Schedule Site Consultation</span>
                    <ChevronRight className="w-4 h-4 text-[#c49a6c]" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto border-t border-[#202735] pt-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#8e9daf]">Architectural Tour</span>
              <div className="w-32 sm:w-48 h-1.5 rounded-full bg-[#202735] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#c49a6c] to-[#dfb88e] transition-all duration-150"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
              <span className="text-xs font-mono text-[#c49a6c]">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8e9daf] animate-bounce">
              <span>Scroll to walk the estate</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#c49a6c]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
