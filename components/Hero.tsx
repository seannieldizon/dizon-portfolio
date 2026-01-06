// components/Hero.tsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero(): JSX.Element {
  const [imageError, setImageError] = useState(false);

  // single easing value used across animations (typed as const)
  const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeSmooth,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #283618 0%, #1f2a13 50%, #18200e 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(82,183,136,0.08)" }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: easeSmooth,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(88,166,120,0.06)" }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: easeSmooth,
          }}
        />
      </div>

      {/* Centered content container */}
      <div className="w-full max-w-5xl px-6 py-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="flex flex-col gap-10 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name and Photo Section - centered */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full justify-center"
          >
            {/* Formal Photo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeSmooth }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-32 h-40 md:w-44 md:h-56 rounded-2xl overflow-hidden border-4 border-sunlit-clay-500/40 shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-sunlit-clay-500/20">
                  {!imageError ? (
                    <img
                      src="/images/sean.jpg"
                      alt="Sean Niel S. Dizon"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
                      <div className="text-center text-gray-400 p-3">
                        <svg
                          className="w-10 h-10 mx-auto mb-2 opacity-50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-xs font-medium">Add your formal photo</p>
                        <p className="text-xs mt-1 text-sunlit-clay-500/70">
                          /public/formal-photo.jpg
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl -z-10"
                  style={{ backgroundColor: "rgba(82,183,136,0.08)" }}
                  animate={{
                    opacity: [0.25, 0.5, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: easeSmooth,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Name and Description (centered) */}
            <div className="flex-1">
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold leading-tight text-sunlit-clay-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: easeSmooth }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Sean Niel S. Dizon
                </motion.span>
              </motion.h1>

              <motion.p
                className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: easeSmooth }}
              >
                Graduating BS Information Technology • Aspiring Full-Stack &
                Systems Engineer.
              </motion.p>

              <motion.div
                className="mt-6 flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: easeSmooth }}
              >
                <motion.a
                  href="#projects"
                  className="btn-mint"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="/Dizon-cv.pdf"
                  className="btn-outline-mint"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Featured Project Card (centered below) */}
          <motion.div
            className="w-full flex justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.9, ease: easeSmooth }}
          >
            <motion.div
              className="card-glass rounded-xl p-6 max-w-2xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="relative h-64 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Project Image */}
                <motion.img
                  src="/images/eduvision-login.png"
                  alt="Faculty Management System"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.6, ease: easeSmooth }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Animated mint glow sweep */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent, rgba(82,183,136,0.25), transparent)",
                  }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: easeSmooth,
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <motion.p
                    className="text-xs uppercase tracking-widest text-mint-200 mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, ease: easeSmooth }}
                  >
                    Featured Project
                  </motion.p>

                  <motion.h3
                    className="text-xl font-semibold text-white"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, ease: easeSmooth }}
                  >
                    Faculty Management System
                  </motion.h3>

                  <motion.p
                    className="mt-1 text-sm text-gray-300 max-w-md mx-auto text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, ease: easeSmooth }}
                  >
                    Role-based faculty records, approvals, and admin dashboards
                    built with modern web tech.
                  </motion.p>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-mint-400/20 group-hover:ring-mint-400/50 transition" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
