import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

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

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="h-[1px] bg-border flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(var(--primary),0.1)] flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-secondary rounded-lg text-primary">
                    <ExternalLink size={24} />
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-2"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
