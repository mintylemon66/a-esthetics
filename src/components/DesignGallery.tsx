
import { useState, useMemo } from "react";
import DesignCard from "./DesignCard";
import FilterTabs from "./FilterTabs";

const designsData = [
  {
    id: 1,
    title: "Midnight Elegance",
    category: "posters",
    color: "#D4AF37",
    description: "Sophisticated poster design with golden accents and dramatic typography",
    tags: ["Typography", "Luxury", "Dark Theme"]
  },
  {
    id: 2,
    title: "Royal Branding",
    category: "branding",
    color: "#8B4CB8",
    description: "Premium brand identity with purple and gold elements",
    tags: ["Identity", "Premium", "Corporate"]
  },
  {
    id: 3,
    title: "Instagram Luxury",
    category: "social",
    color: "#C41E3A",
    description: "High-end social media template with burgundy tones",
    tags: ["Social", "Template", "Elegant"]
  },
  {
    id: 4,
    title: "Editorial Spread",
    category: "editorial",
    color: "#F5E6D3",
    description: "Magazine layout with champagne and gold styling",
    tags: ["Magazine", "Layout", "Typography"]
  },
  {
    id: 5,
    title: "Event Poster",
    category: "posters",
    color: "#4A0E4E",
    description: "Luxury event poster with deep purple gradients",
    tags: ["Event", "Gradient", "Premium"]
  },
  {
    id: 6,
    title: "Social Story",
    category: "social",
    color: "#B8860B",
    description: "Instagram story template with golden hour vibes",
    tags: ["Story", "Golden", "Aesthetic"]
  },
  {
    id: 7,
    title: "Brand Guidelines",
    category: "branding",
    color: "#2F1B69",
    description: "Comprehensive brand manual with royal purple theme",
    tags: ["Guidelines", "Manual", "Corporate"]
  },
  {
    id: 8,
    title: "Fashion Editorial",
    category: "editorial",
    color: "#CD853F",
    description: "High fashion magazine spread with warm tones",
    tags: ["Fashion", "Editorial", "Luxury"]
  },
  {
    id: 9,
    title: "Concert Poster",
    category: "posters",
    color: "#B22222",
    description: "Music event poster with bold burgundy design",
    tags: ["Music", "Event", "Bold"]
  }
];

const DesignGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDesigns = useMemo(() => {
    if (activeFilter === 'all') return designsData;
    return designsData.filter(design => design.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light luxury-text-gradient mb-4">
            Curated Design Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover premium design inspirations crafted with elegance and sophistication. 
            Each piece showcases the finest in visual storytelling and brand aesthetics.
          </p>
        </div>

        <FilterTabs 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <DesignCard key={design.id} {...design} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
