import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
        {(index + 1).toString().padStart(2, '0')}
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
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl manga-title text-foreground mb-4">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
