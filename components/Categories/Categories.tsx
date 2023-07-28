import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/dummydata";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={({ item: category }) => <CategoryItem category1={category} />}
      style={styles.flatContainer}
      numColumns={2}
      
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatContainer: {
    flex: 1,
    width: "100%",
    /* flexDirection: "row", */
    paddingVertical: 30,
  },
});
