import { View, StyleSheet, Text } from "react-native";

type Props = {
  list: string[];
};

const CustomListMeal: React.FC<Props> = ({ list }) => {
  return (
    <View>
      <Text>Title</Text>
      <View style={styles.divisiorLine}></View>
      {list.map((element) => {
        return (
          <View>
            <Text> {element}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CustomListMeal;

const styles = StyleSheet.create({
  divisiorLine: {
    minWidth: 30,
    color: "#fff",
    width: "100%",
  },
});
