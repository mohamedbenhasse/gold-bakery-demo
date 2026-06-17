import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedLine({ className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={`animated-line ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={inView ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
