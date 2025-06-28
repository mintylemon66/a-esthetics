
import { useState } from "react";
import Header from "@/components/Header";
import ColorPaletteCard from "@/components/ColorPaletteCard";

const vibesPalettes = [
  {
    id: 1,
    name: "Serene Meditation",
    category: "calm",
    colors: ["#E8F4F8", "#D4EAF0", "#B8D4E0", "#9BB8C8", "#7A9BB0"],
    description: "Colors that promote peace and mindfulness",
    tags: ["Calm", "Meditation", "Peace"],
    vibe: "Tranquil & Peaceful"
  },
  {
    id: 2,
    name: "Electric Energy",
    category: "energetic",
    colors: ["#FF073A", "#FF6B35", "#39FF14", "#00BFFF", "#FF1493"],
    description: "High-energy colors that demand attention",
    tags: ["Energy", "Electric", "Vibrant"],
    vibe: "Dynamic & Powerful"
  },
  {
    id: 3,
    name: "Romantic Whisper",
    category: "romantic",
    colors: ["#FFE4E1", "#FFC0CB", "#DDA0DD", "#F0E68C", "#FFFAF0"],
    description: "Soft, dreamy colors for love and romance",
    tags: ["Romance", "Dreamy", "Soft"],
    vibe: "Tender & Loving"
  },
  {
    id: 4,
    name: "Professional Authority",
    category: "professional",
    colors: ["#2C3E50", "#34495E", "#5D6D7E", "#85929E", "#D5DBDB"],
    description: "Trustworthy colors that convey competence",
    tags: ["Professional", "Trust", "Authority"],
    vibe: "Confident & Reliable"
  },
  {
    id: 5,
    name: "Playful Joy",
    category: "playful",
    colors: ["#FFB6C1", "#87CEEB", "#98FB98", "#F0E68C", "#DDA0DD"],
    description: "Fun, cheerful colors that spark happiness",
    tags: ["Playful", "Joy", "Fun"],
    vibe: "Happy & Cheerful"
  },
  {
    id: 6,
    name: "Mysterious Depth",
    category: "mysterious",
    colors: ["#191970", "#4B0082", "#2F4F4F", "#8B0000", "#000000"],
    description: "Deep, enigmatic colors that intrigue",
    tags: ["Mystery", "Deep", "Intrigue"],
    vibe: "Enigmatic & Deep"
  }
];

const Vibes = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const vibeTypes = [
    { id: 'all', name: 'All Vibes' },
    { id: 'calm', name: 'Calm' },
    { id: 'energetic', name: 'Energetic' },
    { id: 'romantic', name: 'Romantic' },
    { id: 'professional', name: 'Professional' },
    { id: 'playful', name: 'Playful' },
    { id: 'mysterious', name: 'Mysterious' }
  ];

  const filteredPalettes = activeFilter === 'all' 
    ? vibesPalettes 
    : vibesPalettes.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light luxury-text-gradient mb-4">
              Vibes & Emotions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Colors that speak to the soul. Each palette is carefully crafted to evoke specific 
              emotions and create the perfect atmosphere for your creative vision.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {vibeTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeFilter === type.id
                    ? 'luxury-gradient text-black font-medium'
                    : 'glass-effect text-foreground/70 hover:text-foreground hover:bg-white/10'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPalettes.map((palette) => (
              <ColorPaletteCard key={palette.id} {...palette} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vibes;
