import React, { useState } from 'react';
import { X, Check, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Estate } from '../data/estates';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEstate?: Estate | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedEstate
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    homesiteLocation: 'Lake Keowee Waterfront',
    timeline: 'Planning Phase (Ready in 12-24 Months)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c49a6c', '#dfb88e', '#ffffff']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg glass-panel-bronze rounded-3xl p-6 sm:p-8 border border-[#c49a6c]/40 shadow-2xl overflow-hidden">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#141822] text-[#94a3b8] hover:text-[#f4efe8] hover:bg-[#1e2433] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f4efe8]">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-[#cbd5e1] max-w-sm mx-auto leading-relaxed">
              Our architectural director will contact you within 24 hours to review your homesite parameters and architectural preferences for{' '}
              <strong className="text-[#c49a6c]">
                {selectedEstate ? selectedEstate.title : 'your custom estate'}
              </strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#0f121a] border border-[#232b3b] text-xs text-[#a0aec0]">
              <span>Direct Studio Phone: </span>
              <a href="tel:+18648793035" className="text-[#c49a6c] font-bold underline">
                (864) 879-3035
              </a>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-full bg-[#c49a6c] text-[#0c0d10] font-bold text-xs uppercase tracking-widest hover:bg-[#dfb88e] transition-all"
            >
              Return to Portfolio
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c49a6c] font-semibold block mb-1">
                Gabriel Architectural Studio
              </span>
              <h3 className="font-display text-2xl font-bold text-[#f4efe8]">
                {selectedEstate ? `Inquire: ${selectedEstate.title}` : 'Begin Custom Build Dialogue'}
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                {selectedEstate
                  ? `${selectedEstate.location} · ${selectedEstate.squareFeet} · ${selectedEstate.architecture}`
                  : 'Let us bring four decades of generational building mastery to your homesite.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Christopher Harrison"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0c0e14] border border-[#252d3d] text-sm text-[#f4efe8] placeholder-[#505d74] focus:outline-none focus:border-[#c49a6c]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(864) 555-0144"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c0e14] border border-[#252d3d] text-sm text-[#f4efe8] placeholder-[#505d74] focus:outline-none focus:border-[#c49a6c]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="christopher@harrisonestate.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c0e14] border border-[#252d3d] text-sm text-[#f4efe8] placeholder-[#505d74] focus:outline-none focus:border-[#c49a6c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                  Homesite Region or Community
                </label>
                <select
                  value={formData.homesiteLocation}
                  onChange={e => setFormData({ ...formData, homesiteLocation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0c0e14] border border-[#252d3d] text-sm text-[#f4efe8] focus:outline-none focus:border-[#c49a6c]"
                >
                  <option value="Lake Keowee Waterfront">Lake Keowee Waterfront</option>
                  <option value="The Cliffs (Mountain Park, Keowee, Glassy, Valley, Walnut Cove)">The Cliffs Communities</option>
                  <option value="Lake Toxaway / Cashiers / Highlands, NC">Lake Toxaway / Cashiers Highlands</option>
                  <option value="Greenville & Upstate Private Acreage">Greenville & Upstate Private Acreage</option>
                  <option value="Currently Searching for Land">Currently Searching for Land</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                  Vision & Architectural Intent
                </label>
                <textarea
                  rows={2}
                  placeholder="Share details regarding square footage, site topography, or desired features."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#0c0e14] border border-[#252d3d] text-sm text-[#f4efe8] placeholder-[#505d74] focus:outline-none focus:border-[#c49a6c]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-[#8292a8]">
                  <Shield className="w-3.5 h-3.5 text-[#c49a6c]" />
                  <span>Confidential Client Dialogue</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#c49a6c] text-[#0c0d10] font-bold text-xs uppercase tracking-widest hover:bg-[#dfb88e] transition-all shadow-lg flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
