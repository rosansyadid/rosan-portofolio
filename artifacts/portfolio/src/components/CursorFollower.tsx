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
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-screen"
        style={{
          x: orbX,
          y: orbY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 80 : isClicking ? 30 : 48,
          height: isHovering ? 80 : isClicking ? 30 : 48,
          opacity: isVisible ? 1 : 0,
          background: isHovering
            ? "radial-gradient(circle, rgba(251,146,60,0.35) 0%, rgba(251,146,60,0.08) 60%, transparent 80%)"
            : "radial-gradient(circle, rgba(251,146,60,0.22) 0%, rgba(251,146,60,0.05) 60%, transparent 80%)",
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "rgb(251,146,60)",
        }}
        animate={{
          width: isHovering ? 6 : isClicking ? 3 : 5,
          height: isHovering ? 6 : isClicking ? 3 : 5,
          opacity: isVisible ? (isHovering ? 1 : 0.85) : 0,
          boxShadow: isHovering
            ? "0 0 12px 3px rgba(251,146,60,0.7)"
            : "0 0 6px 1px rgba(251,146,60,0.4)",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
