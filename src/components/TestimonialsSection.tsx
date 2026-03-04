import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "Rahul S.", text: "Best shawarma in Mahim! The Arabic Shawarma is my go-to every week.", rating: 5 },
  { name: "Priya M.", text: "Love their burgers — crispy, juicy, and super affordable. Always fresh!", rating: 5 },
  { name: "Ahmed K.", text: "Late night cravings sorted! Great wraps and the fries are amazing.", rating: 4 },
  { name: "Sneha D.", text: "My family's favourite spot. The Jumbo Shawarma is worth every rupee.", rating: 5 },
  { name: "Vikram T.", text: "Pizza is underrated here. Shawarma Pizza is a must-try combo!", rating: 4 },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">What People Say</span>
          <h2 className="font-display text-6xl sm:text-7xl text-gradient mt-2">REVIEWS</h2>
        </motion.div>

        <div className="max-w-xl mx-auto text-center">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < t.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              ))}
            </div>
            <p className="font-body text-lg text-foreground/90 italic mb-4">"{t.text}"</p>
            <p className="font-body text-sm text-primary font-semibold">{t.name}</p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-6" : "bg-muted-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
