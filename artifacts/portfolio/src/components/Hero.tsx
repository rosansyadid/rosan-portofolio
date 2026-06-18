import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MarqueeStrip from "./MarqueeStrip";

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
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
      <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Parallax background layer */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: bgY }}>
          <div className="absolute inset-0 halftone-bg opacity-20" />
          <div className="absolute inset-0 speed-lines opacity-25" />
          <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] rounded-full bg-primary/6 blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/4 blur-[140px]" />
          {/* Giant floating suit watermarks */}
          <div className="absolute -right-8 top-[2%] select-none leading-none" style={{ fontFamily: "serif", fontSize: "clamp(14rem, 32vw, 36rem)", color: "hsl(var(--primary) / 0.04)" }}>♠</div>
          <div className="absolute -left-10 bottom-[-8%] select-none leading-none" style={{ fontFamily: "serif", fontSize: "clamp(8rem, 18vw, 22rem)", color: "hsl(var(--primary) / 0.035)" }}>♥</div>
        </motion.div>

        <motion.div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-20 pt-16 pb-8" style={{ y: textY, opacity }}>

          {/* Label row */}
          <motion.div
            className="flex items-center gap-4 mb-5 md:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-8 h-[1px] bg-primary" />
            <span className="section-label">♠ Portfolio — Ace High ♥ 2026</span>
          </motion.div>

          {/* MASSIVE name */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-['Anton'] uppercase leading-[0.9] text-foreground"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", letterSpacing: "-0.01em" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              Muli'at Harosan
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 md:mb-12">
            <motion.h1
              className="font-['Anton'] uppercase leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", letterSpacing: "-0.01em" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            >
              <span className="gold-text">Syadida.</span>
            </motion.h1>
          </div>

          {/* Bottom row */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 md:gap-16 items-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div>
              <p className="font-['DM_Sans'] text-xl md:text-2xl text-muted-foreground mb-2">
                I am a <span className="text-foreground font-semibold">{displayText}</span>
                <span className="animate-pulse text-primary ml-0.5">|</span>
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Aspiring developer exploring modern technologies. I build clean, responsive, and meaningful digital solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  data-testid="link-view-work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-['Anton'] tracking-widest uppercase text-sm rounded-sm hover:shadow-[0_0_28px_hsl(var(--primary)/0.55)] hover:scale-[1.03] active:scale-95 transition-all"
                >
                  View My Work
                  <span className="text-xs">♠</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1W3Cb3EWl1ghaIgem3Upwe_VQQp1B-qYo/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-resume"
                  className="inline-flex items-center px-7 py-3.5 border border-border text-foreground font-semibold rounded-sm hover:border-primary/50 hover:shadow-[0_0_14px_hsl(var(--primary)/0.25)] hover:scale-[1.03] active:scale-95 transition-all text-sm"
                >
                  Resume / CV
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 right-8 md:right-12 flex flex-col items-center gap-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="section-label rotate-90 origin-center mb-4">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown size={20} strokeWidth={2} />
          </motion.div>
        </motion.div>
      </section>

      <MarqueeStrip
        items={["Flutter", "Laravel", "React", "HTML5", "CSS3", "JavaScript", "MySQL", "PHP", "Tailwind", "Firebase", "Wild Card", "Web Developer"]}
        className="bg-card/40"
      />
    </>
  );
}
