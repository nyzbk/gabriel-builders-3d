import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Tom & Chris Glavine',
      estate: 'Lake Keowee Custom Waterfront Sanctuary',
      location: 'Lake Keowee, SC',
      quote:
        'Gabriel Builders turned our vision for Lake Keowee into an architectural masterpiece. Dale and his team treated every single timber, stone, and detail as if they were building their own generational home.',
      rating: 5,
      role: 'Hall of Fame Athlete & Keowee Homeowner'
    },
    {
      name: 'The Champagne Family',
      estate: 'French Country Provincial Estate',
      location: 'Travelers Rest, SC',
      quote:
        'The level of craftsmanship in their in-house millwork and masonry is simply nonexistent in other builders today. Four years after move-in, they still care for our property with pristine dedication.',
      rating: 5,
      role: 'Verified Custom Homeowner'
    },
    {
      name: 'Keowee Vineyards Homeowners',
      estate: 'Cliffs at Keowee Vineyards Ridge Estate',
      location: 'Sunset, SC',
      quote:
        'Building on a steep mountain lake slope requires serious engineering and absolute trust. Gabriel delivered on schedule, on budget, and won National Custom Home of the Year. Truly peerless.',
      rating: 5,
      role: 'Verified Cliffs Resident'
    }
  ];

  return (
    <section id="stories" className="py-28 bg-[#0e1015] border-t border-[#1f2533]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a6c] font-semibold block mb-2">
            Verified Homeowner Praise
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f4efe8]">
            Built on Relationships.
          </h2>
          <p className="text-sm text-[#94a3b8] mt-3">
            Rated 5.0 out of 5 across verified Houzz and community reviews. Read what our homeowners say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-[#242c3c] flex flex-col justify-between hover:border-[#c49a6c]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#c49a6c]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c49a6c]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#3b475c]" />
                </div>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f2636] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#f4efe8] flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#c49a6c]" />
                  </h4>
                  <span className="text-[11px] text-[#c49a6c] block font-medium">
                    {rev.estate}
                  </span>
                  <span className="text-[10px] text-[#718299] block font-mono">
                    {rev.location}
                  </span>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#141822] border border-[#283244] text-[#a0aec0] uppercase tracking-wider">
                  {rev.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
