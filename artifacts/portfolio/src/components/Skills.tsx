import { motion } from "framer-motion";
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
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl manga-title text-foreground mb-4">Skills & Proficiency</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="jojo-panel p-5"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <skill.icon size={24} style={{ color: skill.color }} />
                    <span className="font-['DM_Sans'] font-bold text-lg text-foreground">{skill.name}</span>
                  </div>
                  <span className="font-['Share_Tech_Mono'] text-primary font-bold text-right">{skill.percentage}%</span>
                </div>
                {/* Progress bar */}
                <div className="h-2.5 w-full bg-muted border border-border/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_hsl(var(--primary))]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
