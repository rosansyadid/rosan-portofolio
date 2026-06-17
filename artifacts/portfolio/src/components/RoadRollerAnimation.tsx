import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onClose: () => void;
}

export default function RoadRollerAnimation({ onClose }: Props) {
  const [stage, setStage] = useState<"warudo" | "fall" | "muda" | "wryyyy" | "done">("warudo");

  useEffect(() => {
    // Stage timeline
    const t1 = setTimeout(() => setStage("fall"),   800);
    const t2 = setTimeout(() => setStage("muda"),  2200);
    const t3 = setTimeout(() => setStage("wryyyy"),3200);
    const t4 = setTimeout(() => setStage("done"),  5000);
    const t5 = setTimeout(() => onClose(),         5500);
    return () => { [t1,t2,t3,t4,t5].forEach(clearTimeout); };
  }, [onClose]);

  // Shake the body when road roller hits
  useEffect(() => {
    if (stage === "muda") {
      document.body.classList.add("screen-shake");
      const t = setTimeout(() => document.body.classList.remove("screen-shake"), 700);
      return () => clearTimeout(t);
    }
  }, [stage]);

  const mudaPositions = [
    { top: "10%", left: "8%",   rotate: "-15deg", delay: 0 },
    { top: "12%", right: "10%", rotate: "10deg",  delay: 0.08 },
    { top: "30%", left: "3%",   rotate: "-8deg",  delay: 0.16 },
    { top: "35%", right: "5%",  rotate: "18deg",  delay: 0.04 },
    { top: "55%", left: "6%",   rotate: "-20deg", delay: 0.12 },
    { top: "60%", right: "8%",  rotate: "6deg",   delay: 0.2 },
    { top: "75%", left: "15%",  rotate: "-5deg",  delay: 0.06 },
    { top: "78%", right: "12%", rotate: "14deg",  delay: 0.18 },
    { top: "20%", left: "35%",  rotate: "8deg",   delay: 0.1 },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "rgba(0,0,0,0.92)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Speed lines background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "repeating-conic-gradient(rgba(255,200,0,0.15) 0deg, transparent 1deg, transparent 8deg)",
          backgroundPosition: "center center",
        }}
      />

      {/* Stage: ZA WARUDO */}
      <AnimatePresence>
        {(stage === "warudo") && (
          <motion.div
            key="zawarudo"
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.p
              className="text-yellow-400 font-['Share_Tech_Mono'] text-2xl tracking-[0.4em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              DIO says...
            </motion.p>
            <motion.h2
              className="font-['Anton'] text-7xl md:text-9xl text-yellow-400 tracking-wider drop-shadow-[0_0_30px_rgba(255,200,0,0.8)]"
              style={{ animation: "za-warudo-in 0.5s ease-out forwards" }}
            >
              ZA WARUDO!
            </motion.h2>
            <motion.p
              className="text-white/60 font-['Share_Tech_Mono'] text-lg mt-6 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              ✦ TIME HAS STOPPED ✦
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage: Road Roller falls */}
      <AnimatePresence>
        {(stage === "fall" || stage === "muda" || stage === "wryyyy") && (
          <motion.div
            key="roller"
            className="absolute pointer-events-none flex flex-col items-center"
            style={{ bottom: "18%", left: "50%", x: "-50%" }}
            initial={{ y: "-110vh", rotate: -5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, duration: 1.2 }}
          >
            {/* Road roller SVG — pure CSS/SVG, no images */}
            <svg width="340" height="160" viewBox="0 0 340 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Main body */}
              <rect x="20" y="30" width="300" height="90" rx="8" fill="#555" stroke="#222" strokeWidth="3"/>
              {/* Cab */}
              <rect x="220" y="10" width="90" height="50" rx="6" fill="#666" stroke="#222" strokeWidth="3"/>
              {/* Window */}
              <rect x="230" y="16" width="70" height="30" rx="4" fill="#88ccff" opacity="0.7" stroke="#222" strokeWidth="2"/>
              {/* Front roller */}
              <circle cx="65" cy="130" r="38" fill="#444" stroke="#222" strokeWidth="4"/>
              <circle cx="65" cy="130" r="22" fill="#333" stroke="#555" strokeWidth="2"/>
              <circle cx="65" cy="130" r="8" fill="#666"/>
              {/* Back roller */}
              <circle cx="265" cy="130" r="38" fill="#444" stroke="#222" strokeWidth="4"/>
              <circle cx="265" cy="130" r="22" fill="#333" stroke="#555" strokeWidth="2"/>
              <circle cx="265" cy="130" r="8" fill="#666"/>
              {/* Roller treads front */}
              {[0,45,90,135,180,225,270,315].map((angle, i) => (
                <line
                  key={i}
                  x1={65 + Math.cos(angle * Math.PI/180) * 22}
                  y1={130 + Math.sin(angle * Math.PI/180) * 22}
                  x2={65 + Math.cos(angle * Math.PI/180) * 36}
                  y2={130 + Math.sin(angle * Math.PI/180) * 36}
                  stroke="#555" strokeWidth="3"
                />
              ))}
              {/* Roller treads back */}
              {[0,45,90,135,180,225,270,315].map((angle, i) => (
                <line
                  key={i}
                  x1={265 + Math.cos(angle * Math.PI/180) * 22}
                  y1={130 + Math.sin(angle * Math.PI/180) * 22}
                  x2={265 + Math.cos(angle * Math.PI/180) * 36}
                  y2={130 + Math.sin(angle * Math.PI/180) * 36}
                  stroke="#555" strokeWidth="3"
                />
              ))}
              {/* "ROAD ROLLER DA!" text on body */}
              <text x="170" y="83" textAnchor="middle" fill="#FFD700" fontSize="18" fontWeight="bold" fontFamily="Anton, sans-serif" letterSpacing="2">ROAD ROLLER DA!</text>
              {/* Exhaust pipe */}
              <rect x="200" y="5" width="10" height="25" rx="3" fill="#444" stroke="#222" strokeWidth="2"/>
              <ellipse cx="205" cy="5" rx="6" ry="3" fill="#333"/>
            </svg>

            {/* Impact dust cloud on landing */}
            {stage !== "fall" && (
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 0.8, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-96 h-12 bg-gradient-to-t from-yellow-400/30 to-transparent rounded-full blur-xl" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage: MUDA burst */}
      <AnimatePresence>
        {(stage === "muda" || stage === "wryyyy") && (
          <>
            {mudaPositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute font-['Anton'] text-yellow-400 select-none pointer-events-none"
                style={{
                  ...pos,
                  fontSize: i % 3 === 0 ? "2.5rem" : i % 3 === 1 ? "1.8rem" : "1.4rem",
                  textShadow: "2px 2px 0 #000, 0 0 20px rgba(255,200,0,0.6)",
                }}
                initial={{ scale: 0, rotate: pos.rotate, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: pos.delay, type: "spring", stiffness: 300, damping: 15 }}
              >
                MUDA!
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Stage: WRYYYY */}
      <AnimatePresence>
        {stage === "wryyyy" && (
          <motion.div
            key="wryyyy"
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              className="font-['Anton'] text-center leading-none"
              style={{
                fontSize: "clamp(4rem, 14vw, 10rem)",
                color: "#FFD700",
                textShadow: "4px 4px 0 #000, 0 0 60px rgba(255,200,0,0.7), 0 0 120px rgba(255,100,0,0.4)",
                transform: "rotate(-3deg)",
                animation: "wryyyy-appear 0.5s ease-out forwards",
              }}
            >
              WRYYY!!!
            </motion.h1>
            <motion.p
              className="text-white/50 font-['Share_Tech_Mono'] text-base mt-6 tracking-[0.5em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              — DIO
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dismiss hint */}
      <p className="absolute bottom-8 text-white/30 font-['Share_Tech_Mono'] text-sm tracking-widest pointer-events-none">
        [ CLICK ANYWHERE TO DISMISS ]
      </p>
    </motion.div>
  );
}
