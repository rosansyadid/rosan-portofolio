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
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Proficiency</h2>
            <div className="h-[1px] bg-border flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <skill.icon size={24} style={{ color: skill.color }} />
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    className="h-full bg-primary rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20" />
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
