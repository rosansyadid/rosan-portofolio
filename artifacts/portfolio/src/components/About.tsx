import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Scroll Header */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-1 w-16 bg-foreground rounded-full" />
            <div className="w-4 h-4 bg-primary rotate-45 mx-4 border-2 border-foreground" />
            <h2 className="text-4xl md:text-5xl font-['Bangers'] tracking-wider text-center mx-4">About Me</h2>
            <div className="w-4 h-4 bg-primary rotate-45 mx-4 border-2 border-foreground" />
            <div className="h-1 w-16 bg-foreground rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="cartoon-box bg-background p-8 space-y-6 text-lg text-muted-foreground font-sans font-medium leading-relaxed mb-8">
                <p>
                  Hello! I'm <strong className="text-foreground font-bold">Rosansyadid</strong>. I build modern web and mobile applications focused on clean design, responsive experiences, and user-friendly interfaces.
                </p>
                <p>
                  Every project becomes an opportunity to improve my skills, explore new technologies, and create meaningful digital solutions. I am deeply passionate about the intersection of design and engineering.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="cartoon-box bg-secondary p-4 text-center">
                  <div className="font-['Bangers'] text-2xl text-secondary-foreground">4</div>
                  <div className="text-xs font-bold text-secondary-foreground/80 mt-1">Projects Built</div>
                </div>
                <div className="cartoon-box bg-primary p-4 text-center">
                  <div className="font-['Bangers'] text-2xl text-primary-foreground">9</div>
                  <div className="text-xs font-bold text-primary-foreground/80 mt-1">Technologies</div>
                </div>
                <div className="cartoon-box bg-accent p-4 text-center">
                  <div className="font-['Bangers'] text-2xl text-accent-foreground">100%</div>
                  <div className="text-xs font-bold text-accent-foreground/80 mt-1">Passion</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-primary/15 border-[4px] border-primary p-8 rounded-xl shadow-[8px_8px_0px_var(--color-primary)] rotate-2">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <span className="text-3xl">☯</span>
                  <h3 className="text-2xl font-['Bangers'] text-foreground tracking-wide">Fun Fact</h3>
                </div>
                <p className="text-foreground font-sans font-semibold italic text-lg leading-relaxed">
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
