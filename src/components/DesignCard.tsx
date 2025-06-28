
import { useState } from "react";
import { Palette } from "lucide-react";

interface DesignCardProps {
  id: number;
  title: string;
  category: string;
  color: string;
  description: string;
  tags: string[];
}

const DesignCard = ({ title, category, color, description, tags }: DesignCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl glass-effect hover:scale-[1.02] transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="h-80 w-full relative"
        style={{
          background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Design Preview Placeholder */}
        <div className="absolute inset-4 rounded-xl border-2 border-white/20 flex items-center justify-center">
          <div className="text-center text-white/60">
            <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-white/10 flex items-center justify-center">
              <Palette className="w-8 h-8" />
            </div>
            <p className="text-sm font-light">{category} Design</p>
          </div>
        </div>

        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-light text-white mb-2">{title}</h3>
            <p className="text-white/80 text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-white/20 rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color }} />
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
