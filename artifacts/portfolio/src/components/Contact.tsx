import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-primary/50 text-sm tracking-[0.5em] mb-4">◈ ◈ ◈</div>
          <p className="font-mono text-xl text-primary mb-2 uppercase font-bold tracking-widest">What's Next?</p>
          <h2 className="text-5xl md:text-7xl font-['Rajdhani'] font-bold tracking-tight mb-8 text-foreground">Get In Touch</h2>
          <p className="text-xl font-sans text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-lg font-semibold font-['Rajdhani'] rounded-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-[1.03] transition-all active:scale-95 mb-16"
          >
            <Mail size={24} />
            Say Hello
          </a>

          <div className="flex justify-center items-center gap-6">
            <a href="https://github.com/rosansyadid" target="_blank" rel="noopener noreferrer" className="card-panel p-4 rounded-xl text-foreground hover:border-primary/50 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] hover:-translate-y-1 transition-all duration-200 block">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/harosan-syadida/" target="_blank" rel="noopener noreferrer" className="card-panel p-4 rounded-xl text-foreground hover:border-primary/50 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] hover:-translate-y-1 transition-all duration-200 block">
              <FaLinkedin size={28} />
            </a>
            <a href="https://instagram.com/sansyadid" target="_blank" rel="noopener noreferrer" className="card-panel p-4 rounded-xl text-foreground hover:border-primary/50 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] hover:-translate-y-1 transition-all duration-200 block">
              <FaInstagram size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
