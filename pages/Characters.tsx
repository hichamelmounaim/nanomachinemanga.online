import React from 'react';
import SEOHead from '../components/SEOHead';
import { CHARACTERS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Characters: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEOHead
        title="Nano Machine Manga Characters - Full Character Guide"
        description="Complete character database for Nano Machine manhwa. Profiles of Cheon Yeo-Woon, Nano AI, Mar Kim, and every major figure in the Demonic Cult."
        canonicalUrl="https://nanomachinemanga.online/characters"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Nano Machine Manga Characters",
          "description": "Complete character database for Nano Machine manhwa. Profiles of Cheon Yeo-Woon, Nano AI, Mar Kim, and every major figure in the Demonic Cult.",
          "url": "https://nanomachinemanga.online/characters",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Nano Machine Manga",
            "url": "https://nanomachinemanga.online/"
          }
        }}
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Nano Machine Manga Characters</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive database of every character in Nano Machine manhwa. Learn about their martial arts abilities, powers, and roles in the Demonic Cult.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHARACTERS.map((char) => (
          <div key={char.id} className="group flex flex-col overflow-hidden bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-bb-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-bb-blue/10">
            {char.image && (
              <div className="w-full h-72 overflow-hidden relative">
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90" />
              </div>
            )}
            <div className="p-6 flex flex-col flex-1 -mt-12 relative z-10">
              <div className="flex justify-between items-end mb-4">
                <div className="flex flex-col gap-2 drop-shadow-md">
                  <h2 className="text-2xl font-bold text-white group-hover:text-bb-blue transition-colors">
                    {char.name}
                  </h2>
                  <span className="self-start px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3b82f6] bg-[#3b82f6]/20 backdrop-blur-sm rounded-md border border-[#3b82f6]/30">
                    {char.grade || char.role}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-8">
                {char.description || 'No description available.'}
              </p>

              <div className="pt-4 border-t border-white/5 mt-auto">
                <button className="text-sm font-bold text-white hover:text-bb-blue transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-200">
                  Read Full Profile <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;