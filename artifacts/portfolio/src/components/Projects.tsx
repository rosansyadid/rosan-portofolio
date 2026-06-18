import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Schedule Generator",
    description: "A Flutter app using Hive DB for offline storage and Google Gemini AI to generate 100% conflict-free weekly schedules.",
    tech: ["Flutter", "Google AI Studio", "Firebase"],
    github: "https://github.com/rosansyadid/Schedule-Generator",
    value: "A", suit: "♠", red: false,
  },
  {
    title: "Newsly",
    description: "A real-time news portal using GetX for state management and the http package to consume CNN news endpoints.",
    tech: ["Flutter", "GetX", "HTTP", "CNN API"],
    github: "https://github.com/rosansyadid/Newsly",
    value: "2", suit: "♥", red: true,
  },
  {
    title: "Ticket Scanner App",
    description: "A mobile app for event entry using mobile_scanner for camera processing and Dio for Vercel-hosted backend validation.",
    tech: ["Flutter", "Dio", "Mobile Scanner"],
    github: "https://github.com/rosansyadid/qr_scanner_app",
    value: "3", suit: "♦", red: true,
  },
  {
    title: "Invoice Website",
    description: "A multi-role enterprise invoice portal with RBAC for client self-service and admin management.",
    tech: ["Laravel", "Breeze Auth", "MySQL"],
    github: "https://github.com/rosansyadid/invoice-finalproject",
    value: "4", suit: "♣", red: false,
  }
];

function CardCorner({ value, suit, red }: { value: string; suit: string; red: boolean }) {
  return (
    <div className={`flex flex-col items-center leading-tight ${red ? "text-primary" : "text-foreground"}`}>
      <span className="font-['Anton'] text-base leading-none">{value}</span>
      <span className="text-sm leading-none">{suit}</span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: "transform 0.12s ease" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative jojo-panel p-8 flex flex-col h-full overflow-hidden"
    >
      {/* Shine sweep */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/6 to-transparent -left-[40%] group-hover:left-[140%] transition-all duration-700 ease-in-out" />
      </div>

      {/* Card corner — top left */}
      <div className="absolute top-3 left-4 z-10">
        <CardCorner value={project.value} suit={project.suit} red={project.red} />
      </div>
      {/* Card corner — bottom right (rotated) */}
      <div className="absolute bottom-3 right-4 z-10 rotate-180">
        <CardCorner value={project.value} suit={project.suit} red={project.red} />
      </div>

      <div className="flex justify-end items-start mb-4 relative z-10 pt-7">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]"
        >
          <FaGithub size={22} />
        </a>
      </div>

      <h3 className="text-2xl font-['Anton'] tracking-wide mb-3 text-foreground relative z-10 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-muted-foreground font-['DM_Sans'] mb-8 flex-grow leading-relaxed relative z-10 text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {project.tech.map(tech => (
          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary border border-primary/25 text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [featured, ...rest] = projects;

  return (
    <section ref={ref} id="projects" className="py-32 md:py-48 relative overflow-hidden">
      <div className="deco-number">03</div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          <div className="w-6 h-[1px] bg-primary" />
          <span className="section-label">♦ Projects — III</span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <motion.h2
            className="font-['Anton'] text-5xl md:text-7xl uppercase tracking-wide"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Featured Work
          </motion.h2>
        </div>

        {/* FEATURED — Ace of Spades */}
        <motion.div
          className="jojo-panel p-8 md:p-12 mb-8 group relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-white/4 to-transparent -left-[30%] group-hover:left-[130%] transition-all duration-1000 ease-in-out" />
          </div>

          {/* Ace of Spades corner indices */}
          <div className="absolute top-4 left-5 z-10">
            <CardCorner value="A" suit="♠" red={false} />
          </div>
          <div className="absolute bottom-4 right-5 z-10 rotate-180">
            <CardCorner value="A" suit="♠" red={false} />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-end pt-8">
            <div>
              <div className="section-label mb-4">♠ Ace — Featured</div>
              <h3 className="font-['Anton'] text-4xl md:text-5xl text-foreground mb-5 tracking-wide group-hover:text-primary transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-primary/10 text-primary border border-primary/25 text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex md:justify-end items-end">
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 border border-border hover:border-primary/60 text-foreground hover:text-primary rounded-sm transition-all hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)] group/btn font-['DM_Sans'] font-semibold text-sm"
              >
                <FaGithub size={18} />
                View on GitHub
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Remaining projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
