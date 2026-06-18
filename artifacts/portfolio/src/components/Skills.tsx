import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiHtml5, SiCss, SiTailwindcss, SiJavascript, SiFlutter, SiLaravel, SiMysql, SiPhp, SiReact } from "react-icons/si";

const skills = [
  { name: "HTML5", percentage: 95, icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", percentage: 90, icon: SiCss, color: "#1572B6" },
  { name: "Tailwind", percentage: 90, icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", percentage: 85, icon: SiJavascript, color: "#F7DF1E" },
  { name: "Flutter", percentage: 80, icon: SiFlutter, color: "#02569B" },
  { name: "Laravel", percentage: 80, icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", percentage: 75, icon: SiMysql, color: "#4479A1" },
  { name: "PHP", percentage: 75, icon: SiPhp, color: "#777BB4" },
  { name: "React", percentage: 65, icon: SiReact, color: "#61DAFB" },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="skills" className="py-32 md:py-48 relative overflow-hidden bg-card/20">
      <div className="deco-number">02</div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          <div className="w-6 h-[1px] bg-primary" />
          <span className="section-label">♥ Skills — II</span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <motion.h2
            className="font-['Anton'] text-5xl md:text-7xl uppercase tracking-wide"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Proficiency
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <skill.icon size={20} style={{ color: skill.color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="font-['DM_Sans'] font-semibold text-foreground">{skill.name}</span>
                </div>
                <span className="font-['Share_Tech_Mono'] text-primary text-sm">{skill.percentage}%</span>
              </div>
              <div className="h-[3px] w-full bg-border/40 rounded-full overflow-visible relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.percentage}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.07, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.8)] ring-2 ring-background" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
