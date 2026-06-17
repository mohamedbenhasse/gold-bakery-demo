import Reveal from "../components/Reveal.jsx";
import AnimatedLine from "../components/AnimatedLine.jsx";
import SplitText from "../components/SplitText.jsx";

export default function Story() {
  return (
    <main className="story-page">
      <section className="story-hero">
        <Reveal>
          <img className="page-logo floating-logo" src="assets/logo.png" alt="Gold Bakery" />
          <span className="eyebrow">Brand story</span>
          <h1><SplitText text="Made for the small moments people remember." mode="words" /></h1>
          <p>
            Gold Bakery is not trying to look like a crowded shop. It is a small home bakery built around care,
            comfort, and the kind of presentation that makes a simple order feel like a gift.
          </p>
        </Reveal>
      </section>

      <section className="warm-story-grid">
        <Reveal className="story-logo-panel story-video-panel blended-story-logo">
          <div className="story-video-bg-wrap">
            <video
              className="story-logo-video"
              src="assets/gold-logo-animation-pingpong-small.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Animated Gold Bakery logo"
            />
            <div className="story-video-soft-mask" />
          </div>
        </Reveal>
        <Reveal className="story-copy" delay={0.15}>
          <span className="eyebrow">Why small works</span>
          <h2>A few signatures, made with intention.</h2>
          <AnimatedLine />
          <p>
            The menu stays focused so each item can have its own identity: rich cheesecake, deep chocolate,
            elegant bites, layered goodie jars, and a savory homemade dish that feels generous.
          </p>
          <p>
            The gold identity is not only about luxury. It is about warmth, effort, and making people feel that
            something was prepared especially for them.
          </p>
          <div className="story-stats">
            <div><strong>5</strong><span>Signature directions</span></div>
            <div><strong>1–2</strong><span>Days preorder</span></div>
            <div><strong>7</strong><span>Evening slots</span></div>
          </div>
        </Reveal>
      </section>

      <section className="quote-section">
        <Reveal>
          <p>“Luxury can still feel warm. It can be a cheesecake slice, a box of bites, or a tray shared at home.”</p>
        </Reveal>
      </section>
    </main>
  );
}
