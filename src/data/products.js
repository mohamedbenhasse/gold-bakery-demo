export const products = [
  {
    id: "berry",
    number: "01",
    name: "Berry Cheesecake",
    kicker: "Berry / Cream / Compote",
    headline: "Berry\nCheesecake",
    description: "Silky cheesecake, glossy berry compote, fresh strawberries, and blueberries.",
    image: "assets/berry-slice.png",
    imageMenu: "assets/berry-whole.png",
    color: "#13070A",
    color2: "#681127",
    cream: "#fff1e4",
    accent: "#ffb8c9",
    price: "from 29 QAR"
  },
  {
    id: "chocolate",
    number: "02",
    name: "Chocolate Cheesecake",
    kicker: "Chocolate / Cream / Berries",
    headline: "Chocolate\nCheesecake",
    description: "Creamy cheesecake crowned with Belgian chocolate and elegant fresh berries.",
    image: "assets/chocolate-slice.png",
    imageMenu: "assets/chocolate-whole.png",
    color: "#0B0605",
    color2: "#4A2116",
    cream: "#fff4e2",
    accent: "#f1b15b",
    price: "from 29 QAR"
  },
  {
    orderKey: "bites",
    id: "bites",
    number: "03",
    name: "Cheesecake Bites",
    kicker: "Bites / Gift / Dip",
    headline: "Cheesecake\nBites",
    description: "Mini berry and chocolate bites in a slim premium tray with a dip cup.",
    image: "assets/cheesecake-bites-corrected.png",
    imageMenu: "assets/cheesecake-bites-corrected.png",
    color: "#1A0F08",
    color2: "#C59542",
    cream: "#fff7e9",
    accent: "#fff0d0",
    price: "37 QAR"
  },
  {
    id: "goodie",
    number: "04",
    name: "Goodie Jars",
    kicker: "Brownie / Biscuit / Belgian Chocolate",
    headline: "Goodie\nJars",
    description: "Brownies, biscuits, Belgian chocolate sauce, and white chocolate chips.",
    image: "assets/goodie-jar.png",
    imageMenu: "assets/goodie-tray.png",
    color: "#070504",
    color2: "#3C170D",
    cream: "#fff0dc",
    accent: "#e8b064",
    price: "from 22 QAR"
  },
  {
    id: "onions",
    number: "05",
    name: "Stuffed Onions",
    kicker: "Savory / Lemon / Pomegranate",
    headline: "Stuffed\nOnions",
    description: "A polished savory dish with herbs, pomegranate, lemon, and deep homemade flavor.",
    image: "assets/stuffed-onions.png",
    imageMenu: "assets/stuffed-onions-small.png",
    color: "#11110A",
    color2: "#8A782C",
    cream: "#fff6df",
    accent: "#f2d574",
    price: "from 35 QAR"
  }
];

export const menuItems = [
  {
    orderKey: "berryCheesecake",
    id: "berry-cheesecake",
    title: "Berry Cheesecake",
    subtitle: "A smooth cream base with bright berry richness.",
    image: "assets/berry-whole.png",
    theme: "#8a1b36",
    preorder: "Slice: 1 day prior · 8-inch cake: 2 days prior",
    sizes: [{ label: "1 Slice", price: "29 QAR" }, { label: "8-inch Whole Cheesecake", price: "215 QAR" }],
    ingredients: ["Graham crackers or lotus biscuit base", "Cream cheese, whipping cream, butter, sugar", "Corn starch and eggs", "Berry mix, fresh strawberries, blueberries"]
  },
  {
    orderKey: "chocoCheesecake",
    id: "chocolate-cheesecake",
    title: "Chocolate Cheesecake",
    subtitle: "Rich Belgian chocolate over creamy cheesecake.",
    image: "assets/chocolate-whole.png",
    theme: "#5a2b19",
    preorder: "Slice: 1 day prior · 8-inch cake: 2 days prior",
    sizes: [{ label: "1 Slice", price: "29 QAR" }, { label: "8-inch Whole Cheesecake", price: "215 QAR" }],
    ingredients: ["Digestive or graham crumb base", "Cream cheese, whipping cream, butter, sugar", "Dark chocolate, milk chocolate, white chocolate garnish", "Fresh berries for topping"]
  },
  {
    orderKey: "bites",
    id: "bites",
    title: "Cheesecake Bites",
    subtitle: "Six delicate bites with berry dip.",
    image: "assets/cheesecake-bites-corrected.png",
    theme: "#b47c35",
    preorder: "6 pieces · Minimum preorder: 1 day",
    sizes: [{ label: "6 Cheesecake Bites", price: "37 QAR" }],
    ingredients: ["Cheesecake base and creamy filling", "Berry compote and chocolate topping", "Fresh strawberries, blueberries, and berry dip cup"]
  },
  {
    orderKey: "goodieJar",
    id: "goodie-jars",
    title: "Goodie Jars",
    subtitle: "Layered brownie comfort with Belgian chocolate.",
    image: "assets/goodie-jar.png",
    theme: "#3b1a10",
    preorder: "Minimum preorder: 1 day · Better value on multi-jar orders",
    discount: "Discount applied when ordering more",
    sizes: [{ label: "1 Goodie Jar", price: "22 QAR" }, { label: "6 Goodie Jars", oldPrice: "132 QAR", price: "126 QAR" }, { label: "12 Goodie Jars", oldPrice: "264 QAR", price: "240 QAR" }],
    ingredients: ["Chocolate brownie or cake pieces", "Lotus or biscuit pieces", "Belgian chocolate sauce", "White chocolate chips"]
  },
  {
    orderKey: "goodieTray",
    id: "goodie-tray",
    title: "Goodie Tray",
    subtitle: "The sharing version for gatherings.",
    image: "assets/goodie-tray.png",
    theme: "#4b2415",
    preorder: "10–12 people · Minimum preorder: 1 day",
    sizes: [{ label: "Goodie Tray", price: "244 QAR" }],
    ingredients: ["Chocolate brownie or cake chunks", "Lotus or biscuit pieces", "Belgian chocolate sauce", "White chocolate chips"]
  },
  {
    orderKey: "stuffedOnions",
    id: "stuffed-onions",
    title: "Stuffed Onions",
    subtitle: "Warm savory comfort, finished with lemon and pomegranate.",
    image: "assets/stuffed-onions-small.png",
    theme: "#68602c",
    preorder: "10 pieces or 30 pieces · Minimum preorder: 2 days",
    sizes: [{ label: "Box (10 pieces)", price: "35 QAR" }, { label: "Tray (30 pieces)", price: "110 QAR" }],
    ingredients: ["Onions, rice, tomato paste, olive oil", "Lemon, parsley, mint, tomato, potato", "Pomegranate, pomegranate molasses, spices"]
  }
];

export const orderProducts = {
  berryCheesecake: { label: "Berry Cheesecake", options: [{ label: "1 Slice — 29 QAR", preorder: 1 }, { label: "8-inch whole — 215 QAR", preorder: 2 }] },
  chocoCheesecake: { label: "Chocolate Cheesecake", options: [{ label: "1 Slice — 29 QAR", preorder: 1 }, { label: "8-inch whole — 215 QAR", preorder: 2 }] },
  bites: { label: "Cheesecake Bites", options: [{ label: "6 Cheesecake Bites — 37 QAR", preorder: 1 }] },
  goodieJar: { label: "Goodie Jars", options: [{ label: "1 Goodie Jar — 22 QAR", preorder: 1 }, { label: "6 Goodie Jars — 126 QAR", preorder: 1 }, { label: "12 Goodie Jars — 240 QAR", preorder: 1 }] },
  goodieTray: { label: "Goodie Tray", options: [{ label: "Goodie Tray (10–12 people) — 244 QAR", preorder: 1 }] },
  stuffedOnions: { label: "Stuffed Onions", options: [{ label: "Box (10 pieces) — 35 QAR", preorder: 2 }, { label: "Tray (30 pieces) — 110 QAR", preorder: 2 }] }
};
