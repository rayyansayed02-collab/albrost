import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "Zomato",
    url: "https://www.zomato.com/mumbai/albrost-fast-food-mahim/order",
    color: "hsl(0, 80%, 52%)",
    bgColor: "hsl(0, 80%, 52%)",
    description: "Order on Zomato for fast delivery",
  },
  {
    name: "Swiggy",
    url: "https://www.swiggy.com/city/mumbai/albrost-fast-food-mahim-rest725892",
    color: "hsl(27, 100%, 50%)",
    bgColor: "hsl(27, 100%, 50%)",
    description: "Order on Swiggy for quick delivery",
  },
];

const PlatformLinks = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">Also Available On</span>
          <h2 className="font-display text-5xl sm:text-6xl text-gradient mt-2">ORDER ONLINE</h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group flex items-center gap-4 w-full sm:w-auto rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all hover:scale-[1.02]"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-white font-display text-xl"
                style={{ backgroundColor: platform.bgColor }}
              >
                {platform.name[0]}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl text-foreground">{platform.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{platform.description}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformLinks;
