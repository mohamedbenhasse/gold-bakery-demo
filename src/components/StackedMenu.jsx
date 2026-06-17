import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { menuItems } from "../data/products.js";
import MagneticButton from "./MagneticButton.jsx";
import { goPage, forceTop } from "./navigation.js";

function StackCard({ item, index, total, setPage, setSelectedProduct }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 78%", "end 18%"] });
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.965]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, -1.2]);

  function orderThisItem() {
    setSelectedProduct(item.orderKey);
    forceTop();
    goPage("order", setPage);
  }

  return (
    <motion.article
      ref={ref}
      className="stack-card"
      style={{ top: `calc(96px + ${index * 14}px)`, scale: cardScale, rotate: cardRotate, zIndex: total + index }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="stack-media">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="stack-content">
        <span className="stack-kicker">{item.preorder}</span>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
        {item.discount && <div className="discount-pill">{item.discount}</div>}
        <div className="size-list">
          {item.sizes.map(size => (
            <div className="size-row" key={size.label}>
              <span>{size.label}</span>
              <strong>{size.oldPrice && <em>{size.oldPrice}</em>}{size.price}</strong>
            </div>
          ))}
        </div>
        <ul className="ingredient-list">
          {item.ingredients.slice(0, 3).map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
        <MagneticButton className="menu-order-btn" onClick={orderThisItem}>Order this item</MagneticButton>
      </div>
    </motion.article>
  );
}

export default function StackedMenu({ setPage, setSelectedProduct }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [86, -95]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section className="stacked-menu" ref={ref}>
      <motion.div className="menu-bg-word" style={{ y: bgY }}>Menu</motion.div>
      <motion.div className="stacked-intro" style={{ y: titleY }}>
        <span className="eyebrow">Menu & pricing</span>
        <h1>Choose the size that fits the moment.</h1>
        <p>Stacked cards move like a premium catalog while keeping prices and preorder rules clear.</p>
      </motion.div>

      <div className="stack-list">
        {menuItems.map((item, index) => (
          <StackCard
            key={item.id}
            item={item}
            index={index}
            total={menuItems.length}
            setPage={setPage}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>
    </section>
  );
}
