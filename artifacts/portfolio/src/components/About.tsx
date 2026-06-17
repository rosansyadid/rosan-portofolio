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
            <h2 className="text-4xl md:text-5xl font-['Rajdhani'] font-bold tracking-tight mb-4">About Me</h2>
            <div className="anime-divider"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                <p>
                  Hello! I'm <strong className="text-foreground font-bold">Rosansyadid</strong>. I build modern web and mobile applications focused on clean design, responsive experiences, and user-friendly interfaces.
                </p>
                <p>
                  Every project becomes an opportunity to improve my skills, explore new technologies, and create meaningful digital solutions. I am deeply passionate about the intersection of design and engineering.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative card-panel-glow p-8">
                {/* top-left corner */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/60" />
                {/* bottom-right corner */}
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary/60" />
                
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <span className="text-xl">⚡</span>
                  <h3 className="text-2xl font-['Rajdhani'] font-bold text-foreground tracking-wide">Fun Fact</h3>
                </div>
                <p className="text-foreground font-sans italic text-lg leading-relaxed relative z-10">
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
