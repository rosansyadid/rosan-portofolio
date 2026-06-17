import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 mb-16"
          >
            <Mail size={20} />
            Say Hello
          </a>

          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://github.com/rosansyadid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
            >
              <FaGithub size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harosan-syadida/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
            >
              <FaLinkedin size={32} />
            </a>
            <a 
              href="https://instagram.com/sansyadid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
            >
              <FaInstagram size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
