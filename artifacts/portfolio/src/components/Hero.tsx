import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      {/* Background Particles placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary mb-4 tracking-wider uppercase text-sm md:text-base">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Muli'at Harosan Syadida.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8 h-20 md:h-24">
            I am a <span className="text-foreground">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
            Aspiring developer exploring modern technologies. I build clean, responsive, and meaningful digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
            <a 
              href="https://drive.google.com/file/d/1W3Cb3EWl1ghaIgem3Upwe_VQQp1B-qYo/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
            >
              Resume / CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
