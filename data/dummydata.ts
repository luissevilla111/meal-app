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
];

const MEALS_DUMMY: IMeal[] = [
  {
    id: "M1",
    tiitle: "MOLE",
    affordability: "HARD",
    benefits: [],
    categories: ["C1", "C4"],
    duration: "60",
    image: "https://",
    ingredients: [
      { title: "Chile Poblano", icon: "", quntity: 4, mesure: "Un" },
    ],
    steps: ".................",
    video: "https://",
  },
  {
    id: "M2",
    tiitle: "TACOS",
    affordability: "EASY",
    benefits: [],
    categories: ["C1", "C3"],
    duration: "10",
    image: "https://",
    ingredients: [
      { title: "Tortilla", icon: "", quntity: 5, mesure: "Un" },
      { title: "Carne de res", icon: "", quntity: 1, mesure: "Kg" },
    ],
    steps: "zzzzzzzzzzz",
    video: "https://",
  },
  {
    id: "M3",
    tiitle: "Dedos de queso",
    affordability: "MEDIUM",
    benefits: [],
    categories: ["C5"],
    duration: "30",
    image: "https://",
    ingredients: [
      { title: "queso", icon: "", quntity: 0.5, mesure: "Kg" },
      { title: "pierna de pollo", icon: "", quntity: 2, mesure: "Un" },
    ],
    steps: "YYYYYYYYYYYYYYYYYYYYYYYY",
    video: "https://",
  },
];
