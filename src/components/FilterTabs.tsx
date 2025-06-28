
import { useState } from "react";

const categories = [
  { id: 'all', name: 'All Designs', count: 42 },
  { id: 'posters', name: 'Posters', count: 12 },
  { id: 'social', name: 'Social Media', count: 18 },
  { id: 'branding', name: 'Branding', count: 8 },
  { id: 'editorial', name: 'Editorial', count: 4 }
];

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center p-1 glass-effect rounded-2xl">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`px-6 py-3 rounded-xl transition-all duration-300 relative ${
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
