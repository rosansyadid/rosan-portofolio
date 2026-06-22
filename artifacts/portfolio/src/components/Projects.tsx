import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Schedule Generator",
    description: "Manually creating class timetables is complex and prone to errors. To solve this, I built a Flutter app utilizing Hive DB for offline local storage and integrated Google Gemini AI to analyze scheduling constraints, instantly generating 100% conflict-free weekly schedules with a single click.",
    tech: ["Flutter", "Google AI Studio", "Firebase"],
    github: "https://github.com/rosansyadid/Schedule-Generator",
    value: "A", suit: "♠", red: false,
  },
  {
    title: "Newsly",
    description: "Retrieving and displaying real-time news efficiently requires clean state coordination and reliable API handling. To solve this, I developed a Flutter application leveraging GetX for lightweight state management and navigation, integrating the http package to consume and parse real-time CNN news endpoints, resulting in a smooth, latency-free news portal with robust data formatting.",
    tech: ["Flutter", "GetX", "HTTP", "CNN API"],
    github: "https://github.com/rosansyadid/news_app_with_getx",
    value: "2", suit: "♥", red: true,
  },
  {
    title: "Ticket Scanner App",
    description: "Securing event entry and preventing fraudulent ticket check-ins requires fast, reliable hardware-to-cloud verification. To solve this, I developed a Flutter mobile application utilizing mobile_scanner for real-time, hardware-accelerated camera processing and Dio to execute secure HTTP post-validation handshakes against a Vercel-hosted ticketing backend, resulting in instantaneous, conflict-free ticket redemptions.",
    tech: ["Flutter", "Dio", "Mobile Scanner"],
    github: "https://github.com/rosansyadid/qr_scanner_app",
    value: "3", suit: "♦", red: true,
  },
  {
    title: "Invoice Website",
    description: "Coordinating client billing, transaction tracking, and administrative financial audits manually is prone to processing delays and unauthorized access. To solve this, I co-developed a multi-role enterprise invoice portal utilizing Laravel and Breeze Auth, implementing strict role-based access control (RBAC) to allow clients self-service invoice creation while giving admins centralized command over global payment statuses and user management, resulting in an audited, high-integrity financial workflow..",
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

function CardBack({ suit, value, red, rotateDir = 180 }: { suit: string; value: string; red: boolean; rotateDir?: number }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-40 pointer-events-none bg-card border border-primary/45 rounded-none"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: `rotateY(${rotateDir}deg)`,
      }}
    >
      <div className="absolute inset-0 card-back-pattern" />
      <div
        className="relative z-10 font-serif select-none"
        style={{ fontSize: "clamp(4rem, 10vw, 7rem)", color: "hsl(var(--primary) / 0.12)" }}
      >
        {suit}
      </div>
      <div className="absolute inset-3 border border-primary/12 rounded-sm pointer-events-none" />
      <div className="absolute top-3 left-4 z-10">
        <CardCorner value={value} suit={suit} red={red} />
      </div>
      <div className="absolute bottom-3 right-4 z-10 rotate-180">
        <CardCorner value={value} suit={suit} red={red} />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div ref={ref} style={{ perspective: "1200px" }} className="h-full min-h-[400px] md:min-h-[460px] w-full min-w-[85vw] md:min-w-0 shrink-0 snap-center">
      <motion.div
        className="relative h-full"
        style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
        initial={{ rotateY: 180, opacity: 0 }}
        animate={isInView ? { rotateY: 0, opacity: 1 } : { rotateY: 180, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.06 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* BACK face — card back pattern */}
        <CardBack suit={project.suit} value={project.value} red={project.red} rotateDir={180} />

        {/* FRONT face */}
        <div
          className="absolute inset-0 h-full"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.12s ease",
              height: "100%",
            }}
          >
            <div className="group relative rounded-none p-5 flex flex-col h-full overflow-hidden bg-card border border-primary/45">
              {/* Shine sweep */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/6 to-transparent -left-[40%] group-hover:left-[140%] transition-all duration-700 ease-in-out" />
              </div>

              {/* Card corners */}
              <div className="absolute top-3 left-4 z-10">
                <CardCorner value={project.value} suit={project.suit} red={project.red} />
              </div>
              <div className="absolute bottom-3 right-4 z-10 rotate-180">
                <CardCorner value={project.value} suit={project.suit} red={project.red} />
              </div>

              <div className="flex justify-end items-start mb-2 relative z-10 pt-2">
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
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary border border-primary/25 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const featuredRef = useRef<HTMLDivElement>(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-60px" });
  const [featured, ...rest] = projects;

  return (
    <section ref={ref} id="projects" className="py-8 md:py-12 relative overflow-hidden">
      <div className="deco-number">03</div>

      <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-6xl">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-6 h-[1px] bg-primary" />
          <span className="section-label">♦ Projects — III</span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h2
            className="font-['Anton'] text-4xl md:text-7xl uppercase tracking-wide"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Featured Work
          </motion.h2>
        </div>

        {/* FEATURED — Ace of Spades, flips from the left */}
        <div ref={featuredRef} style={{ perspective: "1600px" }} className="mt-6 mb-10 min-h-[300px] w-full">
          <motion.div
            className="relative h-full"
            style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
            initial={{ rotateY: -180, opacity: 0 }}
            animate={featuredInView ? { rotateY: 0, opacity: 1 } : { rotateY: -180, opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Featured BACK face */}
            <div
              className="absolute inset-0 flex items-center justify-center overflow-hidden bg-card border border-primary/45 rounded-none"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(-180deg)",
                opacity: 0.28,
              }}
            >
              <div className="absolute inset-0 card-back-pattern" />
              <div
                className="relative z-10 font-serif select-none"
                style={{ fontSize: "clamp(8rem, 18vw, 14rem)", color: "hsl(var(--primary) / 0.12)" }}
              >
                ♠
              </div>
              <div className="absolute inset-4 border border-primary/12" />
              <div className="absolute top-4 left-5 z-10">
                <CardCorner value="A" suit="♠" red={false} />
              </div>
              <div className="absolute bottom-4 right-5 z-10 rotate-180">
                <CardCorner value="A" suit="♠" red={false} />
              </div>
            </div>

            {/* Featured FRONT face */}
            <div
              className="rounded-none p-6 pb-16 md:p-8 group relative overflow-hidden bg-card border border-primary/45"
              style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
            >
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-white/4 to-transparent -left-[30%] group-hover:left-[130%] transition-all duration-1000 ease-in-out" />
              </div>

              <div className="absolute top-4 left-5 z-10">
                <CardCorner value="A" suit="♠" red={false} />
              </div>
              <div className="absolute bottom-4 right-5 z-10 rotate-180">
                <CardCorner value="A" suit="♠" red={false} />
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-5 md:gap-8 items-end pt-4">
                <div>
                  <div className="section-label mb-4">♠ Ace — Featured</div>
                  <h3 className="font-['Anton'] text-3xl md:text-5xl text-foreground mb-4 md:mb-5 tracking-wide group-hover:text-primary transition-colors duration-300">
                    {featured.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-5 md:mb-6">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-primary/10 text-primary border border-primary/25 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex mt-8 md:mt-0 md:justify-end items-end relative z-20">
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-border hover:border-primary/60 text-foreground hover:text-primary rounded-sm transition-all hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)] group/btn font-['DM_Sans'] font-semibold text-sm"
                  >
                    <FaGithub size={18} />
                    View on GitHub
                    <ArrowUpRight
                      size={14}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Remaining projects — horizontal scroll on mobile */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory md:grid md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {rest.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
