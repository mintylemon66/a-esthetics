
import { useState } from "react";

const categories = [
  { id: 'all', name: 'All Palettes', count: 42 },
  { id: 'warm', name: 'Warm', count: 12 },
  { id: 'cool', name: 'Cool', count: 8 },
  { id: 'neutral', name: 'Neutral', count: 6 },
  { id: 'vibrant', name: 'Vibrant', count: 10 },
  { id: 'dark', name: 'Dark', count: 4 },
  { id: 'soft', name: 'Soft', count: 8 },
  { id: 'nature', name: 'Nature', count: 6 }
];

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex flex-wrap items-center justify-center p-1 glass-effect rounded-2xl">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`px-4 py-2 m-1 rounded-xl transition-all duration-300 relative ${
              activeFilter === category.id
                ? 'luxury-gradient text-black font-medium'
                : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
            }`}
          >
            <span className="relative z-10">{category.name}</span>
            <span className={`ml-2 text-xs ${
              activeFilter === category.id ? 'text-black/70' : 'text-foreground/50'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
