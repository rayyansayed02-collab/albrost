import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

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
    name: "Sandwich",
    items: [
      { name: "Chicken melting Sandwich(7\")", price: "₹130" },
      { name: "Chicken bbq melting Sandwich", price: "₹105" },
      { name: "Chicken tikka melting Sandwich", price: "₹110" },
      { name: "Chicken grilled Sandwich", price: "₹110" },
      { name: "Chicken tandoori Sandwich", price: "₹110" },
      { name: "Chicken showarma Sandwich", price: "₹120" },
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

const parsePrice = (p: string) => parseInt(p.replace(/[^\d]/g, ""), 10);

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { items, addItem, updateQuantity } = useCart();

  const getQty = (name: string) => items.find((i) => i.name === name)?.quantity || 0;

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
                {menuData[activeCategory].items.map((item, i) => {
                  const qty = getQty(item.name);
                  const price = parsePrice(item.price);
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 gap-3"
                    >
                      <span className="font-body text-foreground flex-1">{item.name}</span>
                      <span className="font-body font-semibold text-primary shrink-0">{item.price}</span>
                      {qty === 0 ? (
                        <button
                          onClick={() => addItem(item.name, price)}
                          className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:brightness-110 transition-all shrink-0"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      ) : (
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => updateQuantity(item.name, qty - 1)}
                            className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-body font-semibold text-primary text-sm">{qty}</span>
                          <button
                            onClick={() => updateQuantity(item.name, qty + 1)}
                            className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
