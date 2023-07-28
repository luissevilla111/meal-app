import { View, Text, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RouteProp } from "@react-navigation/native";
import { MEALS_DUMMY } from "../data/dummydata";
import { useEffect, useState } from "react";
import { IMeal } from "../interfaces/meals";
import MealsItem from "../components/meals/MealItem";
import MealList from "../components/meals/MealList";

type RootStackParamList = {
  Meals: {
    // Define la estructura de los parámetros de ruta
    mealId: string;
    color: string;
    // Agrega más parámetros según tus necesidades
  };
};

type MealsScreenRouteProp = RouteProp<RootStackParamList, "Meals">;

type Props = {
  children?: React.ReactNode;
  /* navigation: StackNavigationProp<RootStackParamList, "Meals">; */
  route: MealsScreenRouteProp; // Agrega el tipo para la ruta
};

const MealsScreen: React.FC<Props> = ({ route }) => {
  const { mealId, color } = route.params;
  //const meals = MEALS_DUMMY.filter(meal=>{})

  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    const mealsLocal = MEALS_DUMMY.filter((meal) => {
      const categories = meal.categories;

      return categories.some((category) => category === mealId);
    });
    setMeals(mealsLocal);
  }, []);

  return <MealList meals={meals} color={color} />;
};

export default MealsScreen;
