import { motion } from "framer-motion";

export default function SplitText({ text, mode = "words", delay = 0, className = "" }) {
  const pieces = mode === "chars" ? [...text] : text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {pieces.map((piece, index) => (
        <span className="split-mask" key={`${piece}-${index}`}>
          <motion.span
            aria-hidden="true"
            className="split-unit"
            initial={{ y: "120%", rotate: mode === "chars" ? 7 : 0, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + index * (mode === "chars" ? 0.018 : 0.06)
            }}
          >
            {piece}
            {mode === "words" && index !== pieces.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
