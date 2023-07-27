import { View, Text } from "react-native";
import { ICategoryMeal } from "../../interfaces/meals";

type Props = {
  children?: React.ReactNode;
  category1: ICategoryMeal;
};
const CategoryItem: React.FC<Props> = ({ children, category1 }) => {
  return (
    <View>
      <Text>{category1.title}</Text>
    </View>
  );
};

export default CategoryItem;
