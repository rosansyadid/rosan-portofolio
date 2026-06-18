import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const orbConfig = { damping: 22, stiffness: 80, mass: 1.2 };

  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);
  const orbX = useSpring(cursorX, orbConfig);
  const orbY = useSpring(cursorY, orbConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let mouseX = -200;
    let mouseY = -200;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        cursorX.set(mouseX);
        cursorY.set(mouseY);
      });


      const target = e.target as HTMLElement;
      const hoverable = target.closest("a, button, [data-hover], input, textarea, [role='button']");
      setIsHovering(!!hoverable);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(frameRef.current);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* subtle pulsing red orb behind the dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full"
        style={{
          x: orbX,
          y: orbY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 64 : isClicking ? 28 : 48,
          height: isHovering ? 64 : isClicking ? 28 : 48,
          opacity: isVisible ? (isHovering ? 0.75 : 0.45) : 0,
          background: isHovering
            ? "radial-gradient(circle, rgba(239,68,68,0.28) 0%, rgba(239,68,68,0.08) 55%, transparent 85%)"
            : "radial-gradient(circle, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0.04) 55%, transparent 85%)",
        }}
        transition={{ duration: 0.22 }}
      />

      {/* main red cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "rgb(239,68,68)",
        }}
        animate={{
          width: isHovering ? 8 : isClicking ? 5 : 6,
          height: isHovering ? 8 : isClicking ? 5 : 6,
          opacity: isVisible ? (isHovering ? 1 : 0.95) : 0,
          boxShadow: isHovering
            ? "0 0 14px 4px rgba(239,68,68,0.6)"
            : "0 0 8px 2px rgba(239,68,68,0.3)",
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
