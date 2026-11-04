// components/InteractiveBackground.tsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.6 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    const sync = () => {
      setReducedMotion(media.matches);
      setEnabled(!media.matches && finePointer.matches);
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
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, mouseX, mouseY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,238,247,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(232,238,247,0.55) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 10%, transparent 75%)",
        }}
      />

      <div
        className="absolute -top-32 left-[12%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "rgba(94,184,240,0.08)" }}
      />
      <div
        className="absolute bottom-[-8rem] right-[8%] h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "rgba(58,160,224,0.07)" }}
      />

      {!reducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-[18%] h-2 w-2 rounded-full bg-primary-400/40"
            animate={{ y: [0, -18, 0], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[55%] right-[22%] h-1.5 w-1.5 rounded-full bg-primary-300/35"
            animate={{ y: [0, 14, 0], opacity: [0.2, 0.65, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
          <motion.div
            className="absolute bottom-[28%] left-[40%] h-1.5 w-1.5 rounded-full bg-light/25"
            animate={{ y: [0, -12, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </>
      )}

      {enabled && (
        <motion.div
          className="absolute h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            x: springX,
            y: springY,
            background:
              "radial-gradient(circle, rgba(94,184,240,0.16) 0%, rgba(94,184,240,0.05) 35%, transparent 68%)",
          }}
        />
      )}
    </div>
  );
}
