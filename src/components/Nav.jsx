import { motion } from "framer-motion";
import { goPage } from "./navigation.js";

export default function Nav({ setPage }) {
  const go = (target) => (e) => {
    e.preventDefault();
    goPage(target, setPage);
  };

  return (
    <motion.nav className="nav" initial={{ y: -90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
      <a className="brand" href="#home" onClick={go("home")}>
        <motion.img src="assets/logo.png" alt="Gold Bakery" whileHover={{ rotate: 8, scale: 1.06 }} />
        <span>Gold Bakery</span>
      </a>
      <div className="nav-links">
        <a href="#products" onClick={(e) => {
          e.preventDefault();
          window.history.pushState(null, "", "#home");
          setPage("home");
          setTimeout(() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }), 80);
        }}>Products</a>
        <a href="#menu" onClick={go("menu")}>Menu</a>
        <a href="#story" onClick={go("story")}>Story</a>
        <a className="nav-cta" href="#order" onClick={go("order")}>Order</a>
      </div>
    </motion.nav>
  );
}
