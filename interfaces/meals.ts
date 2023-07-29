export interface ICategoryMeal {
  id: string;
  title: string;
  color: string;
}

export interface IMealIngredient {
  title: string;
  icon: string;
  quntity: number;
  mesure: "Lts" | "Kg" | "Un" | "Gr";
}
export interface IBenefit {
  isGlutenFree: boolean;
  isVegan: boolean;
}
export type RankAffordability = "CHALLENGING" | "HARD" | "MEDIUM" | "EASY";

export interface IMeal {
  id: string;
  tiitle: string;
  steps: string;
  duration: string;
  affordability: RankAffordability;
  image: string;
  video: string;
  categories: string[];
  ingredients: IMealIngredient[];
  benefits: IBenefit[];
  isFavorite: boolean;
}
