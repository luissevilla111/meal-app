import { FlatList } from "react-native";
import { IMeal } from "../../interfaces/meals";
import MealsItem from "./MealItem";

type Props = {
  meals: IMeal[];
  color: string;
};

const MealList: React.FC<Props> = ({ meals, color }) => {
  return (
    <FlatList
      data={meals}
      renderItem={({ item: meal }) => <MealsItem meal={meal} color={color} />}
    />
  );
};

export default MealList;
