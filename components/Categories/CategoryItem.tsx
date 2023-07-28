import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ICategoryMeal } from "../../interfaces/meals";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type Props = {
  children?: React.ReactNode;
  category1: ICategoryMeal;
};
type Nav = {
  navigate: (value: string) => void;
};
const CategoryItem: React.FC<Props> = ({ children, category1 }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const navigateToMeals = () => {
    navigation.navigate("Meals", { mealId: category1.id });
  };

  return (
    <TouchableOpacity style={styles.cardCategory} onPress={navigateToMeals}>
      <Text style={styles.categoryText}>{category1.title}</Text>
      {/* <View style={styles.circle}> </View> */}
      <View
        style={{ ...styles.circle, backgroundColor: category1.color }}
      ></View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardCategory: {
    flex: 1,
    backgroundColor: "#121212",
    width: "100%",
    minHeight: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 8,
    position: "relative",
    overflow: "hidden",
  },
  categoryText: {
    color: "#fff",
    fontSize: 30,
  },

  circle: {
    position: "absolute",
    /* top: -10,
    right: -10, */
    top: 0,
    right: 0,
    width: 40,
    height: "100%",
    zIndex: -1,

    /* borderRadius: 40 / 2, */
  },
});
