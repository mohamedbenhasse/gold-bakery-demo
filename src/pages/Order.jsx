import { useEffect, useMemo, useState } from "react";
import { orderProducts } from "../data/products.js";
import Reveal from "../components/Reveal.jsx";
import MagneticButton from "../components/MagneticButton.jsx";

const slots = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"];
const toISO = (date) => date.toISOString().split("T")[0];

export default function Order({ selectedProduct = 'berryCheesecake' }) {
  const [productKey, setProductKey] = useState(selectedProduct || "berryCheesecake");
  const [optionIndex, setOptionIndex] = useState(0);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setProductKey(selectedProduct);
      setOptionIndex(0);
    }
  }, [selectedProduct]);

  const product = orderProducts[productKey];
  const option = product.options[optionIndex] || product.options[0];

  const dates = useMemo(() => {
    const today = new Date();
    const min = new Date(today);
    const max = new Date(today);
    min.setDate(today.getDate() + option.preorder);
    max.setDate(today.getDate() + 7);
    return { min: toISO(min), max: toISO(max) };
  }, [option.preorder]);

  return (
    <main>
      <section className="page-hero compact">
        <Reveal>
          <img className="page-logo" src="assets/logo.png" alt="Gold Bakery" />
          <span className="eyebrow">Order flow</span>
          <h1>Choose your item, date, and pickup time.</h1>
          <p>Website payment is still a front-end demo. A real checkout and database can be added later.</p>
        </Reveal>
      </section>

      <section className="order-grid">
        <Reveal className="form-card">
          <h2>Order details</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            setSummary({ product: product.label, option: form.get("option"), date: form.get("date"), slot: form.get("slot"), payment: form.get("payment") });
          }}>
            <div className="form-row">
              <label>Full name<input name="name" required /></label>
              <label>Phone number<input name="phone" required /></label>
            </div>

            <div className="form-row">
              <label>Product
                <select value={productKey} onChange={(e) => { setProductKey(e.target.value); setOptionIndex(0); }}>
                  {Object.entries(orderProducts).map(([key, p]) => <option value={key} key={key}>{p.label}</option>)}
                </select>
              </label>
              <label>Size / option
                <select name="option" value={option.label} onChange={(e) => setOptionIndex(e.target.selectedIndex)}>
                  {product.options.map((opt) => <option key={opt.label}>{opt.label}</option>)}
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>Preferred date
                <input name="date" type="date" min={dates.min} max={dates.max} defaultValue={dates.min} key={dates.min} required />
                <span className="helper">Minimum preorder: {option.preorder} day{option.preorder > 1 ? "s" : ""} · Maximum: 7 days ahead</span>
              </label>
              <label>Time slot
                <select name="slot">{slots.map(slot => <option key={slot}>{slot}</option>)}</select>
                <span className="helper">Working hours: 5:00 PM to 8:00 PM</span>
              </label>
            </div>

            <label>Payment method
              <select name="payment"><option>Card payment</option><option>Apple Pay</option><option>Bank transfer</option></select>
            </label>

            <label>Notes<textarea name="notes" placeholder="Allergies, gift note, delivery notes..." /></label>
            <MagneticButton type="submit">Continue to payment</MagneticButton>
          </form>

          <div className="summary-box">
            {summary ? <><strong>Demo order created.</strong><br />Product: {summary.product}<br />Option: {summary.option}<br />Date: {summary.date} · Slot: {summary.slot}<br />Payment: {summary.payment}</> : "Submit the form to preview the order summary before payment."}
          </div>
        </Reveal>

        <Reveal className="info-card" delay={0.15}>
          <h3>Ordering rules</h3>
          <ul>
            <li>Slices, bites, goodie jars, and goodie tray: minimum 1 day prior.</li>
            <li>Whole cheesecakes and stuffed onions: minimum 2 days prior.</li>
            <li>Maximum preorder window: 7 days ahead.</li>
            <li>Seven time slots from 5:00 PM to 8:00 PM.</li>
          </ul>
          <div className="note-box">Questions and custom requests should go through Instagram. Orders stay on the website.</div>
        </Reveal>
      </section>
    </main>
  );
}
