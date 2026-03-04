import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

const CartDrawer = ({ open, onOpenChange }: Props) => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

  const handleWhatsAppOrder = () => {
    const itemLines = items.map((i) => `• ${i.name} x${i.quantity} — ₹${i.price * i.quantity}`).join("\n");
    const msg = `🍔 *New Order from Albrost Website*\n\n${itemLines}\n\n*Total: ₹${totalPrice}*\n\nPlease confirm my order!`;
    window.open(`https://wa.me/918976638228?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col bg-card border-border w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-3xl text-primary flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" /> Your Order
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="w-16 h-16 opacity-30" />
            <p className="font-body text-lg">Your cart is empty</p>
            <p className="font-body text-sm">Add items from the menu to get started</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-1 py-4">
              {items.map((item) => (
                <div key={item.name} className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-foreground truncate">{item.name}</p>
                    <p className="text-sm text-primary font-semibold">₹{item.price * item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-7 text-center font-body font-semibold text-foreground text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.name)} className="text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <SheetFooter className="flex-col gap-3 border-t border-border pt-4">
              <div className="flex justify-between items-center w-full">
                <span className="font-body text-muted-foreground">Total</span>
                <span className="font-display text-3xl text-primary">₹{totalPrice}</span>
              </div>
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full h-12 font-body font-semibold text-sm tracking-wide uppercase bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white glow-shadow gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Order on WhatsApp
              </Button>
              <Button variant="ghost" onClick={clearCart} className="w-full text-muted-foreground text-xs">
                Clear Cart
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
