import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { SignatureWidget } from './components/SignatureWidget';
import { MagneticCTA } from './components/MagneticCTA';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#131517] text-[#EDEAE5] font-['Space_Grotesk',sans-serif] selection:bg-[#C86428] selection:text-white overflow-x-clip">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main>
        {/* Section 1: Jack Roberts SOTA 240-Frame Canvas Hero */}
        <Hero onOpenConsultation={handleOpenConsultation} />
        
        {/* Section 2: Meta AI Pinned Horizontal Scroll Gallery (300vh) */}
        <HorizontalWorks onOpenConsultation={handleOpenConsultation} />

        {/* Section 3: Interactive Bento Grid with Live Telemetry */}
        <InteractiveBento onOpenConsultation={handleOpenConsultation} />

        {/* Section 4: Kinetic Marquee Ribbon */}
        <KineticMarquee />

        {/* Bespoke Mountain Estate Lot & Architectural Estimator Widget */}
        <SignatureWidget onOpenConsultation={handleOpenConsultation} />

        {/* Section 5: Premium Magnetic CTA with Multi-Contact Intelligence */}
        <MagneticCTA onOpenConsultation={handleOpenConsultation} />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;
