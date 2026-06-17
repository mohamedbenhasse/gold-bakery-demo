import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText.jsx";
import ScrollSplitText from "./ScrollSplitText.jsx";
import AnimatedLine from "./AnimatedLine.jsx";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 68, damping: 20, mass: 0.75 });

  const logoScale = useTransform(smooth, [0, 0.48, 1], [0.74, 1.38, 4.1]);
  const logoRotate = useTransform(smooth, [0, 1], [0, 26]);
  const logoOpacity = useTransform(smooth, [0, 0.18, 0.8, 1], [0.18, 0.26, 0.42, 0.05]);
  const heroBg = useTransform(smooth, [0, 0.55, 1], ["#fff8ee", "#e2bb66", "#4b0718"]);
  const copyY = useTransform(smooth, [0, 0.6], [0, -120]);
  const subtitleOpacity = useTransform(smooth, [0, 0.28, 0.55], [1, 1, 0]);
  const subtitleY = useTransform(smooth, [0, 0.55], [0, -60]);
  const cueOpacity = useTransform(smooth, [0, 0.22], [1, 0]);
  const orbX = useTransform(smooth, [0, 1], ["-8vw", "16vw"]);
  const orbY = useTransform(smooth, [0, 1], ["10vh", "-16vh"]);

  return (
    <motion.section className="hero" ref={ref} style={{ background: heroBg }}>
      <div className="hero-sticky">
        <motion.div className="hero-orb one" style={{ x: orbX, y: orbY }} />
        <motion.div className="hero-orb two" style={{ x: orbY, y: orbX }} />

        <motion.div className="hero-logo-glow" style={{ scale: logoScale }} />
        <motion.img className="hero-logo" src="assets/logo.png" alt="Gold Bakery logo" style={{ scale: logoScale, rotate: logoRotate, opacity: logoOpacity }} />

        <motion.div className="hero-copy" style={{ y: copyY }}>
          <div className="eyebrow">Luxury home bakery</div>
          <h1>
            <span className="desktop-scroll-title">
              <ScrollSplitText text="Little moments," mode="chars" progress={smooth} range={[0.1, 0.66]} />
              <br />
              <span className="gold"><ScrollSplitText text="baked in gold." mode="chars" progress={smooth} range={[0.16, 0.72]} /></span>
            </span>
            <span className="intro-title-fallback">
              <SplitText text="Little moments," mode="chars" />
              <br />
              <span className="gold"><SplitText text="baked in gold." mode="chars" delay={0.25} /></span>
            </span>
          </h1>
          <motion.p style={{ opacity: subtitleOpacity, y: subtitleY }}>
            A focused menu for elegant gifting, intimate gatherings, and rich homemade flavors.
          </motion.p>
          <AnimatedLine className="hero-line" />
        </motion.div>

        <motion.div className="scroll-cue" style={{ opacity: cueOpacity }}>Scroll down</motion.div>
      </div>
    </motion.section>
  );
}
