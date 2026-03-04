import { motion } from "framer-motion";
import { Flame, Tag } from "lucide-react";

const offers = [
  { title: "Shawarma Combo", desc: "Any Shawarma + Fries + Drink", price: "₹149", icon: Flame },
  { title: "Burger Feast", desc: "2 Burgers + Cheese Fries", price: "₹199", icon: Tag },
  { title: "Family Pack", desc: "4 Shawarmas + 2 Fries", price: "₹399", icon: Flame },
];

const SpecialOffers = () => (
  <section className="py-16 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary font-body text-sm tracking-widest uppercase">Don't Miss Out</span>
        <h2 className="font-display text-5xl sm:text-6xl text-gradient mt-2">SPECIAL OFFERS</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-2xl border border-primary/30 bg-background p-6 text-center overflow-hidden group hover:border-primary transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <offer.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-2xl text-foreground mb-1">{offer.title}</h3>
            <p className="font-body text-sm text-muted-foreground mb-3">{offer.desc}</p>
            <span className="font-display text-3xl text-primary">{offer.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialOffers;
