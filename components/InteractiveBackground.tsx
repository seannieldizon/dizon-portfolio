// components/InteractiveBackground.tsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cursorOn, setCursorOn] = useState(false);

  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 22, mass: 0.45 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 22, mass: 0.45 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    const sync = () => {
      setReducedMotion(media.matches);
      setCursorOn(!media.matches && finePointer.matches);
    };

    sync();
    media.addEventListener("change", sync);
    finePointer.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      finePointer.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!cursorOn) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorOn, mouseX, mouseY]);

  return (
    <>
      {/* Base ambient layer — behind page content */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,184,220,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148,184,220,0.09) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 85%)",
          }}
        />

        <div
          className="absolute -top-24 -left-16 h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{ background: "rgba(94,184,240,0.22)" }}
        />
        <div
          className="absolute top-[35%] -right-20 h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{ background: "rgba(58,160,224,0.18)" }}
        />
        <div
          className="absolute -bottom-28 left-[30%] h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "rgba(125,200,255,0.12)" }}
        />

        {!reducedMotion && (
          <>
            <motion.div
              className="absolute top-[18%] left-[14%] h-2.5 w-2.5 rounded-full bg-primary-300/70 shadow-[0_0_18px_rgba(94,184,240,0.65)]"
              animate={{ y: [0, -22, 0], opacity: [0.35, 0.95, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-[48%] right-[18%] h-2 w-2 rounded-full bg-primary-400/70 shadow-[0_0_14px_rgba(94,184,240,0.55)]"
              animate={{ y: [0, 18, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.div
              className="absolute bottom-[22%] left-[42%] h-1.5 w-1.5 rounded-full bg-light/60 shadow-[0_0_12px_rgba(232,238,247,0.45)]"
              animate={{ y: [0, -14, 0], opacity: [0.25, 0.8, 0.25] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div
              className="absolute top-[72%] left-[12%] h-2 w-2 rounded-full bg-primary-200/50"
              animate={{ x: [0, 16, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            />
          </>
        )}
      </div>

      {/* Cursor spotlight — same layer as ambient, visible through translucent sections */}
      {cursorOn && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[1] h-[36rem] w-[36rem] rounded-full"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(140,210,255,0.34) 0%, rgba(94,184,240,0.16) 30%, transparent 64%)",
          }}
          aria-hidden
        />
      )}
    </>
  );
}
