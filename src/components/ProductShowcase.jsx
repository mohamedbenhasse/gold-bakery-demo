import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { products } from "../data/products.js";
import MagneticButton from "./MagneticButton.jsx";
import { goPage, forceTop } from "./navigation.js";

const HOLD_END = 0.12;
const ACTIVE_START = 0.12;
const ACTIVE_END = 0.84;

function Scene({ product, index, progress }) {
  const itemCount = products.length;
  const span = (ACTIVE_END - ACTIVE_START) / itemCount;
  const start = ACTIVE_START + index * span;
  const center = start + span * 0.45;
  const end = start + span * 0.95;

  const isFirst = index === 0;

  const imageX = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end], ["0vw", "0vw", "0vw", "-42vw"])
    : useTransform(progress, [start, center, end], ["54vw", "0vw", "-42vw"]);

  const imageY = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end], ["-4vh", "-4vh", "-4vh", "-18vh"])
    : useTransform(progress, [start, center, end], ["17vh", "-4vh", "-18vh"]);

  const imageScale = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end], [1.06, 1.06, 1.06, 0.66])
    : useTransform(progress, [start, center, end], [0.64, 1.06, 0.66]);

  const imageRotate = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end], [0, 0, 0, -8])
    : useTransform(progress, [start, center, end], [8, 0, -8]);

  const imageOpacity = isFirst
    ? useTransform(progress, [0, HOLD_END, end - 0.045, end], [1, 1, 1, 0])
    : useTransform(progress, [start, start + 0.035, end - 0.045, end], [0, 1, 1, 0]);

  const imageClip = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end], ["inset(0% 0% 0% 0% round 6px)", "inset(0% 0% 0% 0% round 6px)", "inset(0% 0% 0% 0% round 6px)", "inset(18% 26% 18% 26% round 10px)"])
    : useTransform(progress, [start, start + 0.08, center, end - 0.05, end], ["inset(18% 22% 18% 22% round 10px)", "inset(0% 0% 0% 0% round 6px)", "inset(0% 0% 0% 0% round 6px)", "inset(0% 0% 0% 0% round 6px)", "inset(18% 26% 18% 26% round 10px)"]);

  const textX = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end], ["0vw", "0vw", "0vw", "-21vw"])
    : useTransform(progress, [start, center, end], ["-18vw", "0vw", "-21vw"]);

  const textY = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end], ["0vh", "0vh", "0vh", "-9vh"])
    : useTransform(progress, [start, center, end], ["9vh", "0vh", "-9vh"]);

  const textOpacity = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end - 0.04, end], [1, 1, 1, 0.78, 0])
    : useTransform(progress, [start, start + 0.04, center, end - 0.04, end], [0, 1, 1, 0.78, 0]);

  const lineScale = isFirst
    ? useTransform(progress, [0, HOLD_END, center, end - 0.05, end], [1, 1, 1, 0.25, 0])
    : useTransform(progress, [start, start + 0.08, center, end - 0.05, end], [0, 1, 1, 0.25, 0]);

  const lineOpacity = isFirst
    ? useTransform(progress, [0, HOLD_END, end - 0.06, end], [1, 1, 1, 0])
    : useTransform(progress, [start, start + 0.06, end - 0.06, end], [0, 1, 1, 0]);

  return (
    <article className="scene">
      <motion.div className="scene-copy" style={{ x: textX, y: textY, opacity: textOpacity }}>
        <motion.div className="scene-number">{product.number}</motion.div>
        <div className="scene-kicker">{product.kicker}</div>
        <motion.div className="mini-line" style={{ scaleX: lineScale, opacity: lineOpacity }} />
        <h2>{product.headline.split("\n").map(line => <span key={line}>{line}</span>)}</h2>
        <p>{product.description}</p>
        <a className="price-pill" href="#menu">{product.price}</a>
      </motion.div>

      <motion.div className="scene-image-wrap sharp-product-card" style={{ x: imageX, y: imageY, scale: imageScale, rotate: imageRotate, opacity: imageOpacity, clipPath: imageClip }}>
        <div className="scene-image-shine" />
        <img src={product.image} alt={product.name} />
      </motion.div>
    </article>
  );
}

export default function ProductShowcase({ setPage }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 74, damping: 23, mass: 0.72 });

  const bgX = useTransform(progress, [0, 0.84], ["0%", "-45%"]);
  const bgScale = useTransform(progress, [0, 0.5, 1], [1.04, 1.0, 1.03]);
  const bgOpacity = useTransform(progress, [0, 0.76, 0.88, 0.95], [1, 1, 0.16, 0]);

  const finalBaseOpacity = useTransform(progress, [0.80, 0.88, 0.94], [0, 1, 1]);
  const finalOpacity = useTransform(progress, [0.88, 0.94, 1], [0, 1, 1]);
  const finalY = useTransform(progress, [0.88, 0.96], [90, 0]);
  const finalScale = useTransform(progress, [0.88, 0.96], [0.78, 1]);
  const finalRotateX = useTransform(progress, [0.84, 0.96], [18, 0]);

  function openPage(target) {
    forceTop();
    goPage(target, setPage);
  }

  return (
    <section className="product-showcase" id="products" ref={ref}>
      <div className="product-sticky">
        <div className="product-bg-image-clip">
          <motion.img
            className="product-bg-image"
            src="assets/gold-bakery-product-gradient.jpg"
            alt=""
            style={{ x: bgX, scale: bgScale, opacity: bgOpacity }}
          />
        </div>

        <motion.div className="final-base-bg" style={{ opacity: finalBaseOpacity }} />
        <motion.div className="giant-word">Gold</motion.div>

        {products.map((product, i) => (
          <Scene key={product.id} product={product} index={i} progress={progress} />
        ))}

        <motion.div className="final-cta clean-final-cta" style={{ opacity: finalOpacity, y: finalY, scale: finalScale, rotateX: finalRotateX }}>
          <p>Now it is your turn</p>
          <h2>Pick your item</h2>
          <div className="heart">♥</div>
          <div className="btn-row">
            <MagneticButton onClick={() => openPage("menu")}>View menu</MagneticButton>
            <MagneticButton className="secondary" onClick={() => openPage("order")}>Place order</MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
