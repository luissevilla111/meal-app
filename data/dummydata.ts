import { ICategoryMeal, IMeal } from "../interfaces/meals";

export const CATEGORIES: ICategoryMeal[] = [
  {
    id: "C1",
    color: "#77dd77",
    title: "Mexicana",
  },
  {
    id: "C2",
    color: "#ff6961",
    title: "USA",
  },
  {
    id: "C3",
    color: "#84b6f4",
    title: "Rapida",
  },
  {
    id: "C4",
    color: "#fdcae1",
    title: "Picosa",
  },
  {
    id: "C5",
    color: "#fdfd96",
    title: "Aperitivos",
  },
  {
    id: "C6",
    color: "#77dd77",
    title: "China",
  },
  {
    id: "C7",
    color: "#84b6f4",
    title: "Japonesa",
  },
  {
    id: "C8",
    color: "#ff6961",
    title: "Salada",
  },
  {
    id: "C9",
    color: "#fdcae1",
    title: "Postres",
  },
  {
    id: "C10",
    color: "#fdfd96",
    title: "Fria",
  },
  {
    id: "C11",
    color: "#fdcae1",
    title: "Sana",
  },
];

export const MEALS_DUMMY: IMeal[] = [
  {
    id: "M1",
    tiitle: "MOLE",
    affordability: "HARD",
    benefits: [],
    categories: ["C1", "C4"],
    duration: "60",
    image:
      "https://img.freepik.com/fotos-premium/mole-poblano-tradicional-arroz_123827-12896.jpg",
    ingredients: [
      { title: "Chile Poblano", icon: "", quntity: 4, mesure: "Un" },
    ],
    isFavorite: true,
    steps: ".................",
    video:
      "https://www.eluniversal.com.mx/resizer/P2WeOYmFsEeBn-puypa2Wdplqgs=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/M7BQKUZB45F5RF4D6YY2F2XDSY.jpg",
  },
  {
    id: "M2",
    tiitle: "TACOS",
    affordability: "EASY",
    benefits: [],
    categories: ["C1", "C3"],
    duration: "10",
    image: "https://assets.stickpng.com/thumbs/58727facf3a71010b5e8ef07.png",
    ingredients: [
      { title: "Tortilla", icon: "", quntity: 5, mesure: "Un" },
      { title: "Carne de res", icon: "", quntity: 1, mesure: "Kg" },
    ],
    isFavorite: false,
    steps: "zzzzzzzzzzz",
    video:
      "https://www.eluniversal.com.mx/resizer/P2WeOYmFsEeBn-puypa2Wdplqgs=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/M7BQKUZB45F5RF4D6YY2F2XDSY.jpg",
  },
  {
    id: "M3",
    tiitle: "Dedos de queso",
    affordability: "MEDIUM",
    benefits: [],
    categories: ["C5"],
    duration: "30",
    image:
      "https://w7.pngwing.com/pngs/388/761/png-transparent-fast-food-mcdonald-s-1-store-museum-mozzarella-sticks-marinara-sauce-cheese-fast-food-mcdonald-s-store-thumbnail.png",
    ingredients: [
      { title: "queso", icon: "", quntity: 0.5, mesure: "Kg" },
      { title: "pierna de pollo", icon: "", quntity: 2, mesure: "Un" },
    ],
    isFavorite: true,
    steps: "YYYYYYYYYYYYYYYYYYYYYYYY",
    video: "",
  },
  {
    id: "M4",
    tiitle: "Hamburguesa",
    affordability: "EASY",
    benefits: [],
    categories: ["C2", "C3"],
    duration: "40",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/pngwing.com(2).png?alt=media&token=bde13cf8-4b17-4da9-90cf-c16db83b2e1f",
    ingredients: [
      { title: "queso", icon: "", quntity: 3, mesure: "Un" },
      { title: "carne molida", icon: "", quntity: 0.2, mesure: "Gr" },
      { title: "Pan", icon: "", quntity: 2, mesure: "Un" },
    ],
    isFavorite: true,
    steps: "YYYYYYYYYYYYYYYYYYYYYYYY",
    video: "",
  },
  {
    id: "M5",
    tiitle: "HOT-DOG",
    affordability: "EASY",
    benefits: [],
    categories: ["C2", "C3"],
    duration: "40",
    image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c1b7.png",
    ingredients: [
      { title: "salchichas", icon: "", quntity: 2, mesure: "Un" },
      { title: "Pan", icon: "", quntity: 1, mesure: "Un" },
    ],
    isFavorite: false,
    steps: "djkajdaksd",
    video:
      "https://www.eluniversal.com.mx/resizer/P2WeOYmFsEeBn-puypa2Wdplqgs=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/M7BQKUZB45F5RF4D6YY2F2XDSY.jpg",
  },

  {
    id: "M6",
    tiitle: "Pastel de tres leches",
    affordability: "CHALLENGING",
    benefits: [],
    categories: ["C9"],
    duration: "200",
    image:
      "https://www.pngkit.com/png/full/598-5986228_tres-leches-decoracion-pastel-3-leches.png",
    ingredients: [
      { title: "Huevo", icon: "", quntity: 2, mesure: "Kg" },
      { title: "leche", icon: "", quntity: 3, mesure: "Lts" },
      { title: "Fresas", icon: "", quntity: 5, mesure: "Un" },
    ],
    isFavorite: true,
    steps: "fsodifsdf.....",
    video: "",
  },

  {
    id: "M7",
    tiitle: "Example Meal",
    affordability: "HARD",
    benefits: [],
    categories: ["C9", "C1", "C3", "C7"],
    duration: "200",
    image:
      "https://www.eluniversal.com.mx/resizer/P2WeOYmFsEeBn-puypa2Wdplqgs=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/M7BQKUZB45F5RF4D6YY2F2XDSY.jpg",
    ingredients: [
      { title: "ingredient1", icon: "", quntity: 1, mesure: "Kg" },
      { title: "ingredient2", icon: "", quntity: 2, mesure: "Un" },
      { title: "ingredient3", icon: "", quntity: 3, mesure: "Lts" },
    ],
    isFavorite: false,
    steps: "?????????????",
    video:
      "https://www.eluniversal.com.mx/resizer/P2WeOYmFsEeBn-puypa2Wdplqgs=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/M7BQKUZB45F5RF4D6YY2F2XDSY.jpg",
  },
];
