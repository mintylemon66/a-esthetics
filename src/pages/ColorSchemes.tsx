
import { useState } from "react";
import Header from "@/components/Header";
import ColorPaletteCard from "@/components/ColorPaletteCard";

const colorSchemesPalettes = [
  {
    id: 1,
    name: "Monochromatic Elegance",
    category: "monochromatic",
    colors: ["#1A1A1A", "#333333", "#4D4D4D", "#808080", "#B3B3B3"],
    description: "A sophisticated monochromatic scheme in various shades of gray",
    tags: ["Monochromatic", "Elegant", "Timeless"],
    vibe: "Sophisticated & Timeless"
  },
  {
    id: 2,
    name: "Complementary Fire",
    category: "complementary",
    colors: ["#FF4500", "#FF6B35", "#00CED1", "#20B2AA", "#F0F8FF"],
    description: "Bold complementary colors that create dynamic contrast",
    tags: ["Complementary", "Bold", "Dynamic"],
    vibe: "Energetic & Bold"
  },
  {
    id: 3,
    name: "Triadic Harmony",
    category: "triadic",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"],
    description: "Perfectly balanced triadic color harmony",
    tags: ["Triadic", "Balanced", "Harmonious"],
    vibe: "Balanced & Vibrant"
  },
  {
    id: 4,
    name: "Analogous Sunset",
    category: "analogous",
    colors: ["#FF4500", "#FF6347", "#FF7F50", "#FFA500", "#FFD700"],
    description: "Warm analogous colors that flow like a sunset",
    tags: ["Analogous", "Warm", "Flowing"],
    vibe: "Warm & Harmonious"
  },
  {
    id: 5,
    name: "Split Complementary Ocean",
    category: "split-complementary",
    colors: ["#0077BE", "#FF6B35", "#FF9F40", "#87CEEB", "#E0F6FF"],
    description: "Split complementary scheme inspired by ocean and coral",
    tags: ["Split-Complementary", "Ocean", "Coral"],
    vibe: "Fresh & Balanced"
  },
  {
    id: 6,
    name: "Tetradic Garden",
    category: "tetradic",
    colors: ["#8FBC8F", "#DDA0DD", "#F0E68C", "#FFB6C1", "#FFFAF0"],
    description: "Four-color harmony inspired by a blooming garden",
    tags: ["Tetradic", "Garden", "Blooming"],
    vibe: "Cheerful & Rich"
  }
];

const ColorSchemes = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const schemeTypes = [
    { id: 'all', name: 'All Schemes' },
    { id: 'monochromatic', name: 'Monochromatic' },
    { id: 'complementary', name: 'Complementary' },
    { id: 'triadic', name: 'Triadic' },
    { id: 'analogous', name: 'Analogous' },
    { id: 'split-complementary', name: 'Split Complementary' },
    { id: 'tetradic', name: 'Tetradic' }
  ];

  const filteredPalettes = activeFilter === 'all' 
    ? colorSchemesPalettes 
    : colorSchemesPalettes.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light luxury-text-gradient mb-4">
              Color Schemes
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore palettes organized by color theory principles. From monochromatic elegance 
              to dynamic complementary contrasts, discover the science behind beautiful colors.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {schemeTypes.map((type) => (
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

export default ColorSchemes;
