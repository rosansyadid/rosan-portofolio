import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import RoadRollerAnimation from "./RoadRollerAnimation";

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
  const [showRoller, setShowRoller] = useState(false);

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
    <>
      <AnimatePresence>
        {showRoller && <RoadRollerAnimation onClose={() => setShowRoller(false)} />}
      </AnimatePresence>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Halftone dot background */}
        <div className="absolute inset-0 halftone-bg opacity-40 pointer-events-none z-0" />

        {/* Gold aura orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full bg-primary/15 blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[35vw] h-[35vw] rounded-full bg-secondary/12 blur-[120px]" />
        </div>

        {/* Speed lines */}
        <div className="absolute inset-0 speed-lines opacity-20 pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-['Share_Tech_Mono'] text-sm text-primary mb-4 tracking-[0.4em] uppercase">
              ✦ Stand User Portfolio ✦
            </p>
            <h1 className="font-['Anton'] text-6xl md:text-8xl lg:text-9xl tracking-wide mb-6 text-foreground drop-shadow-sm">
              Muli'at Harosan Syadida.
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-8 h-20 md:h-24">
              I am a <span className="text-foreground">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
              Aspiring developer exploring modern technologies. I build clean, responsive, and meaningful digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="#projects"
                data-testid="link-view-work"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded font-['Anton'] text-xl tracking-wider hover:shadow-[0_0_24px_hsl(var(--primary)/0.6)] hover:scale-[1.04] active:scale-95 transition-all"
              >
                VIEW MY WORK
              </a>
              <a
                href="https://drive.google.com/file/d/1W3Cb3EWl1ghaIgem3Upwe_VQQp1B-qYo/view"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-resume"
                className="px-8 py-4 bg-card border-2 border-border text-foreground font-semibold rounded hover:border-primary/60 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] hover:scale-[1.04] active:scale-95 transition-all"
              >
                Resume / CV
              </a>
            </div>

            {/* Road Roller Easter Egg Button */}
            <motion.button
              onClick={() => setShowRoller(true)}
              data-testid="button-road-roller"
              className="font-['Share_Tech_Mono'] text-xs text-primary/50 hover:text-primary border border-primary/20 hover:border-primary/60 px-4 py-2 rounded tracking-[0.3em] uppercase transition-all hover:shadow-[0_0_10px_hsl(var(--primary)/0.3)] hover:bg-primary/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              [ ROAD ROLLER DA! ]
            </motion.button>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} strokeWidth={2.5} />
        </motion.a>
      </section>
    </>
  );
}
