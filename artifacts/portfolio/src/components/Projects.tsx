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
  },
  {
    title: "Newsly",
    description: "A real-time news portal using GetX for state management and the http package to consume CNN news endpoints.",
    tech: ["Flutter", "GetX", "HTTP", "CNN API"],
    github: "https://github.com/rosansyadid/Newsly",
  },
  {
    title: "Ticket Scanner App",
    description: "A mobile app for event entry using mobile_scanner for camera processing and Dio for Vercel-hosted backend validation.",
    tech: ["Flutter", "Dio", "Mobile Scanner"],
    github: "https://github.com/rosansyadid/qr_scanner_app",
  },
  {
    title: "Invoice Website",
    description: "A multi-role enterprise invoice portal with RBAC for client self-service and admin management.",
    tech: ["Laravel", "Breeze Auth", "MySQL"],
    github: "https://github.com/rosansyadid/invoice-finalproject",
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12;
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
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: 'transform 0.1s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative jojo-panel p-8 flex flex-col h-full overflow-hidden"
    >
      {/* Shine Line */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/8 to-transparent -left-[40%] group-hover:left-[140%] transition-all duration-700 ease-in-out" />
      </div>

      {/* Project Number Badge */}
      <div className="absolute top-6 right-6 font-['Share_Tech_Mono'] text-primary/40 text-xs font-bold">
        {(index + 2).toString().padStart(2, '0')}
      </div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
          ♦
        </div>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)] z-10 relative mr-8"
        >
          <FaGithub size={24} />
        </a>
      </div>
      
      <h3 className="text-2xl font-['Anton'] tracking-wide mb-4 text-foreground relative z-10">{project.title}</h3>
      <p className="text-muted-foreground font-['DM_Sans'] mb-8 flex-grow leading-relaxed relative z-10">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {project.tech.map(tech => (
          <span 
            key={tech} 
            className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-xs font-medium rounded-full"
          >
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
          <span className="section-label">Projects — 03</span>
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

        {/* FEATURED project — full width, large */}
        <motion.div
          className="jojo-panel p-8 md:p-12 mb-8 group relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Shine sweep */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-white/5 to-transparent -left-[30%] group-hover:left-[130%] transition-all duration-1000 ease-in-out" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <div className="section-label mb-4">♦ Featured — 01</div>
              <h3 className="font-['Anton'] text-4xl md:text-5xl text-foreground mb-5 tracking-wide group-hover:text-primary transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-xs font-medium rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex md:justify-end items-end">
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 border border-border hover:border-primary/60 text-foreground hover:text-primary rounded transition-all hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)] group/btn font-['DM_Sans'] font-semibold text-sm"
              >
                <FaGithub size={18} />
                View on GitHub
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Remaining projects — 3 column grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
