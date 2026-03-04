import { motion } from "framer-motion";
import { Clock, MapPin, Utensils, Star } from "lucide-react";

const features = [
  { icon: Utensils, title: "Diverse Menu", desc: "Shawarmas, burgers, wraps, pizzas, fries & more" },
  { icon: Clock, title: "Open Late", desc: "Daily 2:00 PM to 12:00 AM" },
  { icon: MapPin, title: "Prime Location", desc: "Near Lady Jamshedji Road, Sonapur, Mahim West" },
  { icon: Star, title: "Top Rated", desc: "4.5★ on Zomato & Justdial" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">Who We Are</span>
          <h2 className="font-display text-6xl sm:text-7xl text-gradient mt-2">ABOUT US</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-lg text-muted-foreground leading-relaxed"
          >
            Albrost Fast Food is a beloved fast food destination in Mahim West, Mumbai, known for quick service
            and an irresistible menu. Located near Paradise Cinema and other local landmarks, we've been serving
            the community with flavourful shawarmas, juicy burgers, crispy nuggets and much more.
            Whether it's an evening snack or a late-night craving, Albrost has you covered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors card-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
