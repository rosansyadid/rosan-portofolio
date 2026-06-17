import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

const titles = [
  "Web Developer",
  "Mobile Developer",
  "Flutter Enthusiast",
  "UI/UX Focused"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentTitle) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText !== "") {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Bamboo Decorations */}
      <div className="absolute inset-y-0 left-0 w-8 md:w-16 flex flex-col justify-between opacity-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={`bamboo-l-${i}`} className="w-full h-32 bg-secondary border-r-4 border-b-4 border-foreground/50 rounded-br-lg" />
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 w-8 md:w-16 flex flex-col justify-between opacity-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={`bamboo-r-${i}`} className="w-full h-32 bg-secondary border-l-4 border-b-4 border-foreground/50 rounded-bl-lg" />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          {/* Floating Stars */}
          <motion.svg className="absolute -top-12 -left-12 w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor" animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></motion.svg>
          <motion.svg className="absolute top-10 -right-16 w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor" animate={{ y: [0, 10, 0], rotate: [0, -15, 15, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }}><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></motion.svg>
          <motion.svg className="absolute -bottom-8 -left-8 w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor" animate={{ y: [0, -8, 0], rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></motion.svg>

          <p className="font-mono text-xl text-primary mb-4 tracking-widest uppercase font-bold">Hi, my name is</p>
          <h1 className="font-['Bangers'] text-6xl md:text-8xl lg:text-9xl tracking-wide mb-6 text-foreground drop-shadow-sm">
            Muli'at Harosan Syadida.
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-muted-foreground mb-8 h-20 md:h-24">
            I am a <span className="text-foreground">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 font-sans font-medium">
            Aspiring developer exploring modern technologies. I build clean, responsive, and meaningful digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton 
              as="a" 
              href="#projects" 
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl border-[3px] border-foreground shadow-[4px_4px_0px_var(--color-foreground)] hover:shadow-[2px_2px_0px_var(--color-foreground)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-['Bangers'] text-xl tracking-wider"
            >
              View My Work
            </MagneticButton>
            <MagneticButton 
              as="a"
              href="https://drive.google.com/file/d/1W3Cb3EWl1ghaIgem3Upwe_VQQp1B-qYo/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl border-[3px] border-foreground shadow-[4px_4px_0px_var(--color-foreground)] hover:shadow-[2px_2px_0px_var(--color-foreground)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-['Bangers'] text-xl tracking-wider"
            >
              Resume / CV
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-['Bangers'] text-sm tracking-widest text-muted-foreground">★ SCROLL DOWN ★</span>
        <motion.a
          href="#about"
          className="text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} strokeWidth={3} />
        </motion.a>
      </div>
    </section>
  );
}
