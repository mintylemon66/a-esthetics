
import { useState } from "react";
import { Palette, Copy, Check } from "lucide-react";

interface ColorPaletteCardProps {
  id: number;
  name: string;
  category: string;
  colors: string[];
  description: string;
  tags: string[];
  vibe: string;
}

const ColorPaletteCard = ({ name, category, colors, description, tags, vibe }: ColorPaletteCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl glass-effect hover:scale-[1.02] transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Color Palette Display */}
      <div className="h-80 w-full relative flex">
        {colors.map((color, index) => (
          <div
            key={index}
            className="flex-1 relative group/color cursor-pointer transition-all duration-300 hover:flex-[1.2]"
            style={{ backgroundColor: color }}
            onClick={() => copyColor(color)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover/color:bg-black/20 transition-all duration-300" />
            
            {/* Color Code */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover/color:opacity-100 transition-opacity duration-300">
              <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg">
                <span className="text-white text-sm font-mono">{color}</span>
                {copiedColor === color ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-white/80" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Overlay with Details */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center text-white p-6">
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
            <Palette className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-light mb-2">{name}</h3>
          <p className="text-white/80 text-sm mb-4 max-w-xs">{description}</p>
          <div className="flex flex-wrap gap-2 justify-center">
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

      {/* Card Footer */}
      <div className="p-4 bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{vibe}</p>
          </div>
          <div className="flex space-x-1">
            {colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-white/20"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteCard;
