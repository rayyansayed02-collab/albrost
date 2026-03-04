const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container mx-auto px-4 text-center">
      <span className="font-display text-2xl text-primary tracking-wider">ALBROST</span>
      <p className="font-body text-sm text-muted-foreground mt-2">
        © {new Date().getFullYear()} Albrost Fast Food, Mahim West. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
