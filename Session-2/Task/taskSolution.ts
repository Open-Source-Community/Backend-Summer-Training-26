import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

// ------------------------------------------------------------
// Step 1: Data model + hardcoded menu
// ------------------------------------------------------------

interface KosharyBowl {
  id: number;
  name: string;
  size: "Small" | "Medium" | "Large" | "Mega";
  price: number;
  ingredients: string[];
  available: boolean;
}

const menu: KosharyBowl[] = [
  {
    id: 1,
    name: "Lux",
    size: "Medium",
    price: 30,
    ingredients: [
      "Rice",
      "Macaroni",
      "Lentils",
      "Chickpeas",
      "Tomato Sauce",
      "Garlic vinegar (Daqqa)",
    ],
    available: true,
  },
  {
    id: 2,
    name: "Kemala",
    size: "Small",
    price: 15,
    ingredients: ["Rice", "Macaroni", "Lentils", "Tomato Sauce"],
    available: true,
  },
  {
    id: 3,
    name: "Wekala Special",
    size: "Large",
    price: 60,
    ingredients: [
      "Rice",
      "Macaroni",
      "Lentils",
      "Chickpeas",
      "Fried Onions",
      "Tomato Sauce",
      "Garlic vinegar (Daqqa)",
    ],
    available: true,
  },
  {
    id: 4,
    name: "Abdo's Mega Bowl",
    size: "Mega",
    price: 50,
    ingredients: [
      "Rice",
      "Macaroni",
      "Lentils",
      "Chickpeas",
      "Fried Onions",
      "Tomato Sauce",
    ],
    available: false,
  },
  {
    id: 5,
    name: "Basic",
    size: "Small",
    price: 20,
    ingredients: ["Rice", "Lentils", "Tomato Sauce"],
    available: true,
  },
];

// ------------------------------------------------------------
// Step 3: GET /
// ------------------------------------------------------------

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Koshary El-Wekala! (Abdo is not welcome though!)",
  });
});

// ------------------------------------------------------------
// Step 4: GET /menu
// ------------------------------------------------------------

app.get("/menu", (req: Request, res: Response) => {
  res.status(200).json(menu);
});

// ------------------------------------------------------------
// Step 5: GET /menu/cheap
// ------------------------------------------------------------

app.get("/menu/cheap", (req: Request, res: Response) => {
  const cheapBowls: KosharyBowl[] = menu.filter((bowl) => bowl.price < 30);
  res.status(200).json(cheapBowls);
});

// ------------------------------------------------------------
// Step 6: GET /stats
// ------------------------------------------------------------

app.get("/stats", (req: Request, res: Response) => {
  const totalBowls: number = menu.length;
  const availableBowls: number = menu.filter((bowl) => bowl.available).length;

  const prices: number[] = menu.map((bowl) => bowl.price);
  const averagePrice: number =
    prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const minPrice: number = Math.min(...prices);
  const maxPrice: number = Math.max(...prices);

  res.status(200).json({
    totalBowls,
    availableBowls,
    averagePrice,
    minPrice,
    maxPrice,
  });
});

app.listen(PORT, () => {
  console.log(`Koshary El-Wekala is open for business on port ${PORT}!`);
});

module.exports = app;
