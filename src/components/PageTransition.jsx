import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { forceTop } from "./navigation.js";

export default function PageTransition({ page, children }) {
  useEffect(() => {
    forceTop();
    const t1 = setTimeout(forceTop, 60);
    const t2 = setTimeout(forceTop, 160);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [page]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        className="page-shell normal-page-transition"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
