import { motion } from "framer-motion";
import { PartyPopper, Cake, Users, MessageCircle } from "lucide-react";

const events = [
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Make your birthday special with our delicious fast food platters, customized combos, and bulk ordering.",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Office parties, team lunches, or meetings — we deliver fresh food in bulk with on-time service.",
  },
  {
    icon: PartyPopper,
    title: "Private Gatherings",
    description: "House parties, kitty parties, or get-togethers — order large quantities at special prices.",
  },
];

const EventBooking = () => {
  const whatsappLink = `https://wa.me/918976638228?text=${encodeURIComponent(
    "Hi Albrost! I'd like to place a bulk/event order. Here are the details:\n\nEvent Type: \nDate: \nNumber of People: \nItems Required: \n"
  )}`;

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">Catering & Events</span>
          <h2 className="font-display text-6xl sm:text-7xl text-gradient mt-2">BOOK FOR EVENTS</h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Planning a birthday, party, or corporate event? We offer bulk orders and special event menus at the best prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-background p-8 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <event.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{event.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-body font-semibold px-8 py-4 rounded-full transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Book via WhatsApp
          </a>
          <a
            href="tel:+918976638228"
            className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold px-8 py-4 rounded-full transition-colors text-lg"
          >
            Call +91 89766 38228
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventBooking;
