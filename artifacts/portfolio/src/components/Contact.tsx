import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-primary text-xl font-bold tracking-widest mb-4">✦ ✦ ✦</div>
          <p className="font-mono text-2xl text-primary mb-2 uppercase font-bold">What's Next?</p>
          <h2 className="text-5xl md:text-7xl font-['Bangers'] tracking-wider mb-8 text-foreground drop-shadow-sm">Get In Touch</h2>
          <p className="text-xl font-sans font-medium text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <MagneticButton 
            as="a"
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-xl border-[3px] border-foreground shadow-[6px_6px_0px_var(--color-foreground)] hover:shadow-[3px_3px_0px_var(--color-foreground)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all mb-16 font-['Bangers'] text-2xl tracking-wide"
          >
            <Mail size={24} strokeWidth={3} />
            Say Hello
          </MagneticButton>

          <div className="flex justify-center items-center gap-6">
            <MagneticButton as="a" strength={0.4} href="https://github.com/rosansyadid" target="_blank" rel="noopener noreferrer" className="p-4 bg-card cartoon-box text-foreground hover:text-primary transition-colors hover:-translate-y-2 transform duration-200 block">
              <FaGithub size={32} />
            </MagneticButton>
            <MagneticButton as="a" strength={0.4} href="https://www.linkedin.com/in/harosan-syadida/" target="_blank" rel="noopener noreferrer" className="p-4 bg-card cartoon-box text-foreground hover:text-secondary transition-colors hover:-translate-y-2 transform duration-200 block">
              <FaLinkedin size={32} />
            </MagneticButton>
            <MagneticButton as="a" strength={0.4} href="https://instagram.com/sansyadid" target="_blank" rel="noopener noreferrer" className="p-4 bg-card cartoon-box text-foreground hover:text-accent transition-colors hover:-translate-y-2 transform duration-200 block">
              <FaInstagram size={32} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
