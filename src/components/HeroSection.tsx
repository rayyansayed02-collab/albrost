import { motion } from "framer-motion";
import { MapPin, Star, ArrowDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Albrost Fast Food spread" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm tracking-widest uppercase text-primary font-body">Mahim West, Mumbai</span>
          </div>

          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl tracking-tight text-gradient leading-none mb-2">
            ALBROST
          </h1>
          <p className="font-display text-2xl sm:text-3xl tracking-[0.3em] text-foreground/80 mb-6">
            FAST FOOD
          </p>

          <div className="flex items-center justify-center gap-1 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <Star className="w-5 h-5 fill-primary/50 text-primary" />
            <span className="ml-2 text-sm text-muted-foreground font-body">4.5 Rating</span>
          </div>

          <p className="max-w-lg mx-auto text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Serving the tastiest shawarmas, burgers, wraps & more since Mahim's favourite fast food spot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-lg font-body font-semibold text-sm tracking-wide uppercase bg-primary text-primary-foreground hover:brightness-110 transition-all glow-shadow"
            >
              Explore Menu
            </button>
            <a
              href="https://wa.me/918976638228?text=Hi%20Albrost!%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-sm tracking-wide uppercase bg-[hsl(142,70%,40%)] text-white hover:bg-[hsl(142,70%,35%)] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Order Now
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-lg font-body font-semibold text-sm tracking-wide uppercase border border-border text-foreground hover:border-primary hover:text-primary transition-all"
            >
              Find Us
            </button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
