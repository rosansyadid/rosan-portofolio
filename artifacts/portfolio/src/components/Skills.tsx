import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiHtml5, SiCss, SiTailwindcss, SiJavascript, SiFlutter, SiLaravel, SiMysql, SiPhp, SiReact } from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    suit: "♠",
    rank: "A",
    red: false,
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    suit: "♣",
    rank: "K",
    red: false,
    skills: ["Node.js", "Express.js", "Laravel", "REST API", "Authentication", "RBAC", "JWT", "PHP"],
  },
  {
    title: "Database",
    suit: "♦",
    rank: "Q",
    red: true,
    skills: ["PostgreSQL", "MySQL", "Firebase Firestore"],
  },
  {
    title: "Tools & Testing",
    suit: "♥",
    rank: "J",
    red: true,
    skills: ["Git", "GitHub", "Postman", "Unit Testing", "Integration Testing"],
  },
  {
    title: "Cloud & DevOps",
    suit: "♠",
    rank: "10",
    red: false,
    skills: ["AWS", "Cloud Deployment", "CI/CD", "Infrastructure"],
  },
  {
    title: "Software Engineering",
    suit: "♣",
    rank: "9",
    red: false,
    skills: ["Clean Architecture", "SOLID", "OOP", "System Design", "Agile (Scrum)"],
  },
];

function CardCorner({ rank, suit, red }: { rank: string; suit: string; red: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-between leading-none ${red ? "text-red-500" : "text-foreground"}`}>
      <span className="font-['Anton'] text-sm">{rank}</span>
      <span className="text-base">{suit}</span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="skills" className="py-14 md:py-20 relative overflow-hidden bg-card/20">
      <div className="deco-number">02</div>

      <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-6xl">
        <motion.div className="flex items-center gap-4 mb-8" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          <div className="w-6 h-[1px] bg-primary" />
          <span className="section-label">♥ Skills — II</span>
        </motion.div>

        <div className="overflow-hidden mb-12">
          <motion.h2
            className="font-['Anton'] text-5xl md:text-7xl uppercase tracking-wide"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Proficiency
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative h-full jojo-panel overflow-hidden p-3 min-h-[280px] bg-card border-border">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_42%)]" />

                <div className="relative z-10 flex justify-between items-start mb-6">
                  <CardCorner rank={category.rank} suit={category.suit} red={category.red} />
                  <span className={`text-sm uppercase tracking-[0.28em] ${category.red ? "text-red-400" : "text-primary"}`}>{category.title}</span>
                  <div className="-mt-1 flex flex-col items-center justify-between leading-none text-foreground/70">
                    <span className="text-base">{category.suit}</span>
                    <span className="text-xs">CARD</span>
                  </div>
                </div>

                <div className="relative z-10 space-y-3 mb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">A playing-card inspired view of my technical strengths and tools.</p>
                </div>

                <div className="relative z-10 grid gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="inline-flex items-center px-3 py-2 rounded-full bg-background/80 text-xs font-semibold text-foreground border border-border/60 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
