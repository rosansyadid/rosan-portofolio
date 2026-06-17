import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section && section instanceof HTMLElement) {
          if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-['Anton'] text-2xl tracking-wider text-foreground hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all">
          ♦ R/S
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-lg font-['DM_Sans'] font-semibold transition-colors group ${
                activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              {activeSection === link.href.substring(1) && (
                <span className="absolute left-1/2 bottom-[-8px] w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_8px_hsl(var(--primary))]" />
              )}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted hover:ring-2 ring-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted hover:ring-2 ring-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-['DM_Sans'] font-semibold transition-colors hover:text-primary ${
                  activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
