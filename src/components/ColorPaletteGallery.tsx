
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ColorPaletteCard from "./ColorPaletteCard";
import FilterTabs from "./FilterTabs";

const palettesData = [
  {
    id: 1,
    name: "Midnight Luxe",
    category: "dark",
    colors: ["#0D1117", "#161B22", "#D4AF37", "#F7F3E3", "#2D1B69"],
    description: "Sophisticated dark palette with golden accents for premium brands",
    tags: ["Luxury", "Dark", "Gold"],
    vibe: "Elegant & Mysterious"
  },
  {
    id: 2,
    name: "Sunset Romance",
    category: "warm",
    colors: ["#FF6B6B", "#FF8E53", "#FF6B9D", "#C44569", "#F8B500"],
    description: "Warm romantic hues perfect for lifestyle and beauty brands",
    tags: ["Romance", "Warm", "Vibrant"],
    vibe: "Passionate & Warm"
  },
  {
    id: 3,
    name: "Ocean Depths",
    category: "cool",
    colors: ["#0B3D91", "#1E6091", "#2E8B57", "#4682B4", "#E0F6FF"],
    description: "Deep oceanic blues with refreshing accents",
    tags: ["Ocean", "Cool", "Refreshing"],
    vibe: "Calm & Professional"
  },
  {
    id: 4,
    name: "Forest Whisper",
    category: "nature",
    colors: ["#2D5016", "#68B684", "#A8E6CF", "#D4F1A0", "#FFFCE8"],
    description: "Natural greens inspired by ancient forests",
    tags: ["Nature", "Green", "Organic"],
    vibe: "Fresh & Natural"
  },
  {
    id: 5,
    name: "Royal Purple",
    category: "vibrant",
    colors: ["#4A0E4E", "#8B4CB8", "#D896FF", "#E6E6FA", "#FFD700"],
    description: "Regal purples with luxurious gold highlights",
    tags: ["Royal", "Purple", "Luxury"],
    vibe: "Majestic & Bold"
  },
  {
    id: 6,
    name: "Minimalist Zen",
    category: "neutral",
    colors: ["#FAFAFA", "#E8E8E8", "#BCBCBC", "#6C6C6C", "#2E2E2E"],
    description: "Clean neutral palette for modern minimalist designs",
    tags: ["Minimal", "Clean", "Modern"],
    vibe: "Clean & Sophisticated"
  },
  {
    id: 7,
    name: "Autumn Harvest",
    category: "warm",
    colors: ["#8B4513", "#CD853F", "#DEB887", "#F4A460", "#FFF8DC"],
    description: "Rich autumn colors inspired by harvest season",
    tags: ["Autumn", "Harvest", "Cozy"],
    vibe: "Cozy & Rustic"
  },
  {
    id: 8,
    name: "Electric Dreams",
    category: "vibrant",
    colors: ["#FF0080", "#00FFFF", "#FFFF00", "#FF4500", "#9400D3"],
    description: "Bold neon palette for futuristic and tech brands",
    tags: ["Neon", "Electric", "Futuristic"],
    vibe: "Energetic & Modern"
  },
  {
    id: 9,
    name: "Sakura Bloom",
    category: "soft",
    colors: ["#FFB7C5", "#FFC0CB", "#E6E6FA", "#F0F8FF", "#FFFAF0"],
    description: "Soft pastel pinks inspired by cherry blossoms",
    tags: ["Sakura", "Soft", "Pastel"],
    vibe: "Gentle & Romantic"
  }
];

const ColorPaletteGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPalettes = useMemo(() => {
    if (activeFilter === 'all') return palettesData;
    return palettesData.filter(palette => palette.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light luxury-text-gradient mb-4">
            Exquisite Color Palettes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most beautiful color combinations crafted by nature and refined by art. 
            Each palette tells a story and evokes emotions that elevate your creative projects.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link 
            to="/color-schemes" 
            className="px-6 py-3 glass-effect rounded-xl text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all duration-300"
          >
            Color Schemes
          </Link>
          <Link 
            to="/vibes" 
            className="px-6 py-3 glass-effect rounded-xl text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all duration-300"
          >
            Vibes
          </Link>
          <Link 
            to="/functions" 
            className="px-6 py-3 glass-effect rounded-xl text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all duration-300"
          >
            Functions
          </Link>
        </div>

        <FilterTabs 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPalettes.map((palette) => (
            <ColorPaletteCard key={palette.id} {...palette} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorPaletteGallery;
