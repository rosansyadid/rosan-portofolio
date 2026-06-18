import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const socials = [
    { icon: FaGithub,    label: "GitHub",    href: "https://github.com/rosansyadid" },
    { icon: FaLinkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/harosan-syadida/" },
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/sansyadid" },
  ];

  return (
    <section ref={ref} id="contact" className="py-16 md:py-20 relative overflow-hidden bg-card/20">
      <div className="deco-number">04</div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          <div className="w-6 h-[1px] bg-primary" />
          <span className="section-label">♣ Contact — IV</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <div className="overflow-hidden mb-1">
              <motion.h2
                className="font-['Anton'] text-5xl md:text-7xl uppercase tracking-wide"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Let's
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                className="font-['Anton'] text-5xl md:text-7xl uppercase tracking-wide"
                style={{ WebkitTextStroke: "1px hsl(var(--primary) / 0.7)", color: "transparent" }}
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Connect
              </motion.h2>
            </div>

            <motion.p
              className="text-muted-foreground leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll get back to you!
            </motion.p>

            <motion.a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-['Anton'] tracking-widest uppercase text-sm rounded hover:shadow-[0_0_32px_hsl(var(--primary)/0.55)] hover:scale-[1.03] active:scale-95 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Say Hello
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Right: social links as large items */}
          <motion.div
            className="md:mt-24 space-y-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 border-b border-border/40 hover:border-primary/40 group transition-all hover:pl-7"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <social.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-['DM_Sans'] font-semibold text-foreground group-hover:text-primary transition-colors">{social.label}</span>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
