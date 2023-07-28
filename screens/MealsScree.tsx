import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Meals: {
    // Define la estructura de los parámetros de ruta
    mealId: string;
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
  const { mealId } = route.params;
  return (
    <View>
      <Text> MealId: {mealId}</Text>
    </View>
  );
};

export default MealsScreen;
