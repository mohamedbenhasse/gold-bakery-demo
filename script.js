const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const hero = document.getElementById('hero-scroll');
if (hero) {
  const sticky = hero.querySelector('.hero-sticky');
  const text = document.getElementById('hero-text');
  const logoFrame = document.getElementById('logo-frame');
  const logoGlow = document.getElementById('logo-glow');
  const scrollPill = document.getElementById('scroll-pill');
  const frameCount = 48;
  const frames = Array.from({ length: frameCount }, (_, i) => `assets/logo-frames/logo-frame-${String(i + 1).padStart(3, '0')}.jpg`);
  frames.forEach(src => { const img = new Image(); img.src = src; });

  function mixColor(a, b, t) {
    const ca = a.match(/\w\w/g).map(x => parseInt(x, 16));
    const cb = b.match(/\w\w/g).map(x => parseInt(x, 16));
    const cc = ca.map((v, i) => Math.round(v + (cb[i] - v) * t));
    return `rgb(${cc[0]}, ${cc[1]}, ${cc[2]})`;
  }

  function updateHero() {
    const total = hero.offsetHeight - window.innerHeight;
    const progress = clamp(-hero.getBoundingClientRect().top / total, 0, 1);
    const frameIndex = Math.min(frameCount - 1, Math.floor(progress * (frameCount - 1)));
    logoFrame.src = frames[frameIndex];

    let bg;
    if (progress < 0.3) {
      bg = mixColor('fff8ee', 'f8f1e4', progress / 0.3);
    } else if (progress < 0.72) {
      bg = mixColor('f8f1e4', 'd1a550', (progress - 0.3) / 0.42);
    } else {
      bg = mixColor('d1a550', 'f8f1e4', (progress - 0.72) / 0.28);
    }
    sticky.style.setProperty('--intro-bg', bg);

    const textOpacity = progress < 0.16 ? 1 : clamp(1 - (progress - 0.16) / 0.18, 0, 1);
    const textMove = progress * -40;
    text.style.opacity = textOpacity;
    text.style.transform = `translateY(${textMove}px)`;

    const appear = clamp((progress - 0.1) / 0.12, 0, 1);
    const grow = progress < 0.72 ? clamp((progress - 0.18) / 0.54, 0, 1) : 1;
    const fadeAfter = progress > 0.82 ? clamp(1 - (progress - 0.82) / 0.18, 0, 1) : 1;
    const scale = 0.45 + grow * 5.3;
    const y = progress < 0.24 ? 140 - appear * 140 : 0;
    logoFrame.style.opacity = appear * fadeAfter;
    logoGlow.style.opacity = (0.35 + grow * 0.65) * fadeAfter;
    logoFrame.style.transform = `translateY(${y}px) scale(${scale})`;
    logoGlow.style.transform = `translateY(${y}px) scale(${0.8 + grow * 5.9})`;
    scrollPill.style.opacity = clamp(1 - progress * 3, 0, 1);
  }

  window.addEventListener('scroll', updateHero, { passive: true });
  window.addEventListener('resize', updateHero);
  updateHero();
}

const showcase = document.getElementById('showcase');
if (showcase) {
  const stage = showcase.querySelector('.stage');
  const items = [...showcase.querySelectorAll('.item')];
  const finalPanel = document.getElementById('final-panel');

  function hexToRgb(hex) {
    const clean = hex.replace('#', '');
    return [parseInt(clean.slice(0,2),16), parseInt(clean.slice(2,4),16), parseInt(clean.slice(4,6),16)];
  }
  function rgbToHex(rgb) {
    return '#' + rgb.map(v => Math.round(v).toString(16).padStart(2,'0')).join('');
  }
  function blendHex(a, b, t) {
    const ca = hexToRgb(a), cb = hexToRgb(b);
    return rgbToHex(ca.map((v, i) => v + (cb[i] - v) * t));
  }

  function updateShowcase() {
    const total = showcase.offsetHeight - window.innerHeight;
    const progress = clamp(-showcase.getBoundingClientRect().top / total, 0, 1);
    const segment = 1 / (items.length + 1.25);

    items.forEach((item, i) => {
      const start = i * segment;
      const local = clamp((progress - start) / segment, 0, 1);
      let x, opacity, scale;
      if (local <= 0.5) {
        const t = local / 0.5;
        x = 120 - 120 * t;
        opacity = t;
        scale = 0.82 + 0.18 * t;
      } else {
        const t = (local - 0.5) / 0.5;
        x = -120 * t;
        opacity = 1 - t;
        scale = 1 - 0.18 * t;
      }
      if (progress < start || progress > start + segment) opacity = 0;
      item.style.opacity = opacity;
      item.style.transform = `translateX(${x}vw) scale(${scale})`;
    });

    const finalStart = items.length * segment + segment * 0.30;
    const fp = clamp((progress - finalStart) / (segment * 0.6), 0, 1);
    finalPanel.style.opacity = fp;
    finalPanel.style.transform = `scale(${0.82 + fp * 0.18})`;

    if (fp > 0.06) {
      const finalT = fp;
      const last = items[items.length - 1];
      stage.style.setProperty('--stage-bg', blendHex(last.dataset.bg, '#f8f1e4', finalT));
      stage.style.setProperty('--stage-accent', blendHex(last.dataset.bg2, '#fff8ee', finalT));
      stage.style.setProperty('--stage-text', '#2d180f');
    } else {
      const raw = progress / segment;
      const idx = Math.min(items.length - 1, Math.max(0, Math.floor(raw)));
      const nextIdx = Math.min(items.length - 1, idx + 1);
      const within = raw - idx;
      const blend = clamp((within - 0.58) / 0.42, 0, 1);
      const current = items[idx];
      const next = items[nextIdx];
      stage.style.setProperty('--stage-bg', blendHex(current.dataset.bg, next.dataset.bg, blend));
      stage.style.setProperty('--stage-accent', blendHex(current.dataset.bg2, next.dataset.bg2, blend));
      stage.style.setProperty('--stage-text', current.dataset.text);
    }
  }

  window.addEventListener('scroll', updateShowcase, { passive: true });
  window.addEventListener('resize', updateShowcase);
  updateShowcase();
}

const productSelect = document.getElementById('product');
const sizeSelect = document.getElementById('sizeOption');
const dateInput = document.getElementById('deliveryDate');
const slotSelect = document.getElementById('timeSlot');
const preorderHint = document.getElementById('preorderHint');
const sizeHint = document.getElementById('sizeHint');
const summaryBox = document.getElementById('summaryBox');
const orderForm = document.getElementById('orderForm');

const productConfig = {
  berryCheesecake: {
    preorder: 1,
    options: [
      { value: 'Slice — 29 QAR', label: '1 Slice — 29 QAR', preorder: 1 },
      { value: '8-inch whole — 215 QAR', label: '8-inch whole — 215 QAR', preorder: 2 }
    ]
  },
  chocoCheesecake: {
    preorder: 1,
    options: [
      { value: 'Slice — 29 QAR', label: '1 Slice — 29 QAR', preorder: 1 },
      { value: '8-inch whole — 215 QAR', label: '8-inch whole — 215 QAR', preorder: 2 }
    ]
  },
  bites: {
    preorder: 1,
    options: [
      { value: '6 bites — 37 QAR', label: '6 Cheesecake Bites — 37 QAR', preorder: 1 }
    ]
  },
  goodieJar: {
    preorder: 1,
    options: [
      { value: '1 jar — 22 QAR', label: '1 Goodie Jar — 22 QAR', preorder: 1 },
      { value: '6 jars — 126 QAR', label: '6 Goodie Jars — 126 QAR (discounted)', preorder: 1 },
      { value: '12 jars — 240 QAR', label: '12 Goodie Jars — 240 QAR (discounted)', preorder: 1 }
    ]
  },
  goodieTray: {
    preorder: 1,
    options: [
      { value: 'Tray for 10–12 people — 244 QAR', label: 'Goodie Tray (10–12 people) — 244 QAR', preorder: 1 }
    ]
  },
  stuffedOnions: {
    preorder: 2,
    options: [
      { value: '10-piece box — 35 QAR', label: 'Box (10 pieces) — 35 QAR', preorder: 2 },
      { value: '30-piece tray — 110 QAR', label: 'Tray (30 pieces) — 110 QAR', preorder: 2 }
    ]
  }
};

const slots = ['5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM'];

function fillSlots() {
  if (!slotSelect) return;
  slotSelect.innerHTML = slots.map(slot => `<option value="${slot}">${slot}</option>`).join('');
}

function getSelectedPreorderDays() {
  const config = productConfig[productSelect.value];
  const opt = config.options[sizeSelect.selectedIndex] || config.options[0];
  return opt.preorder || config.preorder || 1;
}

function updateSizeOptions() {
  if (!productSelect || !sizeSelect) return;
  const config = productConfig[productSelect.value];
  sizeSelect.innerHTML = config.options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');
  sizeHint.textContent = config.options.length > 1 ? 'This product has multiple size options. Choose the size you want.' : 'This product has one standard size option.';
  updateOrderRules();
}

function updateOrderRules() {
  if (!productSelect || !dateInput) return;
  const today = new Date();
  const minDays = getSelectedPreorderDays();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + minDays);
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 7);
  const iso = d => d.toISOString().split('T')[0];
  dateInput.min = iso(minDate);
  dateInput.max = iso(maxDate);
  if (!dateInput.value || dateInput.value < dateInput.min || dateInput.value > dateInput.max) {
    dateInput.value = dateInput.min;
  }
  if (preorderHint) preorderHint.textContent = `Minimum preorder: ${minDays} day${minDays > 1 ? 's' : ''} in advance · Maximum preorder: 7 days ahead.`;
}

if (productSelect) {
  fillSlots();
  updateSizeOptions();
  productSelect.addEventListener('change', updateSizeOptions);
  sizeSelect.addEventListener('change', updateOrderRules);
}

if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(orderForm);
    const method = fd.get('paymentMethod');
    summaryBox.innerHTML = `
      <strong>Demo order created.</strong><br>
      Product: ${fd.get('product')}<br>
      Selected size: ${fd.get('sizeOption')}<br>
      Date: ${fd.get('deliveryDate')} · Slot: ${fd.get('timeSlot')}<br>
      Payment method: ${method}<br>
      Status: This is a front-end demo. In the real version this would continue to secure online checkout and save the order to the database.
    `;
  });
}
