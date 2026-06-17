import { motion, useTransform } from "framer-motion";

export default function ScrollSplitText({ text, progress, mode = "words", className = "", range = [0, 1] }) {
  const pieces = mode === "chars" ? [...text] : text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {pieces.map((piece, i) => {
        const offset = i * 0.018;
        const y = useTransform(progress, [range[0] + offset, range[1]], ["0%", "-140%"]);
        const rotate = useTransform(progress, [range[0] + offset, range[1]], [0, -8]);
        const opacity = useTransform(progress, [range[0] + offset, range[1] - 0.08, range[1]], [1, 1, 0]);
        const blur = useTransform(progress, [range[0], range[1]], ["blur(0px)", "blur(8px)"]);
        return (
          <span className="split-mask" key={`${piece}-${i}`}>
            <motion.span className="split-unit" style={{ y, rotate, opacity, filter: blur }}>
              {piece}
              {mode === "words" && i !== pieces.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
