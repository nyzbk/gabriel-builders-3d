import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { PortfolioSection } from './components/PortfolioSection';
import { CraftSection } from './components/CraftSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import type { Estate } from './data/estates';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEstate, setSelectedEstate] = useState<Estate | null>(null);

  const handleOpenConsultation = () => {
    setSelectedEstate(null);
    setIsModalOpen(true);
  };

  const handleSelectEstate = (estate: Estate) => {
    setSelectedEstate(estate);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#131517] text-[#EDEAE5] font-['Space_Grotesk'] selection:bg-[#C86428] selection:text-white">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main>
        <Hero onOpenConsultation={handleOpenConsultation} />
        
        {/* Bespoke Mountain Estate Lot & Architectural Estimator Widget */}
        <SignatureWidget onOpenConsultation={handleOpenConsultation} />

        <PortfolioSection onSelectEstate={handleSelectEstate} />
        <CraftSection />
        <TestimonialsSection />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedEstate={selectedEstate}
      />
    </div>
  );
};

export default App;
