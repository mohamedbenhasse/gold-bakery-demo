import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ children, className = "", onClick, type = "button" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 16, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 170, damping: 16, mass: 0.35 });

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.28);
    y.set(relY * 0.28);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type={type}
      className={`btn magnetic ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
    >
      <span>{children}</span>
    </motion.button>
  );
}
