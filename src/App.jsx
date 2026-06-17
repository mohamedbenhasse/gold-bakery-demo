import { useEffect, useState } from "react";
import SmoothScroll from "./components/SmoothScroll.jsx";
import Nav from "./components/Nav.jsx";
import PageTransition from "./components/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Story from "./pages/Story.jsx";
import Order from "./pages/Order.jsx";

function currentFromHash() {
  const hash = window.location.hash.replace("#", "");
  return ["home", "menu", "story", "order"].includes(hash) ? hash : "home";
}

export default function App() {
  const [page, setPage] = useState(currentFromHash);
  const [selectedProduct, setSelectedProduct] = useState("berryCheesecake");

  useEffect(() => {
    const onHash = () => setPage(currentFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <SmoothScroll />
      <Nav setPage={setPage} />
      <PageTransition page={page}>
        {page === "home" && <Home setPage={setPage} />}
        {page === "menu" && <Menu setPage={setPage} setSelectedProduct={setSelectedProduct} />}
        {page === "story" && <Story />}
        {page === "order" && <Order selectedProduct={selectedProduct} />}
      </PageTransition>
      <footer className="footer">
        <strong>Gold Bakery</strong>
        <span>React V4 · Option C colors · fixed navigation · order shortcuts</span>
      </footer>
    </>
  );
}
