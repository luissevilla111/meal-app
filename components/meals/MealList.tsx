import { FlatList } from "react-native";
import { IMeal } from "../../interfaces/meals";
import MealsItem from "./MealItem";

type Props = {
  meals: IMeal[];
};

const MealList: React.FC<Props> = ({ meals }) => {
  return (
    <FlatList
      data={meals}
      renderItem={({ item: meal }) => <MealsItem meal={meal} />}
    />
  );
};

export default MealList;
