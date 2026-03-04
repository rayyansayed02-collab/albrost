

## Plan: Add Online Ordering Cart System, Working Contact, and More Features

### 1. Cart-Based Online Ordering (Zomato-style)

**New files:**
- `src/context/CartContext.tsx` — React context for cart state (add, remove, update quantity, clear, total calculation)
- `src/components/CartDrawer.tsx` — Slide-out cart drawer (Sheet component) showing items, quantities, total, and a "Place Order via WhatsApp" button

**Modified files:**
- `src/components/MenuSection.tsx` — Add "+" button next to each menu item price. When clicked, adds item to cart with quantity controls (-, count, +) inline
- `src/components/Navbar.tsx` — Add a floating cart icon with item count badge that opens the CartDrawer
- `src/pages/Index.tsx` — Wrap with CartProvider

**Order flow:** User adds items from menu → views cart in drawer → clicks "Order on WhatsApp" → opens WhatsApp with pre-formatted order message to +918976638228 (item list + total). This avoids needing a backend.

### 2. Working Contact Number

- `src/components/ContactSection.tsx` — Replace "Available on Zomato & Justdial" with clickable phone link `tel:+918976638228` and WhatsApp link
- `src/components/HeroSection.tsx` — Add "Order Now" CTA button that opens WhatsApp
- `src/components/Navbar.tsx` — Add phone icon link in desktop nav info area

### 3. Additional Features

**Testimonials Section** (`src/components/TestimonialsSection.tsx`):
- Auto-scrolling customer reviews carousel with ratings and names

**Special Offers Banner** (`src/components/SpecialOffers.tsx`):
- Highlighted combo deals / discount banner between Hero and Menu sections with animated cards

**Back-to-Top Button** (`src/components/BackToTop.tsx`):
- Floating scroll-to-top button that appears on scroll

**Updated `src/pages/Index.tsx`** to include new sections in order: Navbar → Hero → SpecialOffers → Menu → About → Testimonials → Contact → Footer

### Technical Details

- Cart state managed via React Context + useReducer (no external state library needed)
- WhatsApp order link: `https://wa.me/918976638228?text={encoded order}`
- Phone link: `tel:+918976638228`
- Cart drawer uses existing Sheet component from shadcn/ui
- All new sections use existing framer-motion animation patterns
- No backend required — ordering is via WhatsApp message

