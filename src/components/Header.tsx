
import { Palette } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-10 border-b border-border/20 glass-effect">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl luxury-gradient">
              <Palette className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-light luxury-text-gradient">
                Luxe Inspire
              </h1>
              <p className="text-sm text-muted-foreground">
                Premium Design Gallery
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Posters
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Social Media
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Branding
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Editorial
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
