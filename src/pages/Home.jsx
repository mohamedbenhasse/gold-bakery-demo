import Hero from "../components/Hero.jsx";
import ProductShowcase from "../components/ProductShowcase.jsx";
import Reveal from "../components/Reveal.jsx";
import AnimatedLine from "../components/AnimatedLine.jsx";

export default function Home({ setPage }) {
  return (
    <>
      <Hero />
      <ProductShowcase setPage={setPage} />
      <section className="editorial-section">
        <div className="section-inner">
          <Reveal>
            <span className="eyebrow">Small menu, premium feeling</span>
            <h2 className="section-title gradient-text">A focused bakery experience with motion that feels handmade.</h2>
            <AnimatedLine />
            <p className="lead">
              This version uses mask-style section reveals, product parallax, stacked cards,
              magnetic buttons, and warmer storytelling while keeping the site controlled and elegant.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
