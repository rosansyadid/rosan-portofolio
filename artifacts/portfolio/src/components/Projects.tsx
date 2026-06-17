import { motion } from "framer-motion";
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
          <div className="flex items-center justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Bangers'] tracking-wider text-center border-b-4 border-foreground pb-2 px-8 inline-block">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card cartoon-box-lg p-8 hover:-translate-y-2 hover:translate-x-[-2px] hover:shadow-[8px_8px_0px_var(--color-foreground)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-primary rounded-full border-2 border-foreground shadow-[2px_2px_0px_var(--color-foreground)] text-2xl flex items-center justify-center w-12 h-12">
                    📜
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors p-2"
                  >
                    <FaGithub size={28} />
                  </a>
                </div>
                
                <h3 className="text-3xl font-['Bangers'] tracking-wide mb-4 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground font-sans font-medium mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-4 py-1 bg-secondary text-secondary-foreground text-sm font-bold font-sans rounded-full border-2 border-foreground/30"
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
