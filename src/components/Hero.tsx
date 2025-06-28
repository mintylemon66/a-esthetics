
const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
            <span className="luxury-text-gradient">Exquisite</span>
            <br />
            <span className="text-foreground">Color Palettes</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the world's most beautiful color combinations. From nature's harmony 
            to designer's vision, find the perfect palette that speaks to your creative soul.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 luxury-gradient text-black font-medium rounded-2xl hover:scale-105 transition-transform duration-300">
              Explore Palettes
            </button>
            <button className="px-8 py-4 glass-effect text-foreground rounded-2xl hover:bg-white/10 transition-colors duration-300">
              Browse by Mood
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
