import { View, FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummydata";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={(category) => <CategoryItem />}
    />
  );
};

export default Categories;
