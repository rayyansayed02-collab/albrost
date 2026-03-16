import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">Visit Us</span>
          <h2 className="font-display text-6xl sm:text-7xl text-gradient mt-2">FIND US</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border card-shadow aspect-square md:aspect-auto"
          >
            <iframe
              title="Albrost location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8!2d72.8395!3d19.0385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9a1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sAlbrost+Fast+Food!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Address</h3>
                <p className="font-body text-muted-foreground">
                  Meraj Restaurant, Mohammed Eidu Manzil,<br />
                  Floor-Ground, Plot-74/76, Lady Jamshedji Road,<br />
                  Sonapur, Mahim, Mumbai,<br />
                  Maharashtra 400016, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Timings</h3>
                <p className="font-body text-muted-foreground">
                  Open Daily<br />
                  2:00 PM – 12:00 AM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Call Us</h3>
                <a href="tel:+918976638228" className="font-body text-primary hover:underline text-lg font-semibold">
                  +91 89766 38228
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[hsl(142,70%,40%)]/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-[hsl(142,70%,40%)]" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/918976638228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[hsl(142,70%,40%)] hover:underline font-semibold"
                >
                  Order on WhatsApp →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
