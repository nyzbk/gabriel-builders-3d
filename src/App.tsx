import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
    <div className="relative min-h-screen bg-[#0c0d10] text-[#f4efe8] selection:bg-[#c49a6c] selection:text-[#0c0d10] overflow-x-clip">
      <Navbar onOpenConsultation={handleOpenConsultation} />
      
      <main>
        {/* Section #1: 60-frame Architectural Walkthrough */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Section #2: Signature Custom Estates */}
        <PortfolioSection onSelectEstate={handleSelectEstate} />

        {/* Section #3: Generational Craftsmanship & Millwork Guild */}
        <CraftSection />

        {/* Section #4: Homeowner Praise & Houzz 5.0 */}
        <TestimonialsSection />
      </main>

      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedEstate={selectedEstate}
      />
    </div>
  );
};

export default App;
