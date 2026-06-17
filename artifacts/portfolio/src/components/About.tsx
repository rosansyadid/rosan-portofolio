import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl manga-title text-foreground mb-4">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-lg text-muted-foreground font-['DM_Sans'] leading-relaxed mb-8">
                <p>
                  Hello! I'm <strong className="text-foreground font-bold">Rosansyadid</strong>. I build modern web and mobile applications focused on clean design, responsive experiences, and user-friendly interfaces.
                </p>
                <p>
                  Every project becomes an opportunity to improve my skills, explore new technologies, and create meaningful digital solutions. I am deeply passionate about the intersection of design and engineering.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative jojo-panel p-8 group">
                <div className="absolute top-3 right-3 font-['Share_Tech_Mono'] text-[10px] text-primary/40 tracking-widest pointer-events-none group-hover:text-primary/70 transition-colors">
                  ♦ MENACING ♦
                </div>
                
                <div className="mb-4">
                  <div className="font-['Share_Tech_Mono'] text-primary/60 text-xs uppercase mb-2 tracking-widest">
                    ♦ STAND ABILITY
                  </div>
                  <div className="flex items-center gap-3 text-primary">
                    <span className="text-xl drop-shadow-[0_0_8px_hsl(var(--primary))]">⚡</span>
                    <h3 className="text-3xl font-['Anton'] text-foreground tracking-wide">Fun Fact</h3>
                  </div>
                </div>
                <p className="text-foreground font-['DM_Sans'] text-lg leading-relaxed relative z-10">
                  "Once spent hours stuck on a coding error before realizing the solution was literally deleting a few files. Debugging truly builds character." 🍜
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
