import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Categories from "../components/Categories/Categories";

const CategoriesScreen = () => {
  return (
    <View style={style.screenContainer}>
      {/* <Text>CategoriesScreen</Text> */}
      <Categories />
    </View>
  );
};

export default CategoriesScreen;

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
});
