import { View, Text, StyleSheet } from "react-native";
import { ICategoryMeal } from "../../interfaces/meals";

type Props = {
  children?: React.ReactNode;
  category1: ICategoryMeal;
};
const CategoryItem: React.FC<Props> = ({ children, category1 }) => {
  return (
    <View style={styles.cardCategory}>
      <Text style={styles.categoryText}>{category1.title}</Text>
      {/* <View style={styles.circle}> </View> */}
      <View
        style={{ ...styles.circle, backgroundColor: category1.color }}
      ></View>
    </View>
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
    top: -10,
    right: -10,
    width: 40,
    height: 40,

    borderRadius: 40 / 2,
  },
});
