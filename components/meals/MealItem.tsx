import { View, Text } from "react-native";
import { IMeal } from "../../interfaces/meals";

type Props = {
  meal: IMeal;
};

const MealsItem: React.FC<Props> = ({ meal }) => {
  return (
    <View>
      <Text>{meal.tiitle}</Text>
    </View>
  );
};

export default MealsItem;
