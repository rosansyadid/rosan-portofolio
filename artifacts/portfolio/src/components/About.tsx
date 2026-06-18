import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Helper: staggered word reveal
function RevealText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.06 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-32 md:py-48 relative overflow-hidden">
      {/* Large deco number */}
      <div className="deco-number select-none pointer-events-none">01</div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-6 h-[1px] bg-primary" />
          <span className="section-label">About Me — 01</span>
        </motion.div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="font-['Anton'] text-5xl md:text-7xl uppercase tracking-wide text-foreground"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                The Dev
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="font-['Anton'] text-5xl md:text-7xl uppercase tracking-wide"
                style={{ WebkitTextStroke: "1px hsl(var(--primary) / 0.6)", color: "transparent" }}
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Behind It
              </motion.h2>
            </div>

            <div className="gold-rule my-8" />

            <motion.div
              className="space-y-5 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p>
                Hello! I'm <strong className="text-foreground font-semibold">Rosansyadid</strong>. I build modern web and mobile applications focused on clean design, responsive experiences, and user-friendly interfaces.
              </p>
              <p>
                Every project becomes an opportunity to improve my skills, explore new technologies, and create meaningful digital solutions. I am deeply passionate about the intersection of design and engineering.
              </p>
            </motion.div>
          </div>

          {/* Right — Fun Fact card + stats */}
          <motion.div
            className="space-y-6 md:mt-20"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Fun fact card */}
            <div className="jojo-panel p-8 relative group">
              <div className="absolute top-3 right-3 section-label text-[10px] opacity-40 group-hover:opacity-80 transition-opacity">
                ♠ WILD CARD ♣
              </div>
              <div className="section-label mb-3">♥ Card Ability</div>
              <h3 className="font-['Anton'] text-3xl text-foreground mb-4 tracking-wide">Fun Fact</h3>
              <p className="text-foreground/80 leading-relaxed">
                "Once spent hours stuck on a coding error before realizing the solution was literally deleting a few files. Debugging truly builds character."
              </p>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "4", label: "Projects Built" },
                { number: "9", label: "Technologies" },
                { number: "∞", label: "Passion" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="jojo-panel p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <p className="font-['Anton'] text-3xl md:text-4xl text-primary mb-1">{stat.number}</p>
                  <p className="section-label text-[10px] leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
