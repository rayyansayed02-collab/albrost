import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = { name: string; price: string };
type Category = { name: string; items: MenuItem[] };

const menuData: Category[] = [
  {
    name: "Chicken Shawarma",
    items: [
      { name: "Chi. Shawarma", price: "₹70" },
      { name: "Chi. Cheese Shawarma", price: "₹90" },
      { name: "Extra Chi. Shawarma", price: "₹85" },
      { name: "Arabic Shawarma", price: "₹100" },
      { name: "Chi. Tikka Shawarma", price: "₹110" },
      { name: "Jumbo Shawarma", price: "₹120" },
      { name: "Chi. Open Shawarma", price: "₹140" },
      { name: "Chi. Nuggets Shawarma", price: "₹120" },
    ],
  },
  {
    name: "Chicken Burger",
    items: [
      { name: "Chi. Burger", price: "₹50" },
      { name: "Chi. Tandoori Burger", price: "₹80" },
      { name: "Chi. Mexican Burger", price: "₹85" },
      { name: "Chi. Barbecue Burger", price: "₹85" },
      { name: "Peri Peri Burger", price: "₹80" },
      { name: "Chi. Siz Burger", price: "₹80" },
      { name: "Teriyaki Burger", price: "₹85" },
      { name: "Chi. Nugget Burger", price: "₹80" },
    ],
  },
  {
    name: "Chicken Wraps",
    items: [
      { name: "Mexican Grill Wrap", price: "₹95" },
      { name: "Popcorn Chicken Wrap", price: "₹85" },
      { name: "Chi. Tikka Wrap", price: "₹100" },
      { name: "Barbecue Wrap", price: "₹95" },
      { name: "Chi. Tandoori Wrap", price: "₹90" },
      { name: "Chi. Finger Wrap", price: "₹95" },
    ],
  },
  {
    name: "Chicken Pizza",
    items: [
      { name: "Classic Pizza (7\")", price: "₹100" },
      { name: "Shawarma Pizza", price: "₹105" },
      { name: "Tikka Nawabi Pizza", price: "₹110" },
      { name: "Italian Pizza", price: "₹110" },
      { name: "Barbecue Pizza", price: "₹110" },
      { name: "Melting Pizza", price: "₹120" },
    ],
  },
  {
    name: "Veg Burger",
    items: [
      { name: "Veg. Burger", price: "₹40" },
      { name: "Masala Burger", price: "₹55" },
      { name: "Masala Mexican Burger", price: "₹60" },
      { name: "Paneer Tikka Burger", price: "₹70" },
      { name: "Mexican Paneer Tikka Burger", price: "₹85" },
    ],
  },
  {
    name: "Nuggets & Fries",
    items: [
      { name: "Chi. Nuggets", price: "₹70" },
      { name: "Chi. Finger", price: "₹70" },
      { name: "French Fries", price: "₹60" },
      { name: "Cheese French Fries", price: "₹80" },
      { name: "Peri Peri French Fries", price: "₹80" },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">What We Serve</span>
          <h2 className="font-display text-6xl sm:text-7xl text-gradient mt-2">OUR MENU</h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuData.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                i === activeCategory
                  ? "bg-primary text-primary-foreground glow-shadow"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 card-shadow">
              <h3 className="font-display text-3xl text-primary mb-6">{menuData[activeCategory].name}</h3>
              <div className="space-y-0">
                {menuData[activeCategory].items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <span className="font-body text-foreground">{item.name}</span>
                    <span className="font-body font-semibold text-primary">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
