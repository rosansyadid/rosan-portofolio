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
      
      {/* Background Anime Aura Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-secondary/15 blur-[100px] mix-blend-screen" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-50 z-0 pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: 'linear-gradient(hsl(var(--primary)/0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.04) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          {/* Flame Spark Dots */}
          <div className="absolute -top-10 -left-10 w-2 h-2 rounded-full bg-primary blur-[1px] opacity-60 animate-[flame-flicker_2s_infinite_ease-in-out]" />
          <div className="absolute -top-5 right-10 w-2.5 h-2.5 rounded-full bg-primary blur-[1px] opacity-50 animate-[flame-flicker_3s_infinite_ease-in-out_0.5s]" />
          <div className="absolute top-1/4 -right-16 w-1.5 h-1.5 rounded-full bg-primary blur-[1px] opacity-70 animate-[flame-flicker_2.5s_infinite_ease-in-out_1s]" />
          <div className="absolute bottom-10 -left-16 w-2 h-2 rounded-full bg-primary blur-[1px] opacity-50 animate-[flame-flicker_2.2s_infinite_ease-in-out_0.2s]" />
          <div className="absolute -bottom-8 left-10 w-1.5 h-1.5 rounded-full bg-primary blur-[1px] opacity-40 animate-[flame-flicker_3s_infinite_ease-in-out_1.5s]" />
          <div className="absolute -bottom-5 -right-5 w-2 h-2 rounded-full bg-primary blur-[1px] opacity-60 animate-[flame-flicker_2.8s_infinite_ease-in-out_0.8s]" />

          <p className="font-mono text-xl text-primary mb-4 tracking-widest uppercase font-bold">Hi, my name is</p>
          <h1 className="font-['Rajdhani'] font-bold text-6xl md:text-8xl tracking-tight mb-6 text-foreground drop-shadow-sm">
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
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition hover:bg-primary/80 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:scale-[1.03] active:scale-95"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1W3Cb3EWl1ghaIgem3Upwe_VQQp1B-qYo/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 hover:shadow-[0_0_12px_hsl(var(--primary)/0.2)] hover:scale-[1.03] active:scale-95 transition-all"
            >
              Resume / CV
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
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
