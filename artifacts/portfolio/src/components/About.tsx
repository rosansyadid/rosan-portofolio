import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

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
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-[1px] bg-border flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <strong className="text-foreground font-medium">Rosansyadid</strong>. I build modern web and mobile applications focused on clean design, responsive experiences, and user-friendly interfaces.
              </p>
              <p>
                Every project becomes an opportunity to improve my skills, explore new technologies, and create meaningful digital solutions. I am deeply passionate about the intersection of design and engineering.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative bg-card border border-border p-8 rounded-xl shadow-xl">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Terminal size={24} />
                  <h3 className="text-xl font-bold text-foreground">Fun Fact</h3>
                </div>
                <p className="text-muted-foreground italic">
                  "Once spent hours stuck on a coding error before realizing the solution was literally deleting a few files. Debugging truly builds character."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
