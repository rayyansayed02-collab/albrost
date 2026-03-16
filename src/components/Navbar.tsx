import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Clock, ShoppingBag, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const navItems = ["Home", "Menu", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <img src="/logo.png" alt="Albrost" className="h-10 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+918976638228" className="hidden md:flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-3 h-3" /> +91 89766 38228
            </a>
            <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-primary" /> 2 PM – 12 AM</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary" /> Mahim West</span>
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="relative w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:brightness-110 transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left font-display text-2xl text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <a href="tel:+918976638228" className="flex items-center gap-2 text-primary font-body">
                  <Phone className="w-4 h-4" /> +91 89766 38228
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
};

export default Navbar;
