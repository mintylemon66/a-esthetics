
import { useState } from "react";
import Header from "@/components/Header";
import ColorPaletteCard from "@/components/ColorPaletteCard";

const functionPalettes = [
  {
    id: 1,
    name: "E-commerce Excellence",
    category: "ecommerce",
    colors: ["#FF6B35", "#F7931E", "#FFD700", "#32CD32", "#4169E1"],
    description: "Trust-building colors that increase conversion rates",
    tags: ["E-commerce", "Conversion", "Trust"],
    vibe: "Trustworthy & Converting"
  },
  {
    id: 2,
    name: "Healthcare Harmony",
    category: "healthcare",
    colors: ["#4A90E2", "#7ED321", "#E8F4FD", "#FFFFFF", "#F5F5F5"],
    description: "Calming, clean colors that inspire confidence in health",
    tags: ["Healthcare", "Clean", "Calming"],
    vibe: "Clean & Trustworthy"
  },
  {
    id: 3,
    name: "Tech Innovation",
    category: "technology",
    colors: ["#1E3A8A", "#3B82F6", "#06B6D4", "#10B981", "#F59E0B"],
    description: "Modern, innovative colors for tech companies",
    tags: ["Technology", "Innovation", "Modern"],
    vibe: "Innovative & Modern"
  },
  {
    id: 4,
    name: "Restaurant Appetite",
    category: "food",
    colors: ["#DC2626", "#EA580C", "#F59E0B", "#65A30D", "#0F172A"],
    description: "Appetite-stimulating colors for food & dining",
    tags: ["Food", "Appetite", "Dining"],
    vibe: "Appetizing & Warm"
  },
  {
    id: 5,
    name: "Financial Security",
    category: "finance",
    colors: ["#1E40AF", "#059669", "#374151", "#6B7280", "#F9FAFB"],
    description: "Professional colors that convey financial stability",
    tags: ["Finance", "Security", "Professional"],
    vibe: "Stable & Professional"
  },
  {
    id: 6,
    name: "Education Inspiration",
    category: "education",
    colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
    description: "Inspiring colors that promote learning and growth",
    tags: ["Education", "Learning", "Growth"],
    vibe: "Inspiring & Growth-focused"
  }
];

const Functions = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const functionTypes = [
    { id: 'all', name: 'All Functions' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'technology', name: 'Technology' },
    { id: 'food', name: 'Food & Dining' },
    { id: 'finance', name: 'Finance' },
    { id: 'education', name: 'Education' }
  ];

  const filteredPalettes = activeFilter === 'all' 
    ? functionPalettes 
    : functionPalettes.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light luxury-text-gradient mb-4">
              Functional Palettes
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Purpose-driven color palettes designed for specific industries and functions. 
              Each palette is psychologically optimized to achieve business goals and user engagement.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {functionTypes.map((type) => (
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

export default Functions;
